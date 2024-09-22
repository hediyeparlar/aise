import React from "react";
import { Icon, ProductsContainer, IconInner, Text } from "./styled";

const Products = () => {
  const items = [
    { text: "Tarımsal Sulama" },
    { text: "İçme Suyu" },
    { text: "Atık Suyu" },
    { text: "Kullanma Suyu" },
    { text: "Otomasyon" },
    { text: "Danışmanlık Destek" },
  ];

  return (
    <ProductsContainer>
      {items.map((item, index) => (
        <div key={index}>
          <IconInner />
          <Text>{item.text}</Text>
        </div>
      ))}
    </ProductsContainer>
  );
};

export default Products;
