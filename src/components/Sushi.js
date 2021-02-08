import React from "react";

function Sushi({sushi, eatSushi}) {
  // console.log(props)
  const {img_url, name, price, eaten} = sushi

  function handleSushiClick () {
    if (!eaten) {
      eatSushi(sushi)
    } else {
      alert('You can\'t eat off an empty plate!')
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClick}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
