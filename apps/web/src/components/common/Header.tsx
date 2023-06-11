import Head from "next/head";
import React from "react";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <div>
      <Head>
        <title>Next App</title>
      </Head>
    </div>
  );
};
export default Header;
