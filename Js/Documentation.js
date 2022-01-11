let PageCounter = 0; // Starting Page
let maxCounter = 3; //Max Pages of Document

document.getElementById('PreviousButton').style.visibility = "hidden";
//Navigation Buttons

function PreviousClicked() {
    document.getElementById('NextButton').style.visibility = "visible";

    PageCounter--;
    setPage(PageCounter);

    if(PageCounter === 1)
        document.getElementById('PreviousButton').style.visibility = "hidden";
}

function NextClicked() {
    document.getElementById('PreviousButton').style.visibility = "visible";
    
    PageCounter++;
    setPage(PageCounter);

    if(PageCounter === maxCounter)
        document.getElementById('NextButton').style.visibility = "hidden";
}

//Set Pagination
function setPage (counter) {
    let direction;

    switch(counter){
        case 1 :
            direction = "Intro"
            break
        case 2 :
            direction = "PWA"
            break
        case 3 :
            direction = "Project"
            break
        default :
            break
        }
        
        ContentLoad(direction);
}

//Content load (Add Static Routing here)
function ContentLoad(id) {
        let content;
        
        if (id === "Intro") 
        content = $.get("../Pages/Content/Intro.Html", (data) => {
            $(".ContentLoader").html(data);
            PageCounter = 1;
            document.getElementById('PreviousButton').style.visibility = "hidden";
            document.getElementById('NextButton').style.visibility = "visible";

        })
        else if (id === "PWA")
        content = $.get("../Pages/Content/PWA.Html", (data) => {
            $(".ContentLoader").html(data);
            PageCounter = 2;
            document.getElementById('PreviousButton').style.visibility = "visible";
            document.getElementById('NextButton').style.visibility = "visible";

        })
        else if (id === "Project")
        content = $.get("../Pages/Content/Project.Html", (data) => {
            $(".ContentLoader").html(data);
            PageCounter = 3;
            document.getElementById('NextButton').style.visibility = "hidden";
            document.getElementById('PreviousButton').style.visibility = "visible";
            
        })
    
    $('.ContentView').removeClass('active');
    $('#'+id).toggleClass('active');
    $(".ContentLoader").html(`<div>${content}</div>`);
}