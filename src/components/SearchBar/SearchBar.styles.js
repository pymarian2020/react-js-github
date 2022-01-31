import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  gap: 2rem;
`;

export const Input = styled.input`
  width: 300px;
  border-radius: 20px;
  height: 60px;
  font-size: 2rem;
  box-shadow: 0 0.3rem rgba(121, 121, 121, 0.65);
`;

export const Button = styled.button`
  background: #333;
  border-radius: 20px;
  padding: 10px;
  height: 60px;
  width: auto;
  margin: 5px;
  font-size: 2rem;
  color: white;
  box-shadow: 0 0.3rem rgba(121, 121, 121, 0.65);

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
  :active {
    transform: translate(0, 0.3rem);
    box-shadow: 0 0.1rem rgba(255, 255, 255, 0.65);
  }
`;
