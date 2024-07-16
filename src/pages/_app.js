import "@/styles/globals.css";
import "@/styles/hideScrollbar.css";
import "react-toastify/dist/ReactToastify.css";
import PublicLayout from "@/components/Layouts/PublicLayout";
import { CartProvider } from "@/Contexts/CartContext";
import { ConfigProvider } from "antd";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
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
      <CartProvider>
        <PublicLayout>
          <Component {...pageProps} />
        </PublicLayout>
      </CartProvider>
      <ToastContainer />
    </ConfigProvider>
  );
}
