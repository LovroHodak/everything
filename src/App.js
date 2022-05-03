import React, { useRef, useEffect, useState } from "react";
import { tw } from "./tailwind";
//components
import First from "./components/First";
import Fourth from "./components/Fourth";
import Second from "./components/Second";
import Third from "./components/Third";

function App() {
  // First
  const [changeBgColorFirst, setChangeBgColorFirst] = useState(false);
  const firstRef = useRef();

  useEffect(() => {
    const onScroll = (event) => {
      const height = event.target.scrollTop;

      if (height > firstRef.current.offsetTop) {
        setChangeBgColorFirst(true);
      } else {
        setChangeBgColorFirst(false);
      }
      /* console.log(changeBgColorFirst)
      console.log(firstRef.current.offsetTop);
      console.log(height); */
    };

    document.getElementById("root").addEventListener("scroll", onScroll);

    return () =>
      document.getElementById("root").removeEventListener("scroll", onScroll);
  });

  // Second
  const names = [
    { name: "Lovro" },
    { name: "Ivica" },
    { name: "Luka" },
    { name: "Marjana" },
  ];
  const [members, setMembers] = useState(names);

  return (
    <AppCont>
      <TwoTitles>
        <h1 className="text-3xl font-bold underline">Lovre</h1>
        <h1 className="text-tinny">Lovre</h1>
      </TwoTitles>
      <First ref={firstRef} changeBgColorFirst={changeBgColorFirst} />
      <Second members={members} />
      <Third />
      <Fourth />
    </AppCont>
  );
}

const AppCont = tw.div`
border-2 border-red-700 min-h-screen p-2
`;

const TwoTitles = tw.div`
border-2 border-blue-700 p-1 mb-1
`;

export default App;
