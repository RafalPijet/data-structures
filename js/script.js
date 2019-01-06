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

    var prepareBox = function(iterate) {
        var placeToInsert = document.querySelector(".results");
        var element = document.createElement("div");
        element.appendChild(document.createElement("header"));
        element.appendChild(document.createElement("p"));
        element.classList.add("box");
        placeToInsert.appendChild(element);
        element.setAttribute("id", data[iterate].id);
    }

    var runTask = function() {
        var counter = Object.keys(data).length;
        var box;

        for (var i = 0; i < counter; i++) {
            prepareBox(i);
            box = document.getElementById(data[i].id);
            box.querySelector("header").innerHTML = data[i].title + " (id=" + box.id + ")";
            box.querySelector("p").innerHTML = data[i].content;

            for (var j = 0; j < data[i].categories.length; j++) {

                if (data[i].categories[j] != "special-header") {
                    box.classList.add(data[i].categories[j]);
                } else {
                    box.querySelector("header").classList.add(data[i].categories[j]);
                }
            }

        }
        startButton.classList.add("hidden");
    }
    startButton.addEventListener("click", runTask);

})();