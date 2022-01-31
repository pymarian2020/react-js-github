import React from "react";
import { TableContent } from "../TableContent";
import { TableHeader } from "../TableHeader";
// Styles
import { Wrapper } from "./Table.styles";

export const Table = ({ repositoryList })=> {
  return (
    <Wrapper>
    
      <TableContent repositoryList={repositoryList} />
    </Wrapper>
  );
};
