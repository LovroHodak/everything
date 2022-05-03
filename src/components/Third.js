import React from "react";
import { tw } from "../tailwind";
import { useQuery } from "react-query";
import { getTestUsers } from "../hooks/useQuery";

export default function Third() {
  const query = useQuery(["testUsers"], getTestUsers);
  console.log(query)

  return (
    <ThirdContainer>
      <h1>Third</h1>
      {query.isLoading && <div>LOADING...</div>}
      {query.data?.map((testUser, i) => {
        return (<div>
          <p key={i}>{testUser.name}</p>
        </div>)
      })}
    </ThirdContainer>
  );
}

const ThirdContainer = tw.div`
h-60 border-2 border-yellow-700 p-1 mb-1
`;

//getTestUsers
