import React, { useEffect, useState } from "react";
import { useCart } from "@/Contexts/CartContext";
import {
  Breadcrumb,
  Row,
  Col,
  Flex,
  Rate,
  Tag,
  InputNumber,
  Button,
} from "antd";
import Typography from "antd/es/typography/Typography";
import { HeartOutlined } from "@ant-design/icons";
import products from "@/assets/Products.json";
import { useRouter } from "next/router";
import Image from "next/image";
const Product = () => {
  const productId = useRouter().query.productId;
  const [product, setProduct] = useState();
  const [isReady, setIsReady] = useState(false);
  const { cartItems, addToCart, removeFromCart } = useCart();

  useEffect(() => {
   
    setProduct(products[productId]);
    if (products[productId] != undefined) {
      setIsReady(true);
    }
  }, [productId]);
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
            className="p-5 bg-grey rounded-lg"
          >
            <Image
              src={product.img}
              alt={product.title}
              width={200}
              height={100}
            />
          </Flex>
        </Col>
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
          <Typography>${product.colors[0].price}</Typography>
          <Typography>{product.description}</Typography>
          <Flex vertical className="space-y-2">
            <Typography className="font-black">Colors</Typography>
            <Row>
              {product.colors.map((item, index) => {
                return (
                  <Col
                    span={2}
                    key={index}
                    className={`bg-[${item.color}] mx-1 rounded-lg  py-[1.4rem]`}
                  ></Col>
                );
              })}
            </Row>
          </Flex>
          <Row justify="space-between" className="items-center pt-5">
            <Col span={5}>
              <InputNumber />
            </Col>
            <Col span={13}>
              <Button onClick={()=>addToCart(product)} type="primary" className="w-full h-12">
                Add to cart
              </Button>
            </Col>
            <Col span={5} className="text-center">
              <HeartOutlined className="text-lg" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Flex>
  ) : (
    ""
  );
};

export default Product;