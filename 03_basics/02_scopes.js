var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    console.log("INNER: ",a);
    
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "dishant"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
}