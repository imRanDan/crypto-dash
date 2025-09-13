import { useEffect, useState} from 'react'
import './App.css'


function App() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCoins(data)
      })
  }, [])  

  return (
    <div>
      hi
    </div>
  )
}

export default App
