"use strict";
(function () {
    var data = [
        {
            id: 'box1',
            title: 'First box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted', 'special-header', 'important']
        },
        {
            id: 'box2',
            title: 'Second box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['special-header', 'important']
        },
        {
            id: 'box3',
            title: 'Third box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted', 'important']
        },
        {
            id: 'box4',
            title: 'Fourth box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted']
        },
        {
            id: 'box5',
            title: 'Fifth box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: []
        },
    ];

    var startButton = document.getElementById("start");

    function prepareBox(dataForBox) {
        var element = document.createElement("div");
        var header = document.createElement("header");
        element.setAttribute("id", dataForBox.id);
        element.classList.add("box");
        header.innerHTML = dataForBox.title + " (id=" + dataForBox.id + ")";

        for (var i = 0; i < dataForBox.categories.length; i++) {

            if (dataForBox.categories[i] != "special-header") {
                element.classList.add(dataForBox.categories[i]);
            } else {
                header.classList.add(dataForBox.categories[i]);
            }
        }
        element.appendChild(header);
        element.innerHTML += dataForBox.content;
        document.querySelector(".results").appendChild(element);
    }

    startButton.addEventListener("click", function () {
        for (var i = 0; i < data.length; i++) {
            prepareBox(data[i]);
        }
    });
})();