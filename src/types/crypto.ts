export interface Coin{
    id: string
    symbol: string
    name: string
    image: string
    current_price: number
    market_cap: number
    market_cap_rank: number
    price_change_percentage_24h: number
}

export interface GlobalData {
    total_market_cap: { used: number }
    total_volume: { usd: number }
}