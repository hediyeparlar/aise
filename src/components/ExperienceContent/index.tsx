import React from "react";
import {
  ExperienceSection,
  ExperienceTextContainer,
  ExperienceTitle,
  Content,
} from "./styled";

const ExperienceContent = () => {
  return (
    <ExperienceSection>
      <div>
        <i className="icon about" />
      </div>
      <ExperienceTextContainer>
        <ExperienceTitle>
          Pompa yönetiminde 30 yıllık tecrübeyle özel çözümler sunuyoruz!
        </ExperienceTitle>
        <Content>
          Pompa istasyonlarının yönetimi ve denetimi, sürekli dikkat gerektiren
          dinamik bir süreçtir. Pompa çalışma performansını etkileyen çok sayıda
          olayın bulunduğu sistemlerde, sürekli izleyen sensörlerden gelen
          verileri analiz ederek robotik işlemler gerçekleştirebilen çözümler
          sunmaktayız.
        </Content>
      </ExperienceTextContainer>
    </ExperienceSection>
  );
};

export default ExperienceContent;
