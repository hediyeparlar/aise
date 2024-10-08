import styled from "styled-components";

export const AboutSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 147px;
  margin-top: 64;
`;

export const AboutTextContainer = styled.div`
  margin-left: 20px;
  max-width: 45%;
`;

export const AboutTitle = styled.h2`
  font-size: 48px;
  font-weight: lighter;
  line-height: 65px;
  text-align: left;
  margin-bottom: 20px;
  color: #3c3b40;
`;

export const AboutContent = styled.p`
  font-size: 18px;
  font-weight: lighter;
  line-height: 30px;
  color: #77777a;
`;

export const AboutImage = styled.img`
  max-width: 40%;
  height: auto;
`;
