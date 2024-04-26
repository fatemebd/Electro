import { useState } from "react";

import {
  Form,
  Input,
  Checkbox,
  Modal,
  Row,
  Button,
  Divider,
  Typography,
  Flex,
} from "antd";
import Icon, {
  HomeOutlined,
  AppleFilled,
  CloseOutlined,
} from "@ant-design/icons";

import Link from "next/link";
const GoogleIcon = () => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.8437 10.1706C17.8437 9.63876 17.7959 9.12739 17.7073 8.63647H10.6436V11.5377H14.68C14.5061 12.4752 13.9777 13.2695 13.1834 13.8013V15.6832H15.6073C17.0255 14.3775 17.8437 12.4547 17.8437 10.1706Z"
      fill="#4285F4"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.6438 17.5001C12.6688 17.5001 14.3666 16.8285 15.6075 15.6831L13.1836 13.8012C12.512 14.2512 11.6529 14.5171 10.6438 14.5171C8.69034 14.5171 7.03691 13.1978 6.44713 11.425H3.94141V13.3683C5.17552 15.8194 7.71192 17.5001 10.6438 17.5001Z"
      fill="#34A853"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.44701 11.4251C6.29701 10.9751 6.21178 10.4944 6.21178 10.0001C6.21178 9.50574 6.29701 9.02505 6.44701 8.57505V6.63184H3.94129C3.43333 7.64435 3.14355 8.78982 3.14355 10.0001C3.14355 11.2103 3.43333 12.3558 3.94129 13.3683L6.44701 11.4251Z"
      fill="#FBBC05"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.6438 5.483C11.7449 5.483 12.7336 5.86142 13.5109 6.60461L15.662 4.45344C14.3632 3.24319 12.6654 2.5 10.6438 2.5C7.71192 2.5 5.17552 4.18071 3.94141 6.63188L6.44713 8.57509C7.03691 6.80234 8.69034 5.483 10.6438 5.483Z"
      fill="#EA4335"
    />
  </svg>
);
const SignUp = ({ setPopUp }) => {
  const [otpOpen, setOtpOpen] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setPopUp(null);
    setOtpOpen(true);
  };

  return (
    <Form title="New Account" layout="vertical">
      <Flex vertical className="space-y-1 mb-3 ">
        <Typography className="text-3xl font-extrabold	">
          Create New Account
        </Typography>
        <Typography className="text-gray-1000 text-base	">
          Please enter details{" "}
        </Typography>
      </Flex>
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
        label="Password"
        name="password"
        rules={[
          {
            required: false,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          span: 24,
        }}
      >
        <Checkbox>I agree to the Terms & Conditions</Checkbox>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          span: 24,
        }}
      >
        <Button
          onClick={submitHandler}
          type="primary"
          htmlType="submit"
          className="w-full"
        >
          Register
        </Button>
      </Form.Item>

      <Modal
        open={otpOpen}
        onCancel={() => setOtpOpen(false)}
        closable={false}
        className="md:w-[30%] w-[90%]"
        footer=""
      >
        <Button
          onClick={() => setOtpOpen(false)}
          icon={<CloseOutlined />}
          className="absolute top-[-40px] right-0"
        />
        <Form title="OTP" layout="vertical">
          <Form.Item
            wrapperCol={{
              span: 24,
            }}
          >
            <Flex vertical className="space-y-4 ">
              <Typography className="text-3xl font-extrabold	">
                Enter OTP{" "}
              </Typography>
              <Typography className="text-gray-1000 text-base	">
                We have share a code of your registered email address
                kristin.watson@example.com{" "}
              </Typography>
            <Input.OTP
              length={5}
              className="px-5"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            ></Input.OTP>
            <Button
              type="primary"
              className="w-full h-12"
              onClick={() => {
              setOtpOpen(false)
              }}
            >
              Send OTP{" "}
            </Button>
            </Flex>
          </Form.Item>
        </Form>
      </Modal>
      <Divider>
        <Typography className="text-xs	">Or Login With</Typography>
      </Divider>
      <Form.Item
        wrapperCol={{
          span: 24,
        }}
      >
        <Button className="w-full flex items-center justify-center gap-1">
          <Icon component={GoogleIcon} />
          <Link href="/">Login with Google</Link>
        </Button>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          span: 24,
        }}
      >
        <Button icon={<AppleFilled />} className="w-full">
          <Link href="/">Login with Apple</Link>
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
