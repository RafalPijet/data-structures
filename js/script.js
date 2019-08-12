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
    var addButton = document.getElementById("add");
    const showButton = document.getElementById("show-all");

    function prepareBox(dataForBox) {
        var element = document.createElement("div");
        var header = document.createElement("header");
        element.setAttribute("id", dataForBox.id);
        element.classList.add("box");
        header.innerHTML = dataForBox.title + " (id=" + dataForBox.id + ")";

        for (var i = 0; i < dataForBox.categories.length; i++) {

            if (dataForBox.categories[i] !== "special-header") {
                element.classList.add(dataForBox.categories[i]);
            } else {
                header.classList.add(dataForBox.categories[i]);
            }
        }
        element.appendChild(header);
        element.innerHTML += dataForBox.content;
        document.querySelector(".results").appendChild(element);
    }

    function addContent(content) {
        let headers = document.getElementsByTagName("header");

        if (headers.length !== 0) {

            for (let i = 0; i < headers.length; i++) {
                headers[i].insertAdjacentHTML("beforeEnd", "<br>" + content + " (" + i + ")");
                let element = document.createElement("h4");
                element.setAttribute("id", content + i);
                element.innerText = content;
                headers[i].parentElement.appendChild(element);
            }
        } else {
            window.alert("Brak struktur!!!");
        }
    }

    startButton.addEventListener("click", function () {
        for (var i = 0; i < data.length; i++) {
            prepareBox(data[i]);
        }
    });

    addButton.addEventListener("click", function () {
        let content = window.prompt("Wprowadź treść");
        addContent(content);
    });

    const hideBox = function () {
        this.parentElement.parentElement.classList.add("hide");
    };

    let boxes = document.querySelectorAll(".btn-close");

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", hideBox);
    }

    showButton.addEventListener("click", function () {

        for (let i = 0; i < boxes.length; i++) {
            boxes[i].parentElement.parentElement.classList.remove("hide");
        }
    });

    let modal = document.querySelector(".modal");

    const showModal = function (event) {
        event.preventDefault();
        modal.classList.add("show");
        modal.parentElement.classList.add("show");
        modal.children[1].innerHTML = "Modal header";
    };

    const hideModal = function (event) {
        event.preventDefault();

        modal.classList.remove("show");
        modal.parentElement.classList.remove("show");
    };

    const showModalButtons = document.querySelectorAll(".show-modal");
    const closeButtons = document.querySelectorAll(".close");

    for (let i = 0; i < showModalButtons.length; i++) {
        showModalButtons[i].addEventListener("click", showModal);
    }

    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener("click", hideModal);
    }

    document.getElementById("modal-overlay").addEventListener("click", hideModal);

    const openModal = function (isOpen, modal) {

        if (isOpen) {
            document.getElementById("modal-overlay-next").classList.add("show");
            document.getElementById(modal).classList.add("show");
        } else {
            document.querySelector(".overlay-next").classList.remove("show");
            document.querySelectorAll(".modal").forEach(function (modal) {
                modal.classList.remove("show");
            });
        }
    };

    document.getElementById("1").addEventListener("click", function () {
        openModal(true, "modal-one");
    });
    document.getElementById("2").addEventListener("click", function () {
        openModal(true,"modal-two");
    });
    document.getElementById("3").addEventListener("click", function () {
        openModal(true,"modal-three");
    });

    document.querySelectorAll(".close-modal").forEach(function (button) {
        button.addEventListener("click", function () {
            openModal(false);
        })
    });
})();
