import styled from 'styled-components';

const maxMobileWidthTwo = '620px';

export const CardsItem = styled.div`
  margin: 0;
  width: 150px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    margin: 0;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;
export const CardsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: flex;
    flex-direction: column;
  }
`;
export const CardsImage = styled.div`
  background-color: #f0f0f0;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    background-color: #d9d9d9;
  }
`;
export const CardsImageImg = styled.img`
  width: 150px;
  height: 150px;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  padding-right: 10px;
  // overflow: hidden;
  margin-top: 10px;
`;

export const CardName = styled.p`
  overflow-wrap: break-word;
  word-wrap: break-word;
  text-wrap: wrap;
  width: 130px;
  text-align: center;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
`;

export const PaginButton = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
  gap: 5px;
  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100vh;
  width: 100%;
  grid-gap: 40px 26px;
  justify-content: center;
  padding-bottom: 40px;

  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009ee4;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 10px 30px;
  margin: 10px 20px;
  position: relative;
  overflow: hidden;
  border: 2px solid #fe6637;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  color: #4bfe37;
  transition: 0.2s ease-in-out;
  background-color: grey;
  font-size: 18px;

  &:before {
    content: '';
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.5)
    );
    height: 50px;
    width: 50px;
    position: absolute;
    top: -8px;
    left: -75px;
    transform: skewX(-45deg);
  }
  &:hover {
    background: #fe6637;
    color: #fff;
  }
  &:hover:before {
    left: 150px;
    transition: 0.5s ease-in-out;
  }
  &:disabled {
    background-color: #fe6637;
  }
`;

export const ButtonPagin = styled.button`
  height: 30px;
  width: 30px;
  background-color: grey;
  color: #4bfe37;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }

  &.active {
    background-color: #7f00ff;
  }
`;
