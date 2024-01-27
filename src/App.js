import { Layout } from "antd";
import { AppContent } from "./layouts/Content";
import { AppFooter } from "./layouts/Footer";
import { AppHeader } from "./layouts/Header";

function App() {
  return (
    <Layout>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </Layout>
  );
}

export default App;
