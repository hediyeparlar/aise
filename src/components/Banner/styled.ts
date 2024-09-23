import styled from "styled-components";

export const BannerContainer = styled.div`
  height: 181px;
  background: rgba(49, 85, 135, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  opacity: 1;
  margin-bottom: 64px;
`;

export const Logo = styled.i`
  font-size: 50px;
  margin-right: 20px;
`;

export const TextContainer = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`;

export const Subtitle = styled.p`
  font-size: 36px;
  font-style: italic;
  font-weight: ligther;
  line-height: 65px;
  text-align: left;
  color: #3c3b40;
`;
