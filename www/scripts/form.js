function param(object)
{
    var parameters = [];
    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            parameters.push(encodeURI(property + '=' + object[property]));
        }
    }

    return parameters.join('&');
}

function sendRequest() {
    let url = 'http://18.222.90.127:8087/api';
    let parameters = {
        'password': document.getElementById('passwordField').value,
        'Command': 'SystemStats'
    };
    let queryString = param(parameters);

    url += '?' + queryString;

    console.log('Attempting URL ' + url);

    xml = new XMLHttpRequest();
    xml.open("GET", url);
    xml.onreadystatechange = function () {
        if (xml.readyState != 4) { return; }
        if (xml.status != 200) {
            alert("error");
            return;
        }
        document.getElementById("returnField").innerHTML = this.response;
    };
    xml.send(null);
}