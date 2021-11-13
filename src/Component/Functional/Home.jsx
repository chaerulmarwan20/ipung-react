import React from "react";

import Produk from "../Class/Produk";
// import Blog from "./Blog";

const Home = () => {
  return (
    <div>
      {/* <Blog
        tanggal="22 Juli 2021"
        judul="Teknologi Blockchain"
        summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
      />
      <Blog
        tanggal="23 Juli 2021"
        judul="Teknologi Internet of Things"
        summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
      />
      <Blog
        tanggal="24 Juli 2021"
        judul="Design Pattern Laravel"
        summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
      /> */}
      <Produk nama="Macbook Pro 2021" stock="10" harga="30000000" />
      <Produk nama="Macbook Pro 2020" stock="15" harga="45000000" />
      <Produk nama="Macbook Pro 2022" stock="100" harga="50000000" />
      <Produk nama="Macbook Pro 2022" stock="50" harga="68000000" />
      <Produk nama="Macbook Pro 2018" stock="14" harga="26000000" />
      <Produk nama="Macbook Pro 2017" stock="20" harga="20000000" />
    </div>
  );
};

export default Home;
