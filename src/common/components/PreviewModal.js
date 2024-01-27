import { Modal } from "antd";

export const PreviewModal = ({ title, url, isVisible, onCancel }) => {
  return (
    <Modal open={isVisible} title={title} footer={null} onCancel={onCancel}>
      <img style={{ width: "100%" }} src={url} alt="flight_photo"></img>
    </Modal>
  );
};
