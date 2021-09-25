const body = document.body
const title = document.createElement('h1')
title.classList = 'title'
title.innerHTML = 'COUNTRIES'
const main = document.createElement('main')
main.id = 'main'
    async function countries() {
        const response = await fetch (`https://rest-countries-api-techieegy.herokuapp.com/v1/all`)
        const data = await response.json();
            console.log(data);
            data.forEach((item) => {
                const cards = document.createElement('div')
                cards.classList = 'cards'
                    const image = document.createElement('img')
                    image.classList = 'flag'
                    image.src = item.flags[0]
                    const content = document.createElement('div')
                    content.classList = 'content'
                        const name = document.createElement('h1')
                        name.classList = 'name'
                        name.innerHTML = item.name
                        // const capital = document.createElement('p')
                        // capital.classList = 'capital text-content'
                        // capital.innerHTML = `Capital: <span>${item.capital}</span>`
                        // const codes = document.createElement('p')
                        // codes.classList = 'codes text-content'
                        // codes.innerHTML = `Country Codes: <span> ${item.alpha2Code + "," + item.alpha3Code}</span>` 
                        // const region = document.createElement('p')
                        // region.classList = 'region text-content'
                        // region.innerHTML = `Region: <span>${item.region}</span>`
                        // const latlng = document.createElement('p')
                        // latlng.classList = 'latlng text-content'
                        // latlng.innerHTML = `Lat,Long: <span>${item.latlng}</span>`  
                    content.append(name)
                
                    if (item.currencies || item.region || item.capital) {
                        
                        const capital = document.createElement('p')
                        capital.classList = 'capital text-content'
                        capital.innerHTML = `Capital: <span>${item.capital}</span>`
                        content.append(capital)

                        const region = document.createElement('p')
                        region.classList = 'region text-content'
                        region.innerHTML = `Region: <span>${item.region}</span>`
                        content.append(region)

                        const currcode =  document.createElement('p')
                        currcode.classList = 'currcode text-content'
                        currcode.innerHTML = `Currencies Code: <span>${item.currencies[0].code}</span>`
                        content.append(currcode)
                        const currname = document.createElement('p')
                        currname.classList = 'currname text-content'
                        currname.innerHTML = `Currencies Name: <span>${item.currencies[0].name}</span>`
                        content.append(currname)
                        const currsymbol = document.createElement('p')
                        currsymbol.classList = 'currsymbol text-content'
                        currsymbol.innerHTML = `Currencies Symbol: <span>${item.currencies[0].symbol}</span>`
                        content.append(currsymbol)
                    }

                    else {
                        
                        const capital = document.createElement('p')
                        capital.classList = 'capital text-content'
                        capital.innerHTML = `Capital: <span> - - </span>`
                        content.append(capital)

                        const region = document.createElement('p')
                        region.classList = 'region text-content'
                        region.innerHTML = `Region: <span> - - </span>`
                        content.append(region)

                        const currcode =  document.createElement('p')
                        currcode.classList = 'currcode text-content'
                        currcode.innerHTML = `Currencies Code: <span> - - </span>`
                        content.append(currcode)
                        const currname = document.createElement('p')
                        currname.classList = 'currname text-content'
                        currname.innerHTML = `Currencies Name: <span> - - </span>`
                        content.append(currname)
                        const currsymbol = document.createElement('p')
                        currsymbol.classList = 'currsymbol text-content'
                        currsymbol.innerHTML = `Currencies Symbol: <span> - - </span>`
                        content.append(currsymbol)
                    }

                    const latlng = document.createElement('p')
                    latlng.classList = 'latlng text-content'
                    latlng.innerHTML = `Lat,Long: <span>${item.latlng}</span>` 
                    content.append(latlng)

                    const codes = document.createElement('p')
                    codes.classList = 'codes text-content'
                    codes.innerHTML = `Country Codes: <span> ${item.alpha2Code + "," + item.alpha3Code}</span>` 
                    content.append(codes)


                cards.append(image, content)
            main.append(cards)
        });
};
body.append(title ,main)
countries();
