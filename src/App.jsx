import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TabelaClientes from "./pages/cliente/Produtos.jsx";
import CadastroClientes from "./pages/cliente/Cadastro.jsx";
import TabelaCompras from "./pages/compra/Produtos.jsx";
import CadastroCompras from "./pages/compra/Cadastro.jsx";
import PageLayout from "./components/PageLayout.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route index element={<h1>Projeto feito por Vitor Medeiros</h1>} />
            <Route path="/clientes" element={<TabelaClientes />} />
            <Route path="/cadastro-clientes" element={<CadastroClientes />} />
            <Route path="/compras" element={<TabelaCompras />} />
            <Route path="/cadastro-compras" element={<CadastroCompras />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </div>
  );
};
export default App;
