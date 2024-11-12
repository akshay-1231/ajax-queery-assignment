"use strict";

document.getElementById("btn").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        console.log("ReadyState:", xmlhttp.readyState);
        console.log("Status:", xmlhttp.status);
        
        if (xmlhttp.readyState == 4 && xmlhttp.status ==     200) {
            var res = JSON.parse(xmlhttp.responseText);

            if (res) {
                var type = res.type;
                var quote = res.quote;
                document.getElementById("quotes").innerHTML = `
                <p>Quote - ${quote}</p>
                <p>Type - ${type}</p>
               `;
            } else {
                document.getElementById("quotes").innerHTML = `<p>No Quotes are available</p>`;
            }
        } else if (xmlhttp.readyState === 4) {
            document.getElementById("quotes").innerHTML = `<p>Unable to fetch data</p>`;
        }
    };

    xmlhttp.open("GET", "", true);
    xmlhttp.send();
});
       