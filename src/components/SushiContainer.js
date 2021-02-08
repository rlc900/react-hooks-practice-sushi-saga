import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({displaySushis, onMoreClick, eatSushi}) {
  const sushiComponents = displaySushis.map((sushi) => {
    // console.log(sushi)
    return <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi}/>
  })
  // console.log(props)
  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onMoreClick={onMoreClick}/>
    </div>
  );
}

export default SushiContainer;
