//Load Pages
function TabbarNavigation(id) {
    let Tab;

    if (id === "FirstTab")
        Tab = $.get("Pages/Homepage.html", (data) => {
            $(".Main").html(data);
        });
    else if (id === "SecondTab")
    Tab = $.get("Pages/Documentation.html", (data) => {
        $(".Main").html(data);
    });
    else if (id === "ThirdTab")
    Tab = $.get("Pages/Game.html", (data) => {
        $(".Main").html(data);
    });
    else if (id === "FourthTab")
    Tab = $.get("Pages/Applicationpage.html", (data) => {
        $(".Main").html(data);
    });
    
    $('.TabbarButtons').removeClass('active');
    $('#'+id).toggleClass('active');
    $('.Main').html(`<div>${Tab}</div>`);
}
