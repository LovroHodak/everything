import React, { forwardRef } from "react";
import { tw } from "../tailwind";

export default forwardRef(function First({ changeBgColorFirst }, ref) {
  const changeBgColor = changeBgColorFirst ? "bg-indigo-700" : "";
  return (
    <FirstContainer className={`${changeBgColor}`} ref={ref}>
      First
    </FirstContainer>
  );
});

const FirstContainer = tw.div`
h-60 border-2 border-orange-700 p-1  mb-1
`;
