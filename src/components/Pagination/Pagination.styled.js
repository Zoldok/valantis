import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Button = styled.button`
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
