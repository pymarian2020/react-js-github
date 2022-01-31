import React from "react";
// Components
import { SearchBar } from "../SearchBar";
//Styles
import { Wrapper } from "./Header.styles";

export const Header = ({ callbackList }) => {
  return (
    <Wrapper>
      <SearchBar callbackList={callbackList} />
    </Wrapper>
  );
};
