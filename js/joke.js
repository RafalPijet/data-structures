'use strict';
(function () {
    const jokeUrl = "http://api.icndb.com/jokes/random";
    const jokeOutput = document.getElementById("joke-output");
    const jokeButton = document.getElementById("joke-button");

    const prepareJoke = function () {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", jokeUrl);
        xhr.addEventListener("load", function () {
            let response = JSON.parse(xhr.response);
            jokeOutput.innerText = response.value.joke;
        });
        xhr.send();
    };

    jokeButton.addEventListener("click", function () {
        prepareJoke();
    });
})();
