import {
  Alert,
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Upload,
} from "antd";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PreviewModal } from "../../../common/components/PreviewModal";
import { getBase64 } from "../../../utils/form.utils";
import { useFlight } from "../../../utils/hooks/useFlight";
import { UploadButton } from "../components/UploadButton";

const FlightAdd = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const [addFlight, { error }] = useFlight();

  const [previewOpen, setPreviewOpen] = useState(false);
  const [preview, setPreview] = useState({});
  const [fileList, setFileList] = useState([]);

  const handleClose = () => setPreviewOpen(false);

  const onAddFlight = useCallback(
    async (values) => {
      addFlight(values).then((response) => {
        if (!response.error) {
          navigate("/flights");
        }
      });
    },
    [addFlight, navigate]
  );

  const handlePreview = useCallback(async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreview({
      title: file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
      img: file.url || file.preview,
    });

    setPreviewOpen(true);
  }, []);

  const handleChnage = useCallback(
    ({ fileList: newFileList }) => setFileList(newFileList),
    []
  );

  return (
    <>
      {error && (
        <Alert
          description={error.data.message}
          type="error"
          closable
          style={{ marginBottom: "10px" }}
        />
      )}
      <Form
        form={form}
        onFinish={onAddFlight}
        name="new-flight"
        wrapperCol={{ span: 14 }}
        labelCol={{ span: 5 }}
        layout="horizantal"
        encType="multipart/form-data"
      >
        <Form.Item
          label="Code"
          name="code"
          rules={[
            {
              required: true,
              message: "Please input flight code!",
            },
            {
              validator: (_, value) => {
                const regex = /^[a-zA-Z]{6}$/;

                if (regex.test(value) || !value) {
                  return Promise.resolve();
                }

                return Promise.reject("Please use valid flight code!");
              },
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Capacity"
          name="capacity"
          rules={[
            {
              required: true,
              message: "Please input flight capacity!",
            },
          ]}
        >
          <InputNumber size="large" min={1} max={200} />
        </Form.Item>
        <Form.Item
          label="Departure Date"
          name="departureDate"
          rules={[
            {
              required: true,
              message: "Please input flight departure date!",
            },
          ]}
        >
          <DatePicker size="large" />
        </Form.Item>
        <Form.Item label="Photo" name="photo">
          <Upload
            accept=".png, .jpeg"
            onPreview={handlePreview}
            onChange={handleChnage}
            beforeUpload={() => false}
            listType="picture-card"
            maxCount={1}
            fileList={fileList}
          >
            <UploadButton />
          </Upload>
        </Form.Item>
        <Button type="primary" htmlType="submit" size="large">
          Submit
        </Button>
      </Form>
      <PreviewModal
        isVisible={previewOpen}
        title={preview.title}
        onCancel={handleClose}
        url={preview.img}
      />
    </>
  );
};

export default FlightAdd;
