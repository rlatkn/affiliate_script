# Affiliate system for it-services based on Ethereum smart contract

1. Inject `partner.js` for saving partner id from url to cookie
2. Use `payment.html` for payment form on order page

## Development

```
cp .env.example .env
yarn
yarn dev
```
default port is 8086

## Production
```
yarn
yarn build
```

and serve files from `dist` on static host