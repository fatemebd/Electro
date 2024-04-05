import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout, Drawer, Button, Input, Cascader, Menu, Row, Col } from "antd";
import {
  CiSearch,
  CiHeart,
  CiShoppingCart,
  CiMenuBurger,
} from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

import Logo from "../../assets/images/Logo.svg";
const { Header, Content } = Layout;
const { Search } = Input;

const PublicLayout = () => {
  const [visible, setVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState("mail");

  const menuItems = [
    {
      label: <Link href="/">Home</Link>,
      key: "home",
    },

    {
      label: "Shop",
      key: "shop",
      style: {
        direction: "rtl",
      },
      icon: <IoIosArrowDown />,
      children: [],
    },
    {
      label: <Link href="/">About Us</Link>,
      key: "aboutUs",
    },
    {
      label: <Link href="/">Blog</Link>,
      key: "blog",
    },
    {
      label: <Link href="/">Contact Us</Link>,
      key: "contactUs",
    },
  ];

  return (
    <Layout className="bg-white h-screen">
      <Header className=" bg-white pt-5 h-auto">
        <Row justify="space-around" align="cenetr">
          <Col span={6}>
            <Image priority={true} alt="logo" src={Logo} />
          </Col>
          <Col span={8}>
            <Search
              enterButton="Search"
              addonBefore={
                <Cascader
                  placeholder="All"
                  style={{
                    width: 70,
                  }}
                />
              }
              placeholder="Serach"
              prefix={<CiSearch size={24} />}
            />
          </Col>
          <Col className="flex row-reverse justify-end gap-2" span={6}>
            <Button
              className="border-none rounded-2xl"
              icon={<CiSearch size={24} />}
            />
            <Button
              className="border-none rounded-2xl"
              icon={<CiHeart size={24} />}
            />
            <Button
              onClick={() => setVisible(true)}
              className="border-none rounded-2xl"
              icon={<CiShoppingCart size={24} />}
            />
            <Button type="primary">Login</Button>
          </Col>
        </Row>
        <Row justify="start" className="pl-10" align="cenetr">
          <Col span={8}>
            <Cascader className="bg-grey" placeholder="All Categories" />
          </Col>
          <Col span={8}>
            <Menu
              onClick={() => setCurrentPage(e.key)}
              selectedKeys={[currentPage]}
              mode="horizontal"
              items={menuItems}
              itemProp=""
            />
          </Col>
        </Row>
      </Header>

      <Content>
        {/* Content goes here */}
        <p>This is the main content area.</p>
      </Content>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={() => setVisible(false)}
        open={visible}
      >
        {/* Drawer content goes here */}
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </Layout>
  );
};

export default PublicLayout;
