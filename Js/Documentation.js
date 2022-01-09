let PageCounter = 1; // Starting Page
let maxCounter = 3; //Max Pages of Document

document.getElementById('PreviousButton').style.visibility = "hidden";
//Navigation Buttons

function PreviousClicked() {
    document.getElementById('NextButton').style.visibility = "visible";

    PageCounter--;

    if(PageCounter === 1)
        document.getElementById('PreviousButton').style.visibility = "hidden";
}

function NextClicked() {
    document.getElementById('PreviousButton').style.visibility = "visible";
    
    PageCounter++;

    if(PageCounter === maxCounter)
        document.getElementById('NextButton').style.visibility = "hidden";
}

//Content load
function ContentLoad(id) {
    let content;

    if (id === "Intro") {
        content = $.get("../Pages/Content/Intro.Html", (data) => {
            $(".ContentLoader").html(data);
        })
    }
    
    $(".ContentLoader").html(`<div>${content}</div>`);
}