import React from "react";
import { BannerContainer, Logo, Subtitle, TextContainer } from "./styled";

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <Logo className="icon logo" />
      <TextContainer>
        <Subtitle>Markalardan bağımsız, Gerçek çözüm ortağınız.</Subtitle>
      </TextContainer>
    </BannerContainer>
  );
};

export default Banner;
