import React, { useState } from "react";

//Styles
import { Wrapper, Input, Button } from "./SearchBar.styles";

export const SearchBar = ({ callbackList }) => {
  const [user, setUser] = useState("");

  const clickHandler = async () => {
    try {
      let repoListClean = [];

      const repoList = await fetch(
        `https://api.github.com/users/${user}/repos`
      ).then((response) => response.json());

      repoListClean = repoList.map((item) => item.name);

      const commitList = async (user, repo) => {
        try {
          const commits = await fetch(
            `https://api.github.com/repos/${user}/${repo}/commits`
          ).then((response) => response.json());
          let commitMap = commits.map((entry) => {
            return entry.commit.message;
          });

          return commitMap;
        } catch (error) {
          console.log(error);
        }
      };

      // const commitList: any = await fetch(
      //   `https://api.github.com/repos/${user}/${repo}/commits`
      // ).then((response) => response.json());

      let repositories = [];

      for (let item = 0; item < 10; item++) {
        repositories[item] = {
          key: item,
          repository: repoListClean[item],
          commits: await commitList(user, repoListClean[item]),
        };
      }
      callbackList(repositories);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Enter Username"
        onChange={(e) => setUser(e.target.value)}
        value={user}
      />
      <Button type="submit" onClick={clickHandler}>
        Search
      </Button>
    </Wrapper>
  );
};
