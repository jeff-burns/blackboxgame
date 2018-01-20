function populateJob() {
    document.querySelector("#player1").innerHTML = `<h1>Job</h1>`;
    document.querySelector("#score1").innerHTML = `<h2>Score: 0</h2>`
}

function populateSavannah() {
    document.querySelector("#player2").innerHTML = `<h1>Savannah</h1>`;
    document.querySelector("#score2").innerHTML = `<h2>Score: 0</h2>`;
}

function populateJeff() {
    document.querySelector("#player3").innerHTML = `<h1>Jeff</h1>`;
    document.querySelector("#score3").innerHTML = `<h2>Score: 0</h2>`;
}

function populateMichael() {
    document.querySelector("#player4").innerHTML = `<h1>Michael</h1>`;
    document.querySelector("#score4").innerHTML = `<h2>Score: 0</h2>`;
}

function populateUsers() {
    setTimeout(populateJob, 2000);
    setTimeout(populateSavannah, 3000);
    setTimeout(populateJeff, 3500);
    setTimeout(populateMichael, 4500)
}

function startGame() {
    setTimeout(getPromptButtonFirst, 5000);
    setTimeout(getRatingFieldsFirst, 5000);
}

function getPromptButtonFirst() {
    document.querySelector("#dice1").innerHTML += `<button id="getPrompt">Get Prompt!</button>`
}

function getRatingFieldsFirst() {
    document.querySelector("#rating2").innerHTML += `<input type="text" /><button class="ratingButton">Give Rating</button>`;
    document.querySelector("#rating3").innerHTML += `<input type="text" /><button class="ratingButton">Give Rating</button>`;
    document.querySelector("#rating4").innerHTML += `<input type="text" /><button class="ratingButton">Give Rating</button>`;
    addButtonListeners();
}

function addButtonListeners() {
    document.querySelectorAll(".ratingButton").forEach(button => {
        button.addEventListener("click", assignScore)
    });
    document.querySelector("#getPrompt").addEventListener("click", populatePrompt)
}

function assignScore() {
    document.querySelector("#score1").innerHTML = `<h2>Score: 8.5</h2>`
}

function populatePrompt() {
    document.querySelector("#prompt1").innerHTML = `<p>"A Woman of Uncertain Age" - Ruth is in her forties. She travels with baby Eve, a slowly dwindling mountain of baggage and a distinct lack of self-esteem on a somewhat fraught train journey to see her grown-up son. We hear the story of Eve through Ruth's inner thoughts and outer utterances in this bitter-sweet comedy of lost love and lost luggage.<p>`;
    document.querySelector("#done1").innerHTML = `<button>Complete Round</button>`;
}

populateUsers();
startGame();