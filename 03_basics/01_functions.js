function sayMyName(){
    console.log("D");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("n");
    console.log("t");
}

// sayMyName()


// function addTwoNumbers(number1,number2){

//     console.log(number1+number2);

// }

function addTwoNumbers(number1,number2){

    //let result = number1 + number 2
    //return result

    return number1 + number2
}

const result = addTwoNumbers(1,4)
// console.log(result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`

}

// console.log(loginUserMessage("dishant"));
// console.log(loginUserMessage("mahesh"));


function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,500));

const user = {
    username : "Dishant",
    prices : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

// handleObject(user)

handleObject({
    username : "sam",
    prices :399

})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return[1]
}

// console.log(returnSecondValue(myNewArray));

// console.log(returnSecondValue([200,300,400]));
console.log(returnSecondValue([200, 400, 500, 1000]));