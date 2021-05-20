// CALLBACK
let attempts = 1;
const div = document.getElementById("results");

function EmitRandomNumber(){
    setTimeout(function(){
        let randomNumber = Math.floor(Math.random() * 101);
        div.innerHTML += `<h4>Attempt #${attempts}. EmitRandomNumber is called.</h4>`;
        div.innerHTML += "<p>2 seconds have lapsed.</p>";
        div.innerHTML += `<p>Random number generated is ${randomNumber}</p>`;
        div.innerHTML += "<p>- - - - - - - - - - - - - - -</p>";
        if(randomNumber < 80 && attempts <= 10){
            attempts++;
            EmitRandomNumber();
        }
        else{
            attempts = 1
            div.innerHTML += "<h4>DONE!</h4>";
        }
    }, 2000);
}

// PROMISE
let attemptsPromise = 1;
function EmitRandomNumberPromise(){
    setTimeout(function(){
        div.innerHTML += `<h4>Attempt #${attemptsPromise}. EmitRandomNumberPromise is called.</h4>`;
        let randomNumber = new Promise(function(resolve){
            number = Math.floor(Math.random() * 101);
            div.innerHTML += "<p>2 seconds have lapsed.</p>";
            resolve(number);
        });
        randomNumber.then(function(number){
            div.innerHTML += `</p>Random number generated is ${number}</p;>`;
            div.innerHTML += "<p>- - - - - - - - - - - - - - -</p>";
            if(number < 80 && attemptsPromise <= 10){
                attemptsPromise++;
                EmitRandomNumberPromise();
            }
            else{
                attemptsPromise = 1;
                div.innerHTML += "<h4>DONE!</h4>";
            }
        });
    }, 2000);
}

// ASYNC & AWAIT
let attemptsAsync = 1;
async function randomNumber(){
    setTimeout(function(){
        number = Math.floor(Math.random() * 101);
        div.innerHTML +="<p>2 seconds have lapsed.</p>";
        div.innerHTML +=`<p>Random number generated is ${number}</p>`;
        div.innerHTML +="<p>- - - - - - - - - - - - - - -</p>";
        if(number < 80 && attemptsAsync <= 10){
            EmitRandomNumberAsync();
        }
        else{
            attemptsAsync = 1;
            div.innerHTML +="<h4>DONE!</h4>";
        }
    }, 2000);
}

async function EmitRandomNumberAsync(){
    div.innerHTML += `<h4>Attempt #${attemptsAsync}. EmitRandomNumberAsync is called.</h4>`;
    attemptsAsync++;
    await randomNumber();
}