import React, { useMemo, useState } from "react";
import { tw } from "../tailwind";

export default function Second({ members = [] }) {
  const [ppl, setPpl] = useState([...members]);

  console.log(members);
  console.log(ppl);
  const myFolks = useMemo(() => {
    return ppl.sort(function (a, b) {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB)
        //sort string ascending
        return -1;
      if (nameA > nameB) return 1;
      return 0; //default return value (no sorting)
    });
  }, [ppl]);

  console.log(myFolks);

  console.log(members);

  const [sortType, setSortType] = useState("");

  const sortedQuery = useMemo(() => {
    if (!sortType) {
      return members;
    } else if (sortType === "nameUp") {
      return [...ppl].sort(function (a, b) {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB)
          //sort string ascending
          return -1;
        if (nameA > nameB) return 1;
        return 0; //default return value (no sorting)
      });
    } else if (sortType === "nameDown") {
      return [...ppl].sort(function (a, b) {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA > nameB)
          //sort string ascending
          return -1;
        if (nameA < nameB) return 1;
        return 0; //default return value (no sorting)
      });
    }
  }, [sortType, members, ppl]);

  return (
    <SecondContainer>
      <SortBtn onClick={() => setSortType('nameUp')}>Name Up</SortBtn>
      <SortBtn onClick={() => setSortType('nameDown')}>Name Down</SortBtn>
      {sortedQuery.map((member, i) => {
        return <p key={i}>{member.name}</p>;
      })}
    </SecondContainer>
  );
}

const SecondContainer = tw.div`
h-60 border-2 border-green-700 p-1 mb-1
`;

const SortBtn = tw.button`
border-2 border-black
`;
