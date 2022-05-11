// CALLBACK
let attempts = 1;
const div = document.getElementById("results");

function EmitRandomNumber(){
    div.innerHTML += `<h4>Attempt #${attempts}. EmitRandomNumber is called.</h4>`;
    
    setTimeout(function(){
        let randomNumber = Math.floor(Math.random() * 101);
        div.innerHTML += "<p>2 seconds have lapsed.</p>";
        div.innerHTML += `<p>Random number generated is ${randomNumber}</p>`;
        div.innerHTML += "<p>- - - - - - - - - - - - - - -</p>";
        if(randomNumber <= 80 && attempts <= 10){
            attempts++;
            EmitRandomNumber();
        }
        else{
            attempts = 1
            div.innerHTML += "<h4>DONE!</h4>";
        }

        scrollDownDiv();
    }, 2000);
}

// PROMISE
let attemptsPromise = 1;
function EmitRandomNumberPromise(){
    div.innerHTML += `<h4>Attempt #${attemptsPromise}. EmitRandomNumberPromise is called.</h4>`;

    setTimeout(function(){
        let randomNumber = new Promise(function(resolve, reject){
            number = Math.floor(Math.random() * 101);
            div.innerHTML += "<p>2 seconds have lapsed.</p>";
            div.innerHTML += `</p>Random number generated is ${number}</p>`;
            div.innerHTML += "<p>- - - - - - - - - - - - - - -</p>";

            (number <= 80 && attemptsPromise <= 10) ? reject() : resolve()
        });

        randomNumber.then(() => {
            attemptsPromise = 1;
            div.innerHTML += "<h4>DONE!</h4>";
        }).catch(() => {
            attemptsPromise++;
            EmitRandomNumberPromise();
        });
        
        scrollDownDiv();
    }, 2000);
}

// ASYNC & AWAIT
let attemptsAsync = 1;
function randomNumber(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            let number = Math.floor(Math.random() * 101);
            
            (number) ? resolve(number) : reject("Error: Something went wrong :/");
        }, 2000);
    }).catch((error_message) => console.log(error_message));
}

function logRandomNumber(number){
    div.innerHTML +="<p>2 seconds have lapsed.</p>";
    div.innerHTML +=`<p>Random number generated is ${number}</p>`;
    div.innerHTML +="<p>- - - - - - - - - - - - - - -</p>";

    if(number <= 80 && attemptsAsync <= 10){
        EmitRandomNumberAsync();
    }
    else{
        attemptsAsync = 1;
        div.innerHTML +="<h4>DONE!</h4>";
    }

    scrollDownDiv();
}

async function EmitRandomNumberAsync(){
    div.innerHTML += `<h4>Attempt #${attemptsAsync}. EmitRandomNumberAsync is called.</h4>`;
    attemptsAsync++;
    let number = await randomNumber();

    if(number){
        logRandomNumber(number);
    }
}

function scrollDownDiv(){
    div.scrollTop = div.scrollHeight - div.clientHeight;
}