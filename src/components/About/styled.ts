import styled from "styled-components";

// About Section Styles
export const AboutSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const AboutTextContainer = styled.div`
  max-width: 40%;
`;

export const AboutTitle = styled.h2`
  font-family: "Visby CF", sans-serif;
  font-size: 48px;
  font-weight: lighter;
  line-height: 65px;
  text-align: left;
  margin-bottom: 20px;
  color: #3c3b40;
`;

export const AboutContent = styled.p`
  font-family: "Visby CF", sans-serif;
  font-size: 18px; /* İçerik font boyutu */
  font-weight: lighter; /* Font ağırlığı */
  line-height: 30px; /* Satır yüksekliği */
  color: #77777a;
`;

export const AboutImage = styled.img`
  max-width: 40%; /* Resmin maksimum genişliği */
  height: auto; /* Yüksekliği orantılı olarak ayarla */
`;
