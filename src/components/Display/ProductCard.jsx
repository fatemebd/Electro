import { Flex, Col, Row, Typography, Rate } from "antd";
import Image from "next/image";
const ProductCard = ({ item, lg }) => {
  return (
    <Col xs={24} md={10} lg={lg} className="p-5 space-y-3">
      <Flex
        vertical
        className="bg-grey rounded-xl justify-center items-center  "
      >
        <Image
          priority={true}
          src={item.img}
          className="h-full"
          alt="grid item"
        />
      </Flex>
      <Typography className="font-extrabold text-base text-left">
        {item.label}
      </Typography>
      <Rate disabled value={item.rate} />
      <Typography className="text-lg">{item.price}</Typography>
    </Col>
  );
};

export default ProductCard;
