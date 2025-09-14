import { useState, useEffect } from "react";
import type { Coin } from "../types/crypto";

const CoinList = () => {
      const [coins, setCoins] = useState<any[]>([])
      const [loading, setLoading] = useState(true)


      useEffect(() => {
        const fetchCoins = async () => {
            try {
                const response = await fetch(
                    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1'
                )
                const data = await response.json()
                setCoins(data)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching coins:', error);
                setLoading(false)
            }
        }
        fetchCoins();
      }, [])

      if (loading) return <div>Loading...</div>

      return (
        <div>
            <h2>Top Cryptocurrencies</h2>
            <div>
                {coins.map((coin) => (
                  <div key={coin.id} style={{ padding: '10px', border: '1px solid #ccc', marign: '5px'}}>
                    <img src={coin.image} alt={coin.name} width="20" />  
                    <strong>{coin.name}</strong> ({coin.symbol.toUpperCase()})
                    <br />
                    Price: ${coin.current_price}
                    <br/>
                    24hr Change: {coin.price_change_percentage_24h?.toFixed(2)}%
            </div>
                ))}
        </div>
        </div>
      )
}

export default CoinList;