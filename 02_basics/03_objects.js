//singleton
//Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Dishant",
    "full name": "Dishant Chavhan",
    [mySym]:"myKey1",
    age : 18,
    location : "Yavatmal",
    email : "dishantchavhan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "dishantchavhan@chatgbt.com"
// Object.freeze(JsUser)
JsUser.email = "dishantchavhan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());