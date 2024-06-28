import React, { useEffect, useState } from "react";
import { Table, Space, Modal, Input } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInputsCompras from "./FormInputs";

const { Column } = Table;

const TabelaCompras = () => {
  const [data, setData] = useState([]);
  const [formattedData, setFormattedData] = useState([]);
  const [deletingUserId, setDeletingUserId] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [userCount, setUserCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/compras/");
        const result = await response.json();
        setData(result);
        const formattedResult = result.map((item) => ({
          ...item,
        }));
        setFormattedData(formattedResult);
        setFilteredData(formattedResult);

        await fetch("http://localhost:8080/api/compras/count")
          .then((res) => res.json())
          .then((data) => setUserCount(data.count));
      } catch (error) {
        toast.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/compras/${userId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await fetch("http://localhost:8080/api/compras/count")
          .then((res) => res.json())
          .then((data) => setUserCount(data.count));

        const newData = data.filter((item) => item.id !== userId);
        setData(newData);
        setFormattedData(newData);
        setFilteredData(newData);
        toast.success("Produto excluído com sucesso!");
      } else {
        toast.error("Erro ao excluir Produto");
      }
    } catch (error) {
      toast.error("Erro ao excluir Produto");
    } finally {
      setDeletingUserId(null);
    }
  };

  const handleModalClose = () => {
    setEditModalOpen(false);
    setEditingId(null);
  };

  const showDeleteConfirm = (userId) => {
    Modal.confirm({
      title: "Confirmação",
      content: "Tem certeza de que deseja excluir este Produto?",
      okText: "Sim",
      cancelText: "Cancelar",
      onOk: () => handleDelete(userId),
      onCancel: () => setDeletingUserId(null),
    });
  };

  return (
    <div align="start">
      <div>Total de usuários cadastrados: {userCount}</div>

      <Modal
        title="Editar Dados"
        visible={isEditModalOpen}
        onCancel={handleModalClose}
        footer={null}
      >
        <FormInputsCompras editingId={editingId} onClose={handleModalClose} />
      </Modal>
      <ToastContainer />
      <Table dataSource={filteredData}>
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Nome Cliente" dataIndex="nome_cliente" key="nome_cliente" />
        <Column title="Valor Total" dataIndex="valor_total" key="valor_total" /> 
        <Column title="Data Compra" dataIndex="data_compra" key="data_compra" />
        <Column
          title="Ação"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <a onClick={() => showDeleteConfirm(record.id)}>Excluir</a>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default TabelaCompras;
