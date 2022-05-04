import React, { useState } from "react";
import { tw } from "../tailwind";
import { useQuery, useMutation } from "react-query";
import { getTestUsers, addTestUser } from "../hooks/useQuery";

export default function Third() {
  const [text, setText] = useState("");
  const query = useQuery(["testUsers"], getTestUsers, {
    enabled: !text,
  });
  console.log(query);

  const testUserMutation = useMutation(() => addTestUser({ text }), {
    onSuccess: () => setText(""),
  });

  function addNewTestUser(e) {
    e.preventDefault();
    testUserMutation.mutate();
  }

  return (
    <ThirdContainer>
      <h1>Third</h1>
      <h2>Display TestUsers</h2>
      {query.isLoading && <div>LOADING...</div>}
      {query.data?.map((testUser, i) => {
        return (
          <div>
            <p key={i}>{testUser.name}</p>
          </div>
        );
      })}
      <h2>Add new TestUser</h2>
      <form onSubmit={addNewTestUser}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="new user"
        />
        <button>Submit</button>
      </form>
    </ThirdContainer>
  );
}

const ThirdContainer = tw.div`
h-60 border-2 border-yellow-700 p-1 mb-1
`;

//getTestUsers
