import { useState, useEffect } from "react";
import type { Coin } from "../types/crypto";

const CoinList = () => {
      const [coins, setCoins] = useState<Coin[]>([])
      const [loading, setLoading] = useState(true)

      const [searchTerm, setSearchTerm] = useState('');

      const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) || coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      );

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
        <div className="coin-list-container">
            <h2 className="coin-list-title">Top Cryptocurrencies</h2>

            {/* Search goes here */}
            <input
                type="text"
                placeholder="Search cryptocurrencies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />


            <div className="coin-grid">
                {filteredCoins.map((coin, index) => (
                  <div key={coin.id || index} className="coin-card">
                    <img src={coin.image} alt={coin.name} className="coin-image" />  
                    <div className="coin-info">
                        <div className="coin-name">
                        {coin.name}({coin.symbol?.toUpperCase()})
                        </div>
                        <div className="coin-price">
                            ${coin.current_price?.toLocaleString()}
                        </div>
                        <div className={`coin-change ${coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}`}>
                            24hr: {coin.price_change_percentage_24h?.toFixed(2)}%
                        </div>
                    </div>
            </div>
                ))}
        </div>
        </div>
      )
}

export default CoinList;