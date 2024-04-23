import React from "react";
import { Breadcrumb, Row, Col, Flex } from "antd";
import Typography from "antd/es/typography/Typography";

const Product = () => {
  return <>
  <Breadcrumb
    items={[
        {
          title: 'Home',
        },
        {
          title: <a href="">shop</a>,
        },
        {
          title: <a href="">Application List</a>,
        },
        {
          title: 'An Application',
        },
      ]} />
  </>;
};

export default Product;
