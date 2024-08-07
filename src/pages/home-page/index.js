"use client";

import { Button, Col, Flex, Row, Typography, Tag, Modal } from "antd";
import Image from "next/image";
import Hero from "@/assets/images/hero.svg";
import {
  ArrowRightOutlined,
  TruckOutlined,
  DollarOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import { BiSupport } from "react-icons/bi";
import { useRouter } from "next/navigation";
import Slider from "@/components/Display/Slider";
import TopGrid from "@/components/Display/TopGrid";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { GetBanner, GetProducts } from "../api/APIs";
// import banner from "@/assets/images/banner.png";
const HomePage = () => {
  const [products, setProducts] = useState();
  const [banner, setBanner] = useState();
  const router = useRouter();

  const getProducts = async () => {
    try {
      const response = await GetProducts();
      setProducts(response.data);
      console.log(response.data[0].images[0].media);
    } catch (err) {
      toast.error("An error catched while fetching data!");
      console.log(err);
    }
  };
  const getBanner = async () => {
    try {
      const response = await GetBanner(1);
      setBanner(response.data);
      console.log(response.data);
    } catch (err) {
      toast.error("An error catched while fetching data!");
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
    getBanner();
  }, []);

  const ourOptions = [
    {
      label: "Free Shipping",
      description: "Free shipping for order above $150",
      icon: <TruckOutlined className="text-2xl" />,
    },
    {
      label: "Money Guarantee",
      description: "Within 30 days for an exchange",
      icon: <DollarOutlined className="text-2xl" />,
    },
    {
      label: "Online Support",
      description: "24 hours a day, 7 days a week",
      icon: <BiSupport className="text-2xl" />,
    },
    {
      label: "Flexible Payment",
      description: "Pay with multiple credit cards",
      icon: <CreditCardOutlined className="text-2xl" />,
    },
  ];
  return (
    products && (
      <>
        <Row justify="start" className="bg-grey ">
          <Col
            align="center"
            justify="start"
            xs={20}
            md={10}
            className="md:pt-20 pt-5 px-10"
          >
            <Flex className="flex-col justify-start space-y-3">
              <Typography className="	md:text-7xl text-xl font-extrabold	text-left		">
                Great Sound With Solo Headphone
              </Typography>
              <Typography className="md:text-lg text-sm text-left	">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum.
              </Typography>
              <Button
                type="primary"
                className="w-[150px] rtl"
                style={{ direction: "rtl" }}
                icon={<ArrowRightOutlined />}
              >
                Shop Now
              </Button>
            </Flex>
          </Col>
          <Col className="hidden md:block" span={14}>
            <Image priority={true} src={Hero} alt="hero" />
          </Col>
        </Row>
        <Slider
          title="Shop by Catrgories"
          sliderItems={[
            {
              img: "/slider/iphone.png",
              url: "/",
              title: "Mobile Phones",
            },
            {
              img: "/slider/tv.png",
              url: "/",
              title: "Smart TV",
            },
            {
              img: "/slider/watch.png",
              url: "/",
              title: "Smart Watch",
            },
            {
              img: "/slider/laptop.png",
              url: "/",
              title: "Laptops",
            },
            {
              img: "/slider/drone.png",
              url: "/",
              title: "Drones",
            },
            {
              img: "/slider/headphone.png",
              url: "/",
              title: "Headphones",
            },
          ]}
        />
        <Row justify="space-around">
          <Col span={10} className="bg-gray-100 rounded-lg py-3 pl-5">
            <Row justify="space-between">
              <Col>
                <Flex className="flex-col justify-between space-y-5">
                  <Tag className="bg-primary-500 text-primary-1000 py-1 w-[70px]">
                    50% OFF
                  </Tag>
                  <Typography className="text-3xl	font-bold">
                    {products[0].title}
                  </Typography>
                  <Typography className="text-lg	">
                    Don’t miss the last opportunity{" "}
                  </Typography>
                  <Button
                    type="primary"
                    className="md:w-[150px] rtl"
                    style={{ direction: "rtl" }}
                    icon={<ArrowRightOutlined />}
                    onClick={() => {
                      router.push(`/shop/${products[0].id}`);
                    }}
                  >
                    Shop Now
                  </Button>
                </Flex>
              </Col>
              <Col>
                <Image
                  src={products[0].images[2].media}
                  priority={true}
                  alt="hero"
                  width={300}
                  height={100}
                />
              </Col>
            </Row>
          </Col>
          <Col span={10} className="bg-gray-100 rounded-lg py-3 pl-5">
            <Row justify="space-between">
              <Col>
                <Flex className="flex-col justify-between space-y-5">
                  <Tag className="bg-primary-500 text-primary-1000 py-1 w-[70px]">
                    50% OFF
                  </Tag>
                  <Typography className="text-3xl	font-bold">
                    {products[1].title}
                  </Typography>
                  <Typography className="text-lg	">
                    Don’t miss the last opportunity{" "}
                  </Typography>
                  <Button
                    type="primary"
                    className="md:w-[150px] rtl"
                    style={{ direction: "rtl" }}
                    icon={<ArrowRightOutlined />}
                    onClick={() => {
                      router.push(`/shop/${products[1].id}`);
                    }}
                  >
                    Shop Now
                  </Button>{" "}
                </Flex>
              </Col>
              <Col>
                <Image
                  src={products[1].images[2].media}
                  priority={true}
                  alt="hero"
                  width={300}
                  height={100}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <TopGrid
          title="Our Bestseller Products"
          gridItems={[
            //will be updated with back-end data
            {
              img: products[0].images[2].media,
              label: products[0].title,
              rate: Number(products[0].rate),
              price: products[0].product_variants[0].price,
            },
            {
              img: products[0].images[2].media,
              label: products[0].title,
              rate: Number(products[0].rate),
              price: products[0].product_variants[0].price,
            },
            {
              img: products[1].images[2].media,
              label: products[1].title,
              rate: Number(products[1].rate),
              price: products[1].product_variants[0].price,
            },
            {
              img: products[1].images[2].media,
              label: products[1].title,
              rate: Number(products[1].rate),
              price: products[1].product_variants[0].price,
            },
            // {
            //   img: Tablet,
            //   label: "Samsung Galaxy S22 Ultra",
            //   rate: 5,
            //   price: "$1350.00",
            // },
            // {
            //   img: Tablet,
            //   label: "Apple iPhone 14 Plus",
            //   rate: 5,
            //   price: "$850.00",
            // },
            // {
            //   img: Tablet,
            //   label: "Bose QuietComfort 45",
            //   rate: 5,
            //   price: "$300.00",
            // },
          ]}
          simple={false}
          className="px-10"
        />
        {banner && (
          <Row
          // className={`bg-[url("../../public/banner.png")] md:h-[500px] xs:h-[50px]`}
          >
            <Image
              src={banner.image}
              width={1500}
              height={300}
              className="relative"
            />
            <Flex vertical className=" m-20  space-y-5 z-50 absolute">
              <Typography className="font-extrabold text-4xl text-white ">
                {banner.content}{" "}
              </Typography>
              <Typography className="text-lg font-thin text-white">
                Don’t miss the last opportunity{" "}
              </Typography>
              <Button
                type="primary"
                className="w-[150px] rtl"
                style={{ direction: "rtl" }}
                icon={<ArrowRightOutlined />}
              >
                Shop Now
              </Button>
            </Flex>
          </Row>
        )}
        <TopGrid
          title="Top Selling Products"
          gridItems={[
            //will be updated with back-end data
            {
              img: products[0].images[2].media,
              label: products[0].title,
              rate: Number(products[0].rate),
              price: products[0].product_variants[0].price,
            },
            {
              img: products[0].images[2].media,
              label: products[0].title,
              rate: Number(products[0].rate),
              price: products[0].product_variants[0].price,
            },
            {
              img: products[1].images[2].media,
              label: products[1].title,
              rate: Number(products[1].rate),
              price: products[1].product_variants[0].price,
            },
            {
              img: products[1].images[2].media,
              label: products[1].title,
              rate: Number(products[1].rate),
              price: products[1].product_variants[0].price,
            },
          ]}
          className="px-10"
        />
        <Row gutter={[16, 16]} justify="center" className="px-16 my-10">
          {ourOptions.map((option, index) => {
            return (
              <Col
                key={index}
                xs={12}
                md={6}
                className=" flex flex-col justify-start"
              >
                {option.icon}
                <Typography className="text-lg font-extrabold">
                  {option.label}
                </Typography>
                <Typography className="text-base ">
                  {option.description}
                </Typography>
              </Col>
            );
          })}
        </Row>
      </>
    )
  );
};

export default HomePage;
