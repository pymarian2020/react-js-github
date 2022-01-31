import React from "react";
// Styles
import { Commit, Wrapper, Repo } from "./TableContent.styles";

export const TableContent = ({ repositoryList }) => {
  console.log(repositoryList);
  return (
    <Wrapper>
      <Repo>
        {repositoryList.map((repo) => {
          return (
            <div key={repo.key}>
              <h2>Repository</h2>
              {repo.repository}
              <h2>Commits</h2>
              <Commit>
                {repo.commits.map((commit) => {
                  return <li>{commit}</li>;
                })}
              </Commit>
            </div>
          );
        })}
      </Repo>
    </Wrapper>
  );
};
