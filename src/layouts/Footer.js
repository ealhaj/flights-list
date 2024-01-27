import { Layout } from "antd";

export const AppFooter = () => {
  const { Footer } = Layout;

  return (
    <Footer style={{ textAlign: "center" }}>
      Flights App v1.0.0 ©{new Date().getFullYear()} All Rights Reserved.
    </Footer>
  );
};
