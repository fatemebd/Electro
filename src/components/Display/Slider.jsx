import { Button, Col, Flex, Row, Typography } from "antd";
import Image from "next/image";
import { useRef } from "react";
import { FaArrowRightLong , FaArrowLeftLong} from "react-icons/fa6";

const Slider = ({ sliderItems, title }) => {
  const scrollEl = useRef(null)

const scroll = (offset)=>{
  scrollEl.current.scrollLeft +=offset
}

  return (
    <Flex vertical className="md:px-16 px-5 my-10 space-y-3">
      <Row justify="space-between">
        <Col span={12}>
          <Typography>{title}</Typography>
        </Col>
        <Col span={12} className="flex gap-2 justify-end">
          <Button onClick={()=>{scroll(-100)}} type="primary" icon={<FaArrowLeftLong />}></Button>
          <Button  onClick={()=>{scroll(+100)}}  type="primary" icon={<FaArrowRightLong />}></Button>

        </Col>
      </Row>
      <Flex ref={scrollEl} className="overflow-x-scroll scrollBarHide scroll-smooth	 flex-nowrap	justify-between">
        {sliderItems.map((item, index) => (
          <Col
            xs={12}
            sm={8}
            md={4}
            lg={2}
            key={index}
            className="items-center justify-start flex flex-col"
          >
            <Flex className="rounded-[100%] p-4  bg-grey">
              <Image width={100} height={120} src={item.img} alt={item.title} />
            </Flex>
            <Typography className="text-sm font-black">{item.title}</Typography>
          </Col>
        ))}
      </Flex>
    </Flex>
  );
};

export default Slider;
