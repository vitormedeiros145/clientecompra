import React from "react";
import { Breadcrumb } from "antd";
import FormInputsCompras from "../../components/compra/FormInputs";

const CadastroCompras = () => {
  return (
    <>
      {" "}
      <Breadcrumb
        style={{
          display: "flex",
          margin: "4px 0",
          textAlign: "center",
        }}
      >
        <h1>Cadastros de Compras</h1>
      </Breadcrumb>
      <div>
        <FormInputsCompras />
      </div>
    </>
  );
};
export default CadastroCompras;
