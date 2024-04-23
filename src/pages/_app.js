import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import PublicLayout from "@/components/Layouts/PublicLayout";
import { SiderContext } from "antd/es/layout/Sider";
import { ConfigProvider } from "antd";
import { useState } from "react";
export default function App({ Component, pageProps }) {
  const [sidebarItems, setSidebarItems] = useState([]);

  return (
    <ConfigProvider
      theme={{
        hashed: false,
        token: {
          fontFamily: "Montserrat",
          colorPrimary: "rgba(28, 78, 142, 1)",
          colorTextDescription: "black",
          // darkItemSelectedBg: "rgba(233, 245, 219, 1)",
          // colorBgContainer: "#f8f9fa",
        },
      }}
    >
      <SiderContext.Provider value={{sidebarItems, setSidebarItems}}>
        <PublicLayout>
          <Component {...pageProps} />
        </PublicLayout>
      </SiderContext.Provider>
    </ConfigProvider>
  );
}
