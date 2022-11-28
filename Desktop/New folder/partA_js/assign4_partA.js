window.onload = function() {
    let textMore = "Read the whole article";
    let textLess = "[Hide]";
    let whatToHide = document.getElementById("show-hide");
    let moreLess = document.getElementById("more-less");
    whatToHide.className = "hidden";
    moreLess.innerHTML = textMore;
    //moreLess.onclick = function() {
    moreLess.addEventListener("click",()=>{
        if (moreLess.innerHTML === textMore) {
            moreLess.innerHTML = textLess;
            whatToHide.className = "visible";
        }
        else {
            moreLess.innerHTML = textMore;
            whatToHide.className = "hidden";
        }
    });

    let image = document.getElementById("flowChart");
    image.onmouseover = function() {
        image.src = "images/TheMammothInternet-hover.jpeg";
    };
    image.onmouseout = function() {  image.src = "./images/TheMammothInternet.jpeg"; }

    let h1 = document.getElementById("heading1");
    h1.onclick = function() { 
        if (h1.style.position==="fixed") {
            h1.style.position = "relative";
        }
        else {
            h1.style.position = "fixed";
        }
    }

    let abstractDiv = document.getElementById("abstractDiv");
    abstractDiv.addEventListener("click", function() {
        changePadding(abstractDiv);
    });
    
    let introDiv = document.getElementById("introDiv");
    introDiv.addEventListener("click", function(){
        changePadding(introDiv)
    });

    let controlDiv = document.getElementById("controlDiv");
    controlDiv.addEventListener("click", function(){
        changePadding(controlDiv)
    });

    let resultDiv = document.getElementById("resultDiv");
    resultDiv.addEventListener("click", function(){
        changePadding(resultDiv)
    });

    function changePadding(divElm) {
        if (divElm.className === "Extra-padding1") {
            divElm.className = "Extra-padding2";
        } else {
            divElm.className = "Extra-padding1";
        }

    }

    
    let table = document.getElementById("tableId");
    console.log(table.style);
    table.addEventListener("hover", function() {
        if (table.style.backgroundColor === "#1ee62f") {
            table.style.backgroundColor = "#0000ff";
        } else {
            table.style.backgroundColor = "#1ee62f";
        }
    })
    }
