/*let current_users = ["Admin", "jack", "jhon", "micky", "alexander"];

let new_users = ["jackma", "jhon wick", "micky", "alexander","ADMIN"];

for(let i=0; i <new_users.length; i++) {
    for(let j =0; j <current_users.length; i++) {

     if (current_users[i] === new_users[j]){
        
        console.log("the person will need to enter a new username")
     }else{
        console.log(" the username is available.")
     }
    }
    
}*/
function make_shirt(size, message) {
    console.log("You have ordered a ".concat(size, "-sized shirt with the message: \"").concat(message, "\"."));
}
make_shirt("large", "Hello, World!");
