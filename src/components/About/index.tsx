import React from "react";
import {
  AboutContent,
  AboutImage,
  AboutSection,
  AboutTextContainer,
  AboutTitle,
} from "./styled";

const About: React.FC = () => {
  return (
    <AboutSection>
      <AboutTextContainer>
        <AboutTitle>
          Kolay Erişim, Güvenilir Çözümler, Akıllı ve Verimli Hizmetlerle
          Proaktif Yaklaşımımızla Tanışın!
        </AboutTitle>
        <AboutContent>
          Temel değerlerimiz; doğal kaynakları koruma, maksimum ömür, optimum
          verim ve sürdürülebilirlik.{" "}
        </AboutContent>
      </AboutTextContainer>
      <div>
      <i className="icon about"/>
      </div>

    </AboutSection>
  );
};

export default About;
