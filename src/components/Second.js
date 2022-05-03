import React, { useMemo, useState } from "react";
import { tw } from "../tailwind";

export default function Second({ members }) {
  
  
  return (
    <SecondContainer>
      <SortBtn>Name Up</SortBtn>
      {members.map((member, i) => {
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
`
