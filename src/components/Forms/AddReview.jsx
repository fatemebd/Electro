import {
  Form,
  Input,
  Checkbox,
  Col,
  Row,
  Button,
  Divider,
  Typography,
  Modal,
  Flex,
  Rate,
} from "antd";
import Icon, { CloseOutlined, AppleFilled } from "@ant-design/icons";

import Link from "next/link";
import ChangePass from "@/assets/images/ChangePass.svg";
import { useState, useEffect } from "react";
import Image from "next/image";

const AddReview = () => {
  const [rate, setRate] = useState(0);
  useEffect(() => {
    console.log("Rate:", rate);
  }, [rate]);
  return (
    <Form title="Review" layout="vertical" className="w-full mt-5">
    
        <Typography className="font-black ">Add your Review</Typography>
      <Form.Item label="Your Rating" name="rate" className="mt-1">
        <Flex className="space-x-4">
          <Rate
          
            count={1}
            onClick={() => setRate(1)}
            value={rate === 1 && rate}
            className="addRate"
          />
          <Rate
            count={2}
            onClick={() => setRate(2)}
            value={rate === 2 && rate}
            className="addRate"
          />
          <Rate
            count={3}
            onClick={() => setRate(3)}
            value={rate === 3 && rate}
            className="addRate"
          />
          <Rate
            count={4}
            onClick={() => setRate(4)}
            value={rate === 4 && rate}
            className="addRate"
          />
          <Rate
            count={5}
            onClick={() => setRate(5)}
            value={rate === 5 && rate}
            className="addRate"
          />
        </Flex>
      </Form.Item>
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: false,
            message: "Please input your name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email Address"
        name="email"
        rules={[
          {
            required: false,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Your Review"
        name="review"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          span: 24,
        }}
      >
        <Button type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddReview;
