import { Row, Col, Flex } from "antd";
import React from "react";

export default function AdditionalInfo({ data }) {
  return (
    <Flex vertical className="w-full">
      {Object.entries(data).map(([key, value]) => (
        <Row key={key} align="middle">
          <Col span={3} className="font-bold">
            {key}
          </Col>
          <Col span={4}>{value}</Col>
        </Row>
      ))}
    </Flex>
  );
}
