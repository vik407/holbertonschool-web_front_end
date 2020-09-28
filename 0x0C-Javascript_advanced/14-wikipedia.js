const createElement = (data) => {
    const extract = JSON.parse(data).query.pages["21721040"].extract;
    const p = document.createElement("p");
    p.innerText = extract;
    document.body.appendChild(p);
};

const queryWikipedia = (callback) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            callback(xhr.responseText);
        }
    };
    xhr.open(
        "GET",
        "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
    );
    xhr.send("");
};

queryWikipedia(createElement);
