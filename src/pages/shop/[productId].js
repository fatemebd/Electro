import React, { useEffect, useState } from "react";
import { useCart } from "@/Contexts/CartContext";
import { Breadcrumb, Row, Col, Flex, Rate, Tag, Menu, Button } from "antd";
import { InstagramFilled } from "@ant-design/icons";

import Typography from "antd/es/typography/Typography";
import { FaTwitter, FaFacebookF } from "react-icons/fa6";
import Review from "@/components/Display/Review";
import { HeartOutlined } from "@ant-design/icons";
import products from "@/assets/Products.json";
import { useRouter } from "next/router";
import Image from "next/image";
import NumberInput from "@/components/Inputs/NumberInput";

const Product = () => {
  const productId = useRouter().query.productId;
  const [product, setProduct] = useState();
  const [isReady, setIsReady] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState();
  const [price, setPrice] = useState();
  const [productContent, setProductContent] = useState("description");
  const [cartProduct, setCartProduct] = useState({
    id: null,
    title: null,
    price: null,
    quantity: null,
    img: null,
    color: null,
  });
  const { cartItems, addToCart, removeFromCart } = useCart();
  useEffect(() => {
    if (products[productId] != undefined) {
      console.log(products[productId].colors);
      setProduct(products[productId]);
      setIsReady(true);
      if (isReady) {
        setCartProduct();
        setPrice(product.colors[0].price);
        setColor(product.colors[0].color);
      }
    }
  }, [productId, product]);

  const changePrice = (color) => {
    const selectedColor = product.colors.find((item) => item.color === color);
    setPrice(selectedColor.price);
    setColor(color);
  };

  useEffect(() => {
    if (isReady) {
      setCartProduct({
        id: product.id,
        title: product.title,
        price: price,
        quantity: quantity,
        img: product.img[0],
        color: color,
      });
    }
  }, [price, quantity, color]);

  return isReady ? (
    <Flex vertical className="px-24 mt-10">
      <Breadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: <a href="">shop</a>,
          },
          {
            title: product.title,
          },
        ]}
      />
      <Row justify="space-around">
        <Col xs={24} md={10}>
          <Flex
            justify="center"
            align="center"
            className="p-5 bg-grey rounded-lg h-full"
          >
            <Image
              src={product.img[0]}
              alt={product.title}
              width={200}
              height={100}
            />
          </Flex>
        </Col>
          <Row
            gutter={[16, 16]}
            justify="space-between"
            className=" py-3 md:hidden"
          >
            {product.img.map((img, index) => {
              return (
                <Col sm={4} xs={8}>
                  <Flex
                    justify="center"
                    align="center"
                    className="p-5 bg-grey rounded-lg"
                  >
                    <Image src={img} width={50} height={50} />
                  </Flex>
                </Col>
              );
            })}
          </Row>
        <Col xs={24} md={10} className="space-y-4">
          <Flex justify="space-between" align="center">
            <Typography className="text-3xl font-black">
              {product.title}
            </Typography>
            <Tag color="green">In Stock</Tag>
          </Flex>
          <Flex>
            <Rate defaultValue={product.rate} />
            <Typography className="pl-2 text-[#A5A9AC]">
              5.0 (121 Reviews)
            </Typography>
          </Flex>
          <Typography>${price}</Typography>
          <Typography>{product.description}</Typography>
          <Flex vertical className="space-y-2">
            <Typography className="font-black">Colors</Typography>
            <Row>
              {product.colors.map((item, index) => {
                return (
                  <Col
                    onClick={() => changePrice(item.color)}
                    span={2}
                    key={index}
                    className={`mx-1 rounded-lg  py-[1.2rem] cursor-pointer`}
                    style={{
                      backgroundColor: `${item.color}`,
                      border: `${
                        color === item.color
                          ? "4px solid rgba(28, 78, 142, 1)"
                          : ""
                      }`,
                    }}
                  ></Col>
                );
              })}
            </Row>
          </Flex>
          <Row gutter={[16,16]} justify="space-between" className="items-center pt-5">
            <Col md={8} sm={10} xs={24} className="min-h-full ">
              <NumberInput value={quantity} setValue={setQuantity} />
            </Col>
            <Col md={8} sm={10} xs={22}>
              <Button
                onClick={() => addToCart(cartProduct)}
                type="primary"
                className="w-full h-10"
              >
                Add to cart
              </Button>
            </Col>
            <Col span={1} className="text-center">
              <HeartOutlined className="text-lg" />
            </Col>
          </Row>
          <Row>
            <Col span={24} className="space-y-2">
              <Typography className="font-black">Share</Typography>
              <Row justify="start" gutter={16}>
                <Col lg={2} sm={6}>
                  <Button className="p-2">
                    <FaFacebookF />
                  </Button>
                </Col>
                <Col lg={2} sm={6}>
                  <Button className="p-2">
                    <FaTwitter />
                  </Button>
                </Col>
                <Col lg={2} sm={6}>
                  <Button className="p-2 text-center flex items-center justify-center">
                    <InstagramFilled />
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        gutter={[16, 16]}
        justify="space-between"
        className=" py-3 md:flex hidden w-[50%]"
      >
        {product.img.map((img, index) => {
          return (
            <Col sm={4} xs={8} key={index}>
              <Flex
                justify="center"
                align="center"
                className="p-5 bg-grey rounded-lg"
              >
                <Image alt={product.title} src={img} width={50} height={50} />
              </Flex>
            </Col>
          );
        })}
      </Row>
      <Row>
        <Menu

          onClick={(e) => setProductContent(e.key)}
          selectedKeys={[productContent]}
          mode="horizontal"
          items={[
            {
              label: "Description",
              key: "description",
              style: {
                fontWeight: productContent === "description" && 900,
              },
            },

            {
              label: "Additional Information",
              key: "additional",
              style: {
                fontWeight: productContent === "additional" && 900,
              },
            },
            {
              label: "Reviews",
              key: "reviews",
              style: {
                fontWeight: productContent === "reviews" && 900,
              },
            },
          ]}
          itemProp=""
          className={`bg-transparent text-sm w-full pt-3`}
        />
      </Row>
      <Row className="pt-3">
        {productContent === "description" ? (
          <Typography>{product.description}</Typography>
        ) : productContent==='reviews' ? (<Review reviews={product.reviews} />) :""}
      </Row>
    </Flex>
  ) : (
    ""
  );
};

export default Product;
