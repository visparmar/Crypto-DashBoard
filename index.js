
const fetchCryptoDetail = async () => {
    try {
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
        const response = await fetch(url, {
            method: "GET"

        });

        const data = await response.json();

        //console.log(data[0]);
        buildTable(data);

    } catch (error) {
        console.error(error);

    }
}
document.addEventListener('DOMContentLoaded', fetchCryptoDetail);

function buildTable(data) {

    var table = document.getElementById('tablebody')

    for (var i = 0; i < data.length; i++) {
        var row =
           ` <tr>
              
                <td> 
                      <img src=${data[i].image}>      </td>
                <td>
                    ${data[i].name}
                </td>
                <td class="symbol">
                    ${data[i].symbol}
                </td>
                <td>
                    ${data[i].current_price}
                </td>
                <td class="price-change">
                    ${data[i].market_cap_change_24h}

                </td>
                <td>
                    ${data[i].price_change_24h}

                </td>
                <td>
                    ${data[i].market_cap}

                </td>

            </tr>`
            table.innerHTML+=row;
    }
}

