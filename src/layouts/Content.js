import { Layout } from "antd";
import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { routes as ErrorRoutes } from "../features/errors/routes";
import { routes as FlightRoutes } from "../features/flights/routes";
import { routes as DefaultRoutes } from "../routes";

export const AppContent = () => {
  const appRoutes = useMemo(
    () => [...FlightRoutes, ...DefaultRoutes, ...ErrorRoutes],
    []
  );
  const { Content } = Layout;

  return (
    <Content style={{ padding: "16px 48px" }}>
      <Routes>
        {appRoutes.map((route, index) => (
          <Route key={`route-${index}`} {...route} />
        ))}
      </Routes>
    </Content>
  );
};
