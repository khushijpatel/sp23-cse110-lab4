//from question
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

//iterate through statistics and print value of property 
//if it starts with letter r or value of property is odd number
for (const property in statistics) {
    if (property[0] === 'r' || statistics[property] % 2 !== 0 ){
        console.log(property);
    }
}