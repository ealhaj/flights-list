import { HomeOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

export const AppHeader = () => {
  const { Header } = Layout;
  const navigate = useNavigate();

  const items = [
    {
      key: "/flights",
      label: "Flights List",
      icon: <HomeOutlined />,
    },
    {
      key: "/flights/add",
      label: "Add New Flight",
      icon: <PlusCircleOutlined />,
    },
  ];

  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["/flights"]}
        style={{ flex: 1, minWidth: 0 }}
        items={items}
        onClick={({ key }) => {
          navigate(key);
        }}
      />
    </Header>
  );
};
