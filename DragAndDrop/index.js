let box1c = document.getElementsByClassName("box1c");
let box1b = document.getElementById("box1b");
let box2b = document.getElementById("box2b");
console.log(box1c)
for (i of box1c) {
    i.addEventListener
        (
            "dragstart",
            function (e) {
                let selected = e.target;
                console.log(selected);
                box1b.addEventListener(
                    "dragover",
                    function (e) {
                        e.preventDefault();
                    }
                );
                box2b.addEventListener(
                    "drop",
                    function (e) {
                        box2b.appendChild(selected);
                        selected = null;
                    }
                );
                box2b.addEventListener(
                    "dragover",
                    function (e) {
                        e.preventDefault();
                    }
                );
                box1b.addEventListener(
                    "drop",
                    function (e) {
                        box1b.appendChild(selected)
                        selected = null
                    }
                );
            }
        );
}