/*-------------BOM----------------*/

/*for(var i = 0; i < 3 ; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000);
}

console.log("===================================");

for(let j = 0; j < 3 ; j++){
    setTimeout(function(){
        console.log(j);
    }, 1000);
}*/


/*---------------LocalStorage--------------------*/

/*let users = [
    {name: "Mohamed", age: 25},
    {name: "Ahmed", age: 25},
    {name: "Aya", age: 25},
];

 localStorage.setItem("users", JSON.stringify(users)); //-> JSON stringify makes the datatype string./ localStorage has no expiration date which means when you close the tab and open again you will find the data.
 let data = localStorage.getItem("users");

//console.log(JSON.parse(data));// -> JSON parse returns the data to its original type.

// if(localStorage.getItem("users") === null){ //-> to check if i have data or not and if i don't have i ordered to create one if there is no data.
//     localStorage.setItem("users", JSON.stringify(users))
// }else{
//     users = JSON.parse(localStorage.getItem("users"));
// }
sessionStorage.setItem("name", "Hi"); // -> has expiration date which means when you close the tab it vanish

console.log(users);
*/


/*localStorage.setItem("userName", "Mohamed Ali"); // the localStorage accepts the data as a string only.
console.log(localStorage.getItem("userName"));

// localStorage.removeItem("userName")
*/

/*-----------------------------Regex--------------------------------*/

let str = "Mohamed Ali";
let regex = /M/;

if(regex.test(str)){ // i am searching for M letter in string Mohamed Ali
    console.log("ok")
}else{
    console.log("no")
}