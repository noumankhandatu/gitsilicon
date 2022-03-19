import React from "react";
import Data from "./Data";
import FAQsdAccordions from "./index";

export default function Mapaccordion() {
  return (
    <div>
      {Data.map((val, i) => {
        return (
          <FAQsdAccordions
            key={i}
            Question={val.Question}
            Answer={val.Answer}
          />
        );
      })}
    </div>
  );
}
