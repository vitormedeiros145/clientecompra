import React, { useState } from "react";
import {
  IdcardOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";

const items = [
  {
    icon: <TeamOutlined />,
    label: "Listagem Clientes",
    key: "1",
    target: "/clientes",
  },
  {
    icon: <IdcardOutlined />,
    label: "Cadastro Clientes",
    key: "2",
    target: "/cadastro-clientes",
  },
  {
    icon: <TeamOutlined />,
    label: "Listagem Compras",
    key: "3",
    target: "/compras",
  },
  {
    icon: <IdcardOutlined />,
    label: "Cadastro Compras",
    key: "4",
    target: "/cadastro-compras",
  },
];

const { Header, Content, Footer, Sider } = Layout;

const PageLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    const { target } = items.find((item) => item.key === key) || {};
    if (target) {
      navigate(target);
    }
  };

  return (
    <Layout
      align="center"
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <img
          width={70}
          style={{ marginLeft: "3px" }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          onClick={handleMenuClick}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
         ©2024 Created by Vitor Medeiros
        </Footer>
      </Layout>
    </Layout>
  );
};
export default PageLayout;
