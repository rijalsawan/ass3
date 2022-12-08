window.onload = function () {
    document.getElementById("add_button").addEventListener("click", function () {
        document.getElementById("stickies").innerHTML = "";
        fetch('partB_json/data.json', {method: 'GET'})
            .then((res) => res.json())
            .then((dataStored) => {               
                for(const obj of dataStored){
                    var txt = "";
                    var color = "";
                    for (const key in obj){
                            txt = key +" ("+obj[key].year +")<br> "+ obj[key].title +".<br> <br>";
                            color = obj[key].color;
                            createNote(txt, color);      
                    }
                }
            })
            .catch((err) => console.log("Check the file again!"));
    
    document.getElementById("del_button").addEventListener("click", function () {
        document.getElementById("stickies").innerHTML = "";
    });

    document.getElementById("del_button").addEventListener("click", function () {
        document.getElementById("stickies").innerHTML = "";
    });
    });
    function createNote(txt, color) {
        var value = txt;
        var item = {stickyValue: value, color: color};
        addNoteToDOM(item);
    }

    function addNoteToDOM(obj) {
        var notePaper = document.getElementById("stickies");
        var sticky = document.createElement("li");
        var span = document.createElement("span");
        span.innerHTML = obj.stickyValue;
        sticky.style.backgroundColor = obj.color;
        sticky.appendChild(span);
        sticky.addEventListener('click', function () {
            sticky.parentNode.removeChild(sticky);
        });
        notePaper.appendChild(sticky);
    }

};