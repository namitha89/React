const add = (a, b) =>{
    return a + b;
}

console.log(add(4, 5));

const user = {
    name: 'namitha',
    cities:['Philadelhia','New York', 'Dublin'],
    printPlacesLived(){
       const cityMessages = this.cities.map((city) => { 
            return city;
        });
        return cityMessages;
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers : [10, 20, 30],
    mutiplierBy:3,
    multiply(){
        return this.numbers.map((number) => number * this.mutiplierBy);
    }
}
console.log(multiplier.multiply());