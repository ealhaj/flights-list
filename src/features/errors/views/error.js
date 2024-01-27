import { Result } from "antd";
import { useLocation } from "react-router-dom";

const ErrorPage = (props) => {
  const location = useLocation();

  return (
    <Result
      status="error"
      title="Error occurred!"
      subTitle={`${location.state.error}`}
    />
  );
};

export default ErrorPage;
