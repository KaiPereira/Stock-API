import fetch from "node-fetch";

async function get() {
    var requestOptions = {
      method: 'GET',
      headers: { 
        'accept': 'application/json', 
        'X-API-KEY': 'dyiMZ8ey0q2NlassaGFAJ2kOaoWqklRQa0laWUvt'
      },
      redirect: 'follow'
    };
    const url = 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL';
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    console.log(data.quoteResponse.result[0].market);
  }
get();

function test() {
  document.getElementById('text').innerHTML = 'IT WORKED'
}
test();