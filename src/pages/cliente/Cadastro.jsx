import React from "react";
import { Breadcrumb } from "antd";
import FormInputsClientes from "../../components/cliente/FormInputs";

const CadastroClientes = () => {
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
        <h1>Cadastros de Clientes</h1>
      </Breadcrumb>
      <div>
        <FormInputsClientes />
      </div>
    </>
  );
};
export default CadastroClientes;
