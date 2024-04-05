
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

import { ConfigProvider } from "antd";
export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider
      theme={{
        hashed: false,
        token: {
          fontFamily: "Montserrat",
          colorPrimary: "rgba(28, 78, 142, 1)",
          colorTextDescription:"black"
          // darkItemSelectedBg: "rgba(233, 245, 219, 1)",
          // colorBgContainer: "#f8f9fa",
        },
      }}
    >
      <Component {...pageProps} />
   </ConfigProvider>
  );
}
