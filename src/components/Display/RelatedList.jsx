import { Row, Typography, Flex } from "antd";
import ProductCard from "./ProductCard";
const RelatedList = ({ title, gridItems }) => {
  return (
    <>
      <Row>
        <Typography className="font-bold text-3xl	">{title}</Typography>
      </Row>
      <Flex className="overflow-x-scroll flex-nowrap	">
        {gridItems.map((item, index) => (
          <ProductCard lg={6} item={item} key={index} />
        ))}
      </Flex>
    </>
  );
};

export default RelatedList;
