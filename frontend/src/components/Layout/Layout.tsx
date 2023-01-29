import React, { FC, useState } from "react";
import Head from "next/head";
import { Nav } from "../Nav/Nav";
import { Footer } from "../Footer";
import CartSlide from "../CartSlide";
import Wishlist from "../Wishlist";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ title, children }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [openWishList, setOpenWishList] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>{title ? title : "Hello Ecommerce"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <CartSlide
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <Wishlist
          openWishList={openWishList}
          setOpenWishList={setOpenWishList}
        />
        <div
          className={
            modalVisible || openWishList
              ? "opacity-70 flex flex-col min-h-screen justify-between relative"
              : "flex flex-col min-h-screen justify-between relative "
          }>
          <header>
            <Nav
              setModalVisible={setModalVisible}
              setOpenWishList={setOpenWishList}
            />
          </header>
          <main className="item-center">{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </>
    </>
  );
};

export default Layout;