import { Avatar, Card, Col, Row } from "antd";
import { useState } from "react";
import { PreviewModal } from "../../../common/components/PreviewModal";

export const FlightCards = ({ items = [] }) => {
  const [isVisibile, setIsVisibile] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handlePreviewPhoto = (item) => {
    if (!item.img) {
      return;
    }

    setPreviewImage(`http://localhost:3000/flights/${item.id}/photo`);
    setIsVisibile(true);
  };

  return (
    <>
      <Row gutter={[16, 16]}>
        {items.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
            <Card>
              <Card.Meta
                avatar={
                  <Avatar
                    size={64}
                    shape="circle"
                    alt="flight_photo"
                    src={`http://localhost:3000/flights/${item.id}/photo`}
                    onClick={() => handlePreviewPhoto(item)}
                  />
                }
                title={item.code}
                description={item.departureDate}
              />
            </Card>
          </Col>
        ))}
      </Row>
      <PreviewModal
        isVisible={isVisibile}
        onCancel={() => setIsVisibile(false)}
        title="Flight Photo"
        url={previewImage}
      />
    </>
  );
};
