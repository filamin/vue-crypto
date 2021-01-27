import http from "./http-common";

class CoinsDataService {
  getAllCoins() {
    return http.get(
      "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=14d"
    );
  }
  getCoinChanges(id) {
    return http.get(
      `/coins/${id}/market_chart?vs_currency=usd&days=14&interval=daily`
    );
  }
}

export default new CoinsDataService();
