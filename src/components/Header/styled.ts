import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 102px;
  background: #ffffff;
  box-shadow: 0px 1px 7px 3px #c2c2c240;
  display: flex;
  align-items: center;
  padding: 0 147px;
  box-sizing: border-box;
  opacity: 1;
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 47px;
`;

export const Title = styled.h1`
  font-family: "Visby CF", sans-serif;
  font-size: 17px;
  font-weight: 600;
  line-height: 30px;
  color: #2c469c;
`;
