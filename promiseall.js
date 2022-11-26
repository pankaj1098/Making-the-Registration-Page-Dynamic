console.log('Person1: shows ticket');
console.log('person2: shows ticket');

const preMovie=async()=>{
    const promiseWifeBringingTicks =new Promise((resolve,reject)=>{
       setTimeout(()=>resolve('ticket'),3000); 
    });
    const getPopcorn=new Promise((resolve,reject)=>resolve('popcorn'));
    const getCandy=new Promise((resolve,reject)=>resolve('candy'));
    const getCoke=new Promise((resolve,reject)=>resolve('coke'));

    let ticket=await promiseWifeBringingTicks;

    let [popcorn,candy,coke]=await Promise.all([getPopcorn,getCandy,getCoke])

    console.log(`${popcorn},${candy},${coke}`);
    return ticket;
}

preMovie().then((m)=>console.log(`person3: shows ${m}`))
console.log('person4: shows ticket');
console.log('person5: shows ticket');



// cancelled Tickets

// console.log('Person1: shows ticket');
// console.log('person2: shows ticket');

// const preMovie=async()=>{
//     const promiseWifeBringingTicks =new Promise((resolve,reject)=>{
//        setTimeout(()=>reject('ticket'),3000); 
//     });

//     let ticket
//     try{
//         ticket=  await promiseWifeBringingTicks;
//     }catch(e){
//     ticket='sad face';
//     }
   

//     return ticket;
// }

// preMovie().then((m)=>console.log(`person3: shows ${m}`))
// console.log('person4: shows ticket');
// console.log('person5: shows ticket');



// User Details


// const testUserForm=async()=>{

//     const loadUserForm=new Promise((resolve,reject)=>{
// setTimeout(()=>resolve('Page Loaded'),3000);
//     });

//     const enterUserName=new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve('user entered'),3000);
//             });

//     // const varifyUserDetails= new Promise((resolve,reject)=>{
//     //     setTimeout(()=>resolve('user Verified'),3000);
//     // });

//     const varifyUserDetails= ()=>{
//         resolve='User varified';
//     }

//     await loadUserForm;
//     await enterUserName;
//     const testresults = varifyUserDetails();

//     return testresults;
// }

// testUserForm().then((m)=>console.log(`shows${m}`));