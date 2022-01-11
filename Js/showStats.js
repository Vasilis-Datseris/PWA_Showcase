function showStats() {
    let content = document.getElementsByClassName('window')[0];

    content.innerHTML = `<div class="Main"><div class="Cards" id="firstCard"></div><div class="Cards" id="secondCard"></div></div><div class="Instructions"></div>`;

    fillFirstCard();
    fillSecondCard();

    fillBody();
}

//Show Cards
let submask = "255.255.255.0";
let config;
let ip;


$.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
  console.log( JSON.stringify(data, null, 2));
  ip = data;
});

console.log("ip:"+window.location.hostname + " " + window.location.host + " port: "+window.location.port);

function fillFirstCard () {
    let card = document.getElementById('firstCard');
    card.innerHTML = `LOCAL<ul><li>IP: ${window.location.hostname === "localhost"? 'ipV4' : window.location.hostname}</li><li>Mask: ${submask}</li><li>Port: ${window.location.port === "" ? '80' : window.location.port}</li><li>Result: ${window.location.port === "" ? 'https://ipV4:80' : window.location.host}</li></ul>`;
}
function fillSecondCard () {
    let card = document.getElementById('secondCard');
    card.innerHTML = `GLOBAL<ul><li>IP: ${ip.ipAddress}</li><li>Continent: ${ip.continentName},${ip.continentCode}</li><li>Country: ${ip.countryName},${ip.countryCode}</li><li>State: ${ip.stateProv}</li><li>City: Athens</li></ul>`;
}

//Show Body
function fillBody() {
    let body = document.getElementsByClassName('Instructions')[0];
    let notOnXamp = '<div class="content">Please extract current folder to:<br> Xamp>htdocs<br>Activate Apache & SQL at XAMP<br>Finally, open localhost to browser</div>';
    let OnXamp = '<div class="content">Run ipconfig to CMD<br>Put the Url on Android chrome<br>http://"Ipv4":80<br>Where IpV4 = ipv4 on cmd.</div>';
    body.innerHTML = window.location.port === "" ? OnXamp : notOnXamp;
}