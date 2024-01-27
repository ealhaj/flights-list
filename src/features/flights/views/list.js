import { Alert, Col, Image, Pagination, Table } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FlightCards } from "../components/FlightCards";
import { useGetFlightsQuery } from "../store";

const FlightsList = () => {
  console.log(useSearchParams());
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(searchParams.get("page") || 1);
  const [pageSize, setPageSize] = useState(searchParams.get("size") || 10);

  const {
    data: { resources: flights, total } = {},
    isLoading,
    error,
  } = useGetFlightsQuery({ page, pageSize });

  useEffect(() => {
    setSearchParams({
      page,
      size: pageSize,
    });
  }, [page, pageSize, setSearchParams]);

  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      width: "20%",
    },
    {
      title: "Capacity",
      dataIndex: "capacity",
      width: "20%",
    },
    {
      title: "Departure Date",
      dataIndex: "departureDate",
      width: "30%",
    },
    {
      title: "Photo",
      dataIndex: "img",
      render: (_, flight) => {
        return (
          flight.img && (
            <Image
              src={`http://localhost:3000/flights/${flight.id}/photo`}
              width={100}
            />
          )
        );
      },
    },
  ];

  if (error) {
    return (
      <Alert
        message="Error occurred!"
        description={error.data.message}
        type="error"
      />
    );
  }

  return (
    <>
      <Col xs={24} sm={24} md={24} lg={0} xl={0}>
        <FlightCards items={flights} />
      </Col>
      <Col xs={0} sm={0} md={0} lg={24} xl={24}>
        <Table
          loading={isLoading}
          columns={columns}
          dataSource={flights}
          pagination={false}
        />
      </Col>
      <Pagination
        style={{ marginTop: "20px" }}
        showSizeChanger
        onChange={(currentPage) => setPage(currentPage)}
        onShowSizeChange={(_, size) => setPageSize(size)}
        defaultCurrent={page}
        defaultPageSize={pageSize}
        total={total}
      />
    </>
  );
};

export default FlightsList;
