import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: #3155871a;
  margin-top: 64px;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const IconInner = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-color: #ffffff;
  margin-bottom: 10px;
  margin-top: 26px;
  margin-left: auto;
  margin-right: auto;
`;

export const Text = styled.p`
  margin: 0;
  color: #3c3b40;
  font-size: 18px;
  font-weight: 600;
  line-height: 23px;
  text-align: center;
  margin-bottom: 26px;
`;
