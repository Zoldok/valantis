import styled from 'styled-components';

const maxMobileWidthTwo = '620px';

export const Container = styled.div`
  width: 100%;
  background-color: gray;
  padding-bottom: 20px;
  padding-top: 20px;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const SearchPanel = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Input = styled.input`
  width: 300px;
  border-radius: 5px;
  height: 40px;
  padding: 0px 20px 0px 20px;
`;

export const Select = styled.select`
  width: 180px;
  border-radius: 5px;
  height: 40px;
  padding: 0px 20px 0px 20px;
`;


export const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 10px 30px;
  position: relative;
  overflow: hidden;
  border: 2px solid #fe6637;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  color: #4bfe37;
  transition: 0.2s ease-in-out;
  background-color: grey;
  font-size: 18px;


  @-webkit-keyframes jello-horizontal {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes jello-horizontal {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  -webkit-animation: jello-horizontal 2s infinite both;
  animation: jello-horizontal 2s infinite both;

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

export const Message = styled.div`
  color: #00ff39;
`;
