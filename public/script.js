
function convert() {
    var fromc = document.getElementById("from").value;
    var toc = document.getElementById("to").value;
    var amount = document.getElementById("amount").value;
    var xhr = new XMLHttpRequest();
    var method = "GET";
    var url = "http://localhost:4200/"+fromc+"/"+toc;   
    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var rate = JSON.parse(xhr.responseText);
        document.getElementById("p").innerHTML = Math.round(amount * rate.rate * 100)/100 + " " + toc;
        }
    };
    xhr.send();
}
 