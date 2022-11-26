console.log('Person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicks= new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
});
const getPopcorn=promiseWifeBringingTicks.then((t)=>{
    console.log('wife: I have the ticks');
console.log('husband: we should go in');
console.log('wife : No i an hungry');
return new Promise((resolve, reject)=>resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t)=>{
    console.log('husband: i got some popcorn');
    console.log('husband : We should go in');
    console.log('wife: I need butter on my popcorn');
    return new Promise((resolve,reject)=>resolve(`${t} butter`))
});

const getColdDrinks=getButter.then((t)=>{
    console.log('wife: I also need  cold drinks');
    console.log('husband : Ok darling I will get for you');
    return new Promise((resolve,reject)=>resolve(`${t} cold drinks`))
    
});
getColdDrinks.then((t)=>console.log(t));
console.log('person4: shows ticket');
console.log('person5: shows ticket');


