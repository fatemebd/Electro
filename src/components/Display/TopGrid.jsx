import React, { useState } from "react";
import { Row, Col, Flex, Menu, Typography, Rate } from "antd";
import Link from "next/link";

import Image from "next/image";
const TopGrid = ({ title,gridItems }) => {
  const [currentPage, setCurrentPage] = useState("new");

  const menuItems = [
    {
      label: <Link href="/">New</Link>,
      key: "new",
    },
    {
      label: <Link href="/">Featured</Link>,
      key: "featured",
    },
    {
      label: <Link href="/">Top Rated</Link>,
      key: "topRated",
    },
  ];


  return (
    <>
      <Row justify="space-between" className="my-5 px-16">
        <Col span={10}>
          <Typography className="font-bold text-3xl	">{title}</Typography>
        </Col>
        <Col span={10}>
          <Menu
            onClick={(e) => setCurrentPage(e.key)}
            selectedKeys={[currentPage]}
            mode="horizontal"
            items={menuItems}
            itemProp=""
            className={`bg-transparent`}
          />
        </Col>
      </Row>
      <Row  className="mb-5 px-16" justify="center">
        <Col xs={24} sm={20} md={6} className=" gutter-row py-5">
          <Flex
            vertical
            className="bg-grey rounded-xl justify-between items-between h-full "
          >
            <Flex vertical className="m-5 space-y-3">

            <Typography className="font-extrabold text-lg text-left ">
              {gridItems[0].label}
            </Typography>
            <Typography className="text-lg">{gridItems[0].price}</Typography>
            </Flex>

            <Image priority={true} src={gridItems[0].img} alt="grid item" />
          </Flex>
        </Col>
        <Col  xs={24} sm={20} md={18} className="gutter-row">
          <Row className="w-full">
            {gridItems.map((item, index) => {
              if (index === 0) {
                return;
              }
              return (
                <Col key={index} xs={24} md={8} className="p-5 space-y-3">
                  <Flex
                    vertical
                    className="bg-grey rounded-xl justify-center items-center  "
                  >
                    <Image priority={true} src={item.img} className="h-full" alt="grid item" />
                  </Flex>
                  <Typography className="font-extrabold text-base text-left">
                    {item.label}
                  </Typography>
                  <Rate disabled value={item.rate} />
                  <Typography className="text-lg">{item.price}</Typography>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default TopGrid;
