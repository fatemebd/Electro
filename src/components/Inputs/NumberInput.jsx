import { Input, Button, Flex } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
const NumberInput = ({ value, setValue }) => {
  return (
    <Input
      className="p-0 h-10 text-center numberInput"
      value={value}
      suffix={
        <Flex
          justify="center"
          className=" border-l-[1px] px-4 h-full cursor-pointer border-black w-full  hover:bg-gray-100 rounded-r-md"
          onClick={() => setValue(value + 1)}
        >
          <PlusOutlined />
        </Flex>
      }
      prefix={
        <Flex
          onClick={() => {
            if (value > 0) {
              setValue(value - 1);
            }
          }}
          justify="center"
          className=" border-r-[1px] px-4 h-full text-center border-black w-full cursor-pointer hover:bg-gray-100 rounded-s-md"
        >
          <MinusOutlined />
        </Flex>
      }
    />
  );
};

export default NumberInput;
