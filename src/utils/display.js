export function displayCoins(coins) {
  let trueCoins = [];
  for (let coin of coins) {
    trueCoins.push({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      image: coin.image,
      price: coin.current_price,
      marketcap: coin.market_cap,
      priceChange: coin.price_change_percentage_24h,
    });
  }
  return trueCoins;
}

export function displayChanges(changes) {
  let trueChanges = [];
  changes.prices.forEach((item) => {
    let dateString = new Date(item[0]);
    dateString = dateString.toDateString();
    trueChanges.push({ date: dateString, price: item[1] });
  });

  return trueChanges;
}
