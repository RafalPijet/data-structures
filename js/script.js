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

    var boxes = document.querySelectorAll(".box");
    var startButton = document.getElementById("start");

    var show = function() {

        for (var i = 0; i < data.length; i++) {
            boxes[i].id = data[i].id;
            boxes[i].querySelector("header").innerHTML = data[i].title + " (id=" + boxes[i].id + ")";
            boxes[i].querySelector("p").innerHTML = data[i].content;

            for (var j = 0; j < data[i].categories.length; j++) {

                if (data[i].categories[j] != "special-header") {
                    boxes[i].classList.add(data[i].categories[j]);
                } else {
                    boxes[i].querySelector("header").classList.add(data[i].categories[j]);
                }
            }
        }
    }

    startButton.addEventListener("click", show);

})();