/// <reference lib="es2016" />
let admin = ["Admin", "jack", "jhon", "micky", "alexander"];
for(let i=0; i < admin.length; i++){
    if (admin[i] =="Admin"){
        console.log(`Hello ${admin[i]}, would you like to see a status report?`)
    }
    else {
        console.log(`Hello ${admin[i]} thank you for logging in again.`)
    }
}