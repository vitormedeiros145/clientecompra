import React from "react";
import { Breadcrumb } from "antd";
import TabelaCompras from "../../components/compra/Tabela";

const ProdutosCompras = () => {
  return (
    <>
      <Breadcrumb
        style={{
          display: "flex",
          margin: "4px 0",
          textAlign: "center",
        }}
      >
        <h1>Tabela de Compras</h1>
      </Breadcrumb>
      <TabelaCompras />
    </>
  );
};
export default ProdutosCompras;
