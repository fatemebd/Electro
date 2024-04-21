import { Button, Col, Flex, Row, Typography, Tag } from "antd";
import Image from "next/image";
import Hero from "@/assets/images/hero.svg";
import { ArrowRightOutlined } from "@ant-design/icons";
import Mac from "@/assets/images/Macbook.png";
const HomePage = () => {
  return (
    <>
      <Row justify="start">
        <Col align="center" justify="start" span={10} className="pt-20 pl-20">
          <Flex className="flex-col justify-start space-y-3">
            <Typography className="text-7xl	 font-extrabold	text-left		">
              Great Sound With Solo Headphone
            </Typography>
            <Typography className="text-lg text-left	">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.
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
        <Col span={14}>
          <Image priority={true} src={Hero} alt="hero" />
        </Col>
      </Row>
      <Row justify="space-around">
        <Col span={10} className="bg-gray-100 rounded-lg py-3 pl-5">
          <Row justify="space-between">
            <Col>
              <Flex className="flex-col justify-between space-y-5">
                <Tag className="bg-primary-500 text-primary-1000 py-1 w-[70px]">
                  50% OFF
                </Tag>
                <Typography className="text-3xl	font-bold">
                  Mackbook Air M2
                </Typography>
                <Typography className="text-lg	">
                  Don’t miss the last opportunity{" "}
                </Typography>
                <Button
                  type="primary"
                  className="w-[150px] rtl"
                  style={{ direction: "rtl" }}
                  icon={<ArrowRightOutlined />}
                >
                  Shop Now
                </Button>{" "}
              </Flex>
            </Col>
            <Col>
              <Image src={Mac} priority={true} alt="hero" />
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
                  Mackbook Air M2
                </Typography>
                <Typography className="text-lg	">
                  Don’t miss the last opportunity{" "}
                </Typography>
                <Button
                  type="primary"
                  className="w-[150px] rtl"
                  style={{ direction: "rtl" }}
                  icon={<ArrowRightOutlined />}
                >
                  Shop Now
                </Button>{" "}
              </Flex>
            </Col>
            <Col>
              <Image src={Mac} priority={true} alt="hero" />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
