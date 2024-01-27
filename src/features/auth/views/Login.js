import { Button, Form, Input } from "antd";

const Login = () => {
  return (
    <Form name="login-form" wrapperCol={{ span: 16 }}>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password size="large" />
      </Form.Item>

      <Button type="primary" htmlType="submit" size="large">
        Login
      </Button>
    </Form>
  );
};

export default Login;
