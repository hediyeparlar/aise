import React from "react";
import { HeaderContainer, HeaderContent, IconContainer, Title, TitleContainer } from "./styled";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <IconContainer>
          <i className="icon logo" />
        </IconContainer>
        <TitleContainer>
          <Title>Hakkımızda</Title>
          <Title>Modüller</Title>
          <Title>Modeller</Title>
          <Title>İletişim</Title>
        </TitleContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
