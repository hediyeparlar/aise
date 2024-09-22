import React from "react";
import {
  HeaderContainer,
  HeaderContent,
  IconContainer,
  Title,
  TitleContainer,
} from "./styled";

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <IconContainer>
          <i className="icon logo" />
        </IconContainer>
        <TitleContainer>
          <Title onClick={() => scrollToSection("about")}>Hakkımızda</Title>
          <Title onClick={() => scrollToSection("products")}>Modüller</Title>
          <Title onClick={() => scrollToSection("experience")}>Modeller</Title>
          <Title onClick={() => scrollToSection("contact")}>İletişim</Title>
        </TitleContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
