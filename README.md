# Crypto Dashboard

A responsive React/TypeScript dashboard for tracking cryptocurrency prices and market data.

**Live Demo:** [https://crypto-dash-h59k.vercel.app/]

## API Choice

**CoinGecko API** - Selected for several key reasons:
- No authentication required (perfect for take-home projects)
- Reliable, well-documented endpoints
- Rich data including prices, market caps, and 24h changes
- High-quality coin icons and metadata
- Excellent uptime and performance

## Design Decisions

**Planning:** Wireframed the layout structure before development to establish component hierarchy and responsive breakpoints.

**Grid Layout:** Responsive 4-column grid that adapts smoothly across devices (4→3→2→1 columns) for optimal viewing on any screen size.

**Search Functionality:** Real-time filtering by coin name or symbol, allowing users to quickly find specific cryptocurrencies.

**Visual Hierarchy:** Clean card-based design with color-coded price changes (green for gains, red for losses) for immediate visual feedback.

**Performance:** Fetches top 20 cryptocurrencies to balance data richness with fast load times.

## Technology Stack

- React with TypeScript
- CSS Grid for responsive layout
- Deployed on Vercel

## Future Improvements

- Individual coin detail pages with historical charts
- Portfolio tracking with local storage
- Global market statistics header
- Price alerts and favorites functionality
- Dark mode toggle
- Additional market data (volume, market cap rankings)

## Development Time

Built in approximately 6 hours as requested.
