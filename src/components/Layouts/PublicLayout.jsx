import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Layout,
  Drawer,
  Button,
  Input,
  Cascader,
  Menu,
  Row,
  Col,
  Flex,
  Modal,
} from "antd";
import { FaArrowRight, FaTwitter, FaFacebookF } from "react-icons/fa6";
import Login from "../Forms/Login";
import { usePathname } from "next/navigation";
import { CloseOutlined } from "@ant-design/icons";


import companies from "@/assets/images/companies.png";
import {
  CiSearch,
  CiHeart,
  CiShoppingCart,
  CiMenuBurger,
  CiPhone,
  CiMail,
  CiLocationOn,
} from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import FooterLogo from "@/assets/images/FooterLogo.svg";
import Logo from "@/assets/images/Logo.svg";
import Typography from "antd/es/typography/Typography";
import { InstagramFilled } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
const { Search } = Input;

const PublicLayout = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState("mail");
  const [loginOpen, setLoginOpen] = useState(false);

  const url = usePathname();
  useEffect(() => {
    console.log(url);
  }, []);
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
    <>
      <Layout className="bg-white h-full">
        <Layout>
          <Header
            className={` ${
              url === "/" || url === "/home-page" ? "bg-grey" : "bg-white"
            } pt-5 h-auto`}
          >
            <Row justify="space-around" align="cenetr">
              <Col span={6}>
                <Image
                  className="color-primary-1000"
                  priority={true}
                  alt="logo"
                  src={Logo}
                />
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
                <Button type="primary" onClick={() => setLoginOpen(true)}>
                  Login
                </Button>
                <Modal open={loginOpen} onCancel={()=>setLoginOpen(false)} closable={false} className="w-[30%]" footer="">
                  <Button onClick={()=>setLoginOpen(false)} icon={<CloseOutlined />} className="absolute top-[-40px] right-0" />
                  <Login />
                </Modal>
              </Col>
            </Row>
            <Row justify="start" className="pl-10" align="cenetr">
              <Col span={8}>
                <Cascader className="bg-grey" placeholder="All Categories" />
              </Col>
              <Col span={8}>
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
          </Header>
          <Content>{children} </Content>
          <Footer
            justify="space-around"
            className="space-y-5 bg-primary-1000  "
          >
            <Row gutter={[40, 16]}>
              <Col className="py-2 gutter-row space-y-5" span={6}>
                <Image priority={true} src={FooterLogo} alt="logo" />
                <Flex className="flex flex-row justify-start items-center gap-2">
                  <CiPhone size={20} color="white" />
                  <Typography className="text-white">(316) 555-0116</Typography>
                </Flex>
                <Flex className="flex flex-row justify-start items-center gap-2">
                  <CiMail size={20} color="white" />
                  <Typography className="text-white">
                    electro@example.com
                  </Typography>
                </Flex>
                <Flex className="flex flex-row justify-start items-start gap-2">
                  <CiLocationOn size={25} color="white" />
                  <Typography className="text-white ">
                    4140 Parker Rd. Allentown, New Mexico 31134
                  </Typography>
                </Flex>
              </Col>
              <Col className="py-2 pl-10 gutter-row space-y-3" span={6}>
                <Typography className="font-bold text-white">
                  Information
                </Typography>
                <Typography className="text-white">My Account</Typography>
                <Typography className="text-white">Login</Typography>
                <Typography className="text-white">My Cart</Typography>
                <Typography className="text-white">My Wishlist</Typography>
                <Typography className="text-white">Checkout</Typography>
              </Col>
              <Col className="py-2 gutter-row space-y-3" span={6}>
                <Typography className="font-bold text-white">
                  Service
                </Typography>
                <Typography className="text-white">About Us</Typography>
                <Typography className="text-white">Careers</Typography>
                <Typography className="text-white">
                  Delivery Information
                </Typography>
                <Typography className="text-white">Privacy Policy</Typography>
                <Typography className="text-white">
                  Terms & Conditions
                </Typography>
              </Col>
              <Col className="py-2 gutter-row space-y-3" span={6}>
                <Typography className="font-bold text-white">
                  Subscribe
                </Typography>
                <Typography className="text-white">
                  Enter your email below to be the first to know about new
                  collections.
                </Typography>
                <Input
                  variant="filled"
                  size="large"
                  placeholder="Your e-mail"
                  className="text-white bg-grey"
                  prefix={<CiMail size={20} />}
                  suffix={<FaArrowRight />}
                />
                <style>{`::placeholder {  color: white !important; }`}</style>
              </Col>
            </Row>
            <Row justify="space-between">
              <Col span={8}>
                <Image priority={true} src={companies} alt="companies" />
              </Col>
              <Col span={8}>
                <Typography className="text-white">
                  ©2023 Electro All Rights are reserved️
                </Typography>
              </Col>
              <Col className="flex items-center gap-3 text-white" span={4}>
                <FaFacebookF />
                <InstagramFilled />
                <FaTwitter />
              </Col>
            </Row>
          </Footer>
        </Layout>
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
    </>
    // <Layout className="bg-white h-full">
    //   <Layout>

    //   <Header
    //   sticky
    //     className={` ${
    //       url === "/" || url === "/home-page" ? "bg-grey" : "bg-white"
    //     } pt-5 h-auto`}
    //   >
    //     <Row justify="space-around" align="cenetr">
    //       <Col span={6}>
    //         <Image
    //           className="color-primary-1000"
    //           priority={true}
    //           alt="logo"
    //           src={Logo}
    //         />
    //       </Col>
    //       <Col span={8}>
    //         <Search
    //           enterButton="Search"
    //           addonBefore={
    //             <Cascader
    //               placeholder="All"
    //               style={{
    //                 width: 70,
    //               }}
    //             />
    //           }
    //           placeholder="Serach"
    //           prefix={<CiSearch size={24} />}
    //         />
    //       </Col>
    //       <Col className="flex row-reverse justify-end gap-2" span={6}>
    //         <Button
    //           className="border-none rounded-2xl"
    //           icon={<CiSearch size={24} />}
    //         />
    //         <Button
    //           className="border-none rounded-2xl"
    //           icon={<CiHeart size={24} />}
    //         />
    //         <Button
    //           onClick={() => setVisible(true)}
    //           className="border-none rounded-2xl"
    //           icon={<CiShoppingCart size={24} />}
    //         />
    //         <Button type="primary">Login</Button>
    //       </Col>
    //     </Row>
    //     <Row justify="start" className="pl-10" align="cenetr">
    //       <Col span={8}>
    //         <Cascader className="bg-grey" placeholder="All Categories" />
    //       </Col>
    //       <Col span={8}>
    //         <Menu
    //           onClick={(e) => setCurrentPage(e.key)}
    //           selectedKeys={[currentPage]}
    //           mode="horizontal"
    //           items={menuItems}
    //           itemProp=""
    //           className={`bg-transparent`}
    //         />
    //       </Col>
    //     </Row>
    //   </Header>
    //   <Content>{props.children} </Content>
    //   <Footer fixedPosition  justify="space-around" className="space-y-5 bg-primary-1000  ">
    //     <Row gutter={[40, 16]}>
    //       <Col className="py-2 gutter-row space-y-5" span={6}>
    //         <Image priority={true} src={FooterLogo} alt="logo" />
    //         <Flex className="flex flex-row justify-start items-center gap-2">
    //           <CiPhone size={20} color="white" />
    //           <Typography className="text-white">(316) 555-0116</Typography>
    //         </Flex>
    //         <Flex className="flex flex-row justify-start items-center gap-2">
    //           <CiMail size={20} color="white" />
    //           <Typography className="text-white">
    //             electro@example.com
    //           </Typography>
    //         </Flex>
    //         <Flex className="flex flex-row justify-start items-start gap-2">
    //           <CiLocationOn size={25} color="white" />
    //           <Typography className="text-white ">
    //             4140 Parker Rd. Allentown, New Mexico 31134
    //           </Typography>
    //         </Flex>
    //       </Col>
    //       <Col className="py-2 pl-10 gutter-row space-y-3" span={6}>
    //         <Typography className="font-bold text-white">
    //           Information
    //         </Typography>
    //         <Typography className="text-white">My Account</Typography>
    //         <Typography className="text-white">Login</Typography>
    //         <Typography className="text-white">My Cart</Typography>
    //         <Typography className="text-white">My Wishlist</Typography>
    //         <Typography className="text-white">Checkout</Typography>
    //       </Col>
    //       <Col className="py-2 gutter-row space-y-3" span={6}>
    //         <Typography className="font-bold text-white">Service</Typography>
    //         <Typography className="text-white">About Us</Typography>
    //         <Typography className="text-white">Careers</Typography>
    //         <Typography className="text-white">Delivery Information</Typography>
    //         <Typography className="text-white">Privacy Policy</Typography>
    //         <Typography className="text-white">Terms & Conditions</Typography>
    //       </Col>
    //       <Col className="py-2 gutter-row space-y-3" span={6}>
    //         <Typography className="font-bold text-white">Subscribe</Typography>
    //         <Typography className="text-white">
    //           Enter your email below to be the first to know about new
    //           collections.
    //         </Typography>
    //         <Input
    //           variant="filled"
    //           size="large"
    //           placeholder="Your e-mail"
    //           className="text-white bg-grey"
    //           prefix={<CiMail size={20} />}
    //           suffix={<FaArrowRight />}
    //         />
    //         <style>{`::placeholder {  color: white !important; }`}</style>
    //       </Col>
    //     </Row>
    //     <Row justify="space-between">
    //       <Col span={8}>
    //         <Image priority={true} src={companies} alt="companies" />
    //       </Col>
    //       <Col span={8}>
    //         <Typography className="text-white">
    //           ©2023 Electro All Rights are reserved️
    //         </Typography>
    //       </Col>
    //       <Col className="flex items-center gap-3 text-white" span={4}>
    //         <FaFacebookF />
    //         <InstagramFilled />
    //         <FaTwitter />
    //       </Col>
    //     </Row>
    //   </Footer>
    //   </Layout>
    //   <Drawer
    //     title="Basic Drawer"
    //     placement="right"
    //     closable={false}
    //     onClose={() => setVisible(false)}
    //     open={visible}
    //   >
    //     {/* Drawer content goes here */}
    //     <p>Some contents...</p>
    //     <p>Some contents...</p>
    //     <p>Some contents...</p>
    //   </Drawer>
    // </Layout>
  );
};

export default PublicLayout;
