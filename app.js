import fetch from "node-fetch";

async function get() {
    var requestOptions = {
      method: 'GET',
      headers: { 
        'accept': 'application/json', 
        'X-API-KEY': '' //private
      },
      redirect: 'follow'
    };
    const url = 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL';
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    console.log(data.quoteResponse.result[0].market);
  }
get();

