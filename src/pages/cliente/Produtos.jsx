import React from "react";
import { Breadcrumb } from "antd";
import TabelaClientes from "../../components/cliente/Tabela";

const ProdutosClientes = () => {
  return (
    <>
      <Breadcrumb
        style={{
          display: "flex",
          margin: "4px 0",
          textAlign: "center",
        }}
      >
        <h1>Tabela de Clientes</h1>
      </Breadcrumb>
      <TabelaClientes />
    </>
  );
};
export default ProdutosClientes;
