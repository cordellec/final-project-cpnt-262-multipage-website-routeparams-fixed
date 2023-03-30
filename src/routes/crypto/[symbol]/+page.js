
export const load = async ({ params }) => {

  console.log(params.symbol)
  const response = await fetch(`https://api.coinlore.net/api/tickers/?limit=10&symbol=/${params.symbol}`);

  const cryptocurrencydata = await response.json();

  return {
    data:cryptocurrencydata,
    symbol:params.symbol
  }
}