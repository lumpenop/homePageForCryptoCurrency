const fetch = require('node-fetch');
const url = 'https://api.upbit.com/v1/market/all?isDetails=false';
const options = {method: 'GET', headers: {Accept: 'application/json'}};



async function showPrice(item){
    const url2 = 'https://api.upbit.com/v1/ticker?markets='+item;
    const options2 = {method: 'GET', headers: {Accept: 'application/json'}};

    const response = await fetch(url2, options2);
    const data = await response.json();
    

    return data;
}

async function showAll(){
    const response = await fetch(url, options);
    const result = await response.json();
    let = marketArr = []
    for(var i=0; i<result.length;i++){
        if(!result[i].market.indexOf('KRW')){
            
            marketArr.push(result[i].market);
            
        }
    }
    
    return marketArr;
}

async function main(){
    let arr = [];
    const result = await showAll();
    for(var i=0; i<10;i++){
        console.log(await showPrice(result[i]), i);
        setTimeout(function(){
            
        },2000);
    }
    
}

main();