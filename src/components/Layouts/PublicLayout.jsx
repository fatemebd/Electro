import React, { useContext, useEffect, useState } from "react";
import { useCart } from "@/Contexts/CartContext";

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
  Badge,
  Divider,
} from "antd";
import { FaArrowRight, FaTwitter, FaFacebookF } from "react-icons/fa6";
import Login from "../Forms/Login";
import { usePathname } from "next/navigation";
import { CloseOutlined, DeleteOutlined } from "@ant-design/icons";

import companies from "@/assets/images/companies.png";
import {
  CiSearch,
  CiHeart,
  CiShoppingCart,
  CiPhone,
  CiMail,
  CiLocationOn,
} from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import FooterLogo from "@/assets/images/FooterLogo.svg";
import CartItem from "@/assets/images/CartItem.png";
import Logo from "@/assets/images/Logo.svg";
import Typography from "antd/es/typography/Typography";
import { InstagramFilled } from "@ant-design/icons";
import SignUp from "../Forms/SignUp";
import { PostCart } from "@/pages/api/APIs";
import { toast } from "react-toastify";
const { Header, Content, Footer } = Layout;
const { Search } = Input;

const PublicLayout = ({ children }) => {
  const { cartItems, addToCart, removeFromCart, totalCost } = useCart();
  const [visible, setVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState("mail");
  const [popup, setPopUp] = useState(null);
  let token;
  // const getToken = () => {
  //   if (typeof window !== "undefined") {
  //     const tokenString = sessionStorage.getItem("token");
  //     const userToken = JSON.parse(tokenString);
  //     return userToken;
  //   }
  // };
  useEffect(() => {
    // console.log(cartItemes[0]);
    // addToCart(cartItemes[0]);
    // addToCart(cartItemes[1]);
    // token = getToken()
    console.log(token);
  }, []);
  const handleCart = async () => {
    try {
      const response = await PostCart(cartItems);
      if (response.status === 200) {
        toast.success("done!");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  // const cartItemes = [
  //   {
  //     id: 0,
  //     title: "Apple iPhone 14 Pro",
  //     price: 1999.0,
  //     quantity: 1,
  //     img: CartItem,
  //   },
  //   {
  //     id: 1,
  //     title: "Asus ROG Delta S",
  //     price: 250.0,
  //     quantity: 1,
  //     img: CartItem,
  //   },
  // ];
  const url = usePathname();

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
            <Row
              justify="space-between md:px-10 px-5 mb-5 items-center"
              align="cenetr"
            >
              <Col span={6}>
                <Image
                  className="color-primary-1000"
                  priority={true}
                  alt="logo"
                  src={Logo}
                />
              </Col>
              <Col span={8} className="hidden md:flex">
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
              <Col className="flex row-reverse justify-end gap-5" span={6}>
                <Button
                  className="border-none rounded-2xl hidden md:flex"
                  icon={<CiSearch size={24} />}
                />
                <Button
                  className="border-none rounded-2xl hidden md:flex"
                  icon={<CiHeart size={24} />}
                />
                <Button
                  // disabled={true}
                  disabled={
                    typeof window !== "undefined" &&
                    sessionStorage.getItem("token") == undefined
                  }
                  onClick={() => setVisible(true)}
                  className="border-none rounded-2xl"
                  icon={
                    <Badge
                      color="rgba(28, 78, 142, 1)
                    "
                      count={cartItems.length}
                    >
                      <CiShoppingCart size={24} />
                    </Badge>
                  }
                />
                {typeof window !== "undefined" &&
                sessionStorage.getItem("token") == undefined ? (
                  <Button type="primary" onClick={() => setPopUp("login")}>
                    Login
                  </Button>
                ) : (
                  <Button>user</Button>
                )}
                <Modal
                  open={popup === "login" ? true : false}
                  onCancel={() => setPopUp(null)}
                  closable={false}
                  className="md:w-[30%] w-[90%]"
                  footer=""
                >
                  <Button
                    onClick={() => setPopUp(null)}
                    icon={<CloseOutlined />}
                    className="absolute top-[-40px] right-0"
                  />
                  <Login setPopUp={setPopUp} />
                </Modal>
                <Modal
                  open={popup === "signUp" ? true : false}
                  onCancel={() => setPopUp(null)}
                  closable={false}
                  className="md:w-[30%] w-[90%]"
                  footer=""
                >
                  <Button
                    onClick={() => setPopUp(null)}
                    icon={<CloseOutlined />}
                    className="absolute top-[-40px] right-0"
                  />
                  <SignUp setPopUp={setPopUp} />
                </Modal>
              </Col>
            </Row>
            <Row justify="space-between" className="pl-10" align="cenetr">
              <Col span={8}>
                <Cascader className="bg-grey" placeholder="All Categories" />
              </Col>
              <Col xs={8} md={16}>
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
            className="space-y-5 bg-primary-1000 p-5 md:p-10"
          >
            <Row gutter={[16, 16]} className="text-[10px]">
              <Col className="py-2 gutter-row space-y-5" span={6}>
                <Image priority={true} src={FooterLogo} alt="logo" />
                <Flex className="flex flex-row justify-start items-center gap-2">
                  <CiPhone size={20} color="white" />
                  <Typography className="text-white text-[10px] md:text-sm">
                    (316) 555-0116
                  </Typography>
                </Flex>
                <Flex className="flex flex-row justify-start items-center gap-2">
                  <CiMail size={20} color="white" />
                  <Typography className="text-white text-[10px] md:text-sm">
                    electro@example.com
                  </Typography>
                </Flex>
                <Flex className="flex flex-row justify-start items-start gap-2">
                  <CiLocationOn size={25} color="white" />
                  <Typography className="text-white text-[10px] md:text-sm">
                    4140 Parker Rd. Allentown, New Mexico 31134
                  </Typography>
                </Flex>
              </Col>
              <Col className="py-2 pl-10 gutter-row space-y-3" span={6}>
                <Typography className="font-bold text-white text-[10px] md:text-sm">
                  Information
                </Typography>
                <Typography className="text-white text-[10px] md:text-sm">
                  My Account
                </Typography>
                <Typography className="text-white text-[10px] md:text-sm">
                  Login
                </Typography>
                <Typography className="text-white text-[10px] md:text-sm">
                  My Cart
                </Typography>
                <Typography className="text-white text-[10px] md:text-sm">
                  My Wishlist
                </Typography>
                <Typography className="text-white text-[10px] md:text-sm">
                  Checkout
                </Typography>
              </Col>
              <Col className="py-2 gutter-row space-y-3" span={6}>
                <Typography className="font-bold text-white text-[10px] md:text-sm">
                  Service
                </Typography>
                <Typography className="text-white text-[10px] md:text-sm">
                  About Us
                </Typography>
                <Typography className="text-white text-[10px] md:text-sm">
                  Careers
                </Typography>
                <Typography className="text-white text-[10px] md:text-sm">
                  Delivery Information
                </Typography>
                <Typography className="text-white text-[10px] md:text-sm">
                  Privacy Policy
                </Typography>
                <Typography className="text-white text-[10px] md:text-sm">
                  Terms & Conditions
                </Typography>
              </Col>
              <Col className="py-2 gutter-row space-y-3" span={6}>
                <Typography className="font-bold text-white text-[10px] md:text-sm">
                  Subscribe
                </Typography>
                <Typography className="text-white text-[10px] md:text-sm">
                  Enter your email below to be the first to know about new
                  collections.
                </Typography>
                <Input
                  variant="filled"
                  // size={md}
                  placeholder="Your e-mail"
                  className="text-white bg-grey text-[10px] md:text-sm"
                  prefix={<CiMail size={20} />}
                  suffix={<FaArrowRight />}
                />
                <style>{`::placeholder {  color: white !important; }`}</style>
              </Col>
            </Row>
            <Row justify="space-between text-[10px] md:text-sm">
              <Col span={8}>
                <Image priority={true} src={companies} alt="companies" />
              </Col>
              <Col span={8}>
                <Typography className="text-white text-[10px] md:text-sm">
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
          className="text-black  "
          title={`You have ${cartItems.length} items in your cart`}
          placement="right"
          closable={false}
          onClose={() => setVisible(false)}
          open={visible}
        >
          <Flex
            vertical
            className={`space-y-5 ${
              cartItems.length ? "justify-between" : "justify-end"
            } h-full`}
          >
            <Flex vertical>
              {cartItems.map((item) => {
                return (
                  <Flex key={item.id} vertical>
                    <Row justify="space-around">
                      <Col span={6}>
                        <Flex
                          className="p-5 rounded-sm bg-grey"
                          justify="center"
                          align="center"
                        >
                          <Image
                            src={item.img}
                            alt={item.title}
                            width={200}
                            height={100}
                          />
                        </Flex>
                      </Col>
                      <Col span={12} className="">
                        <Typography>{item.title}</Typography>
                        <Typography className=" font-extrabold	">
                          ${item.price}
                        </Typography>
                        <Typography>QTY: {item.quantity}</Typography>
                      </Col>
                      <Col span={1} className="flex justify-start  pt-10">
                        <Button
                          className="border-none rounded-2xl"
                          onClick={() => {
                            console.log(item.id);
                            removeFromCart(item.id);
                          }}
                          icon={
                            <DeleteOutlined className="text-red-500 text-lg align-end" />
                          }
                        ></Button>
                      </Col>
                    </Row>
                    <Divider />
                  </Flex>
                );
              })}
            </Flex>
            <Flex vertical className="space-y-5">
              <Flex justify="space-between" className="w-full">
                <Typography className="font-black	text-base	 ">
                  Sub Total
                </Typography>
                <Typography className="font-black text-base	">
                  ${totalCost}
                </Typography>
              </Flex>
              <Button className="w-full h-12">View Cart</Button>

              <Button
                className="w-full h-12"
                type="primary"
                onClick={handleCart}
              >
                Checkout
              </Button>
            </Flex>
          </Flex>
        </Drawer>
      </Layout>
    </>
  );
};

export default PublicLayout;
