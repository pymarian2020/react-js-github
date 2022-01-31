import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  
`;

export const Repo = styled.div`
  border: black solid 2px;
  padding: 0.5rem;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, 50%); */
`;

export const Commit = styled.ul`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, 50%); */
  border: black solid 2px;
  padding: 0.5rem;
  padding: 1rem;
`;
