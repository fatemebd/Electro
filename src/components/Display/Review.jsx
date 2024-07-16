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
  Form,
} from "antd";
import AddReview from "../Forms/AddReview";
import Image from "next/image";
import { useEffect } from "react";
const Review = ({ reviews, productId }) => {
  useEffect(()=>{
    console.log(reviews);
  },[])
  return (
    reviews&&
    <>
      <Typography className="font-black w-full">Customer Reviews</Typography>
      <Flex vertical justify="start" align="start" className="space-y-5 pt-3">
        {reviews.map((review, index) => {
          return (
            <Flex
              key={index}
              vertical
              justify="start"
              align="start"
              className="space-y-2"
            >
              <Row justify="start" align="center" gutter={16}>
                <Col span={6}>
                  {/* <Image
                    src={review.profilePic}
                    width={50}
                    height={50}
                    alt="review"
                  /> */}
                </Col>
                <Col span={18}>
                  <Typography>{review.name}</Typography>
                  <Rate disabled value={review.rate} />
                </Col>
              </Row>
              <Typography className="font-black text-sm	">
                {review.title}
              </Typography>
              <Typography className="text-sm	">{review.body}</Typography>
              <Typography className="text-gray-400 inline-block text-xs	">
                Reviewd by
                <Typography className="text-black inline-block">
                  Electro
                </Typography>
                Posted on
                <Typography className="text-black inline-block">
                  {review.date}
                </Typography>
                .
              </Typography>
            </Flex>
          );
        })}
      </Flex>
      <AddReview productId={productId} />
    </>
  );
};

export default Review;
