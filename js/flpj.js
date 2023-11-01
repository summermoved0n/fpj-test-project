function getPrice() {
  const BASE_URL = 'https://binance43.p.rapidapi.com';
  const END_POINT = '/ticker/price';
  const PARAMS = '?symbol=BTCUSDT';

  const url = `${BASE_URL}${END_POINT}${PARAMS}`;
  // console.log(url);
  fetch(url, {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
    },
  });
}
getPrice();
