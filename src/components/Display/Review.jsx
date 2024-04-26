import {
  Breadcrumb,
  Row,
  Col,
  Flex,
  Rate,
  Tag,
  Menu,
  Button,
  Typography,
} from "antd";
import Image from "next/image";
const Review = ({ reviews }) => {
  return (
    <>
      <Typography className="font-black w-full">Customer Reviews</Typography>
      <Flex vertical justify="start" align="satrt">
        {reviews.map((review, index) => {
          console.log(review);
          return (
            <Flex vertical justify="start" align="center">
              <Row justify="start" align="center" key={index} gutter={16}>
                <Col span={6}>
                  <Image
                    src={review.profilePic}
                    width={50}
                    height={50}
                    alt="review"
                  />
                </Col>
                <Col span={18}>
                  <Typography>{review.name}</Typography>
                  <Rate disabled value={review.rate} />
                </Col>
              </Row>
                <Typography className="font-black">{review.title}</Typography>
              <Typography>
                {review.description}
              </Typography>
              <Typography className="text-gray-400 inline-block">
                Reviewd by <Typography className="text-black inline-block">Electro</Typography> Posted on <Typography className="text-black inline-block">{review.date}</Typography>.
              </Typography>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};

export default Review;
