let PageCounter = 0; // Starting Page
let maxCounter = 5; //Max Pages of Document

document.getElementById('PreviousButton').style.visibility = "hidden";
//Navigation Buttons

function PreviousClicked() {
    document.getElementById('NextButton').style.visibility = "visible";

    console.log('previous');
    PageCounter--;

    if(PageCounter === maxCounter)
        document.getElementById('PreviousButton').style.visibility = "hidden";
}

function NextClicked() {
    document.getElementById('PreviousButton').style.visibility = "visible";
    console.log('previous');

    PageCounter++;

    if(PageCounter === maxCounter)
        document.getElementById('NextButton').style.visibility = "hidden";
}

//Content load
function ContentLoad(id) {
    let content;

    if (id === "Intro") {
        content = $.get("Content/Intro.Html", (data) => {
            $(".ContentLoader").html(data);
        })
    }

    $(".ContentLoader").html(`<div>${content}</div>`);
}