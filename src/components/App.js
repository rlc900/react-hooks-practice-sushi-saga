import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import SushiWallet from "./SushiWallet";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiState, setSushiState] = useState([])
  const [sushiIndex, setSushiIndex] = useState(0)
  const [wallet, setWallet] = useState(100)

  const displaySushis = sushiState.slice(sushiIndex, sushiIndex + 4)
  const eatenSushis = sushiState.filter((sushi) => sushi.eaten)

  useEffect(() => {
    fetch(API)
    .then((r) => r.json())
    .then((sushis) => {
      // console.log(resp)
      let updatedSushi = sushis.map((sushi) => {
        return {...sushi, eaten: false}
      })
      setSushiState(updatedSushi)
    })
  }, [])

  function handleMoreClick () {
    setSushiIndex((sushiIndex) => (sushiIndex + 4) % sushiState.length)
  }

  function eatSushi(eatenSushi) {
    if (wallet >= eatenSushi.price) {
      const updatedSushi = sushiState.map((sushi) => {
        if (sushi.id === eatenSushi.id) {
          return {...sushi, eaten: true}
        }
        return sushi
      })
      setSushiState(updatedSushi)
      setWallet((wallet) => wallet - eatenSushi.price)
    } else {
      alert('Need more money!!!')
    }
  }

  function handleAddMoney(moreMoney) {
    setWallet((wallet) => wallet + moreMoney)
  }

  return (
    <div className="app">
      <SushiContainer 
      displaySushis={displaySushis}
      onMoreClick={handleMoreClick}
      eatSushi={eatSushi}
    />
      <Table wallet={wallet} plates={eatenSushis}/>
      <SushiWallet addMoney={handleAddMoney}/>
    </div>
  );
}

export default App;
