const run = document.querySelector('#submit');
const code = document.querySelector('#code');
const output = document.querySelector('#out');

document.body.onload = () => {
    const loadcode = localStorage.getItem("code");
    code.innerHTML = loadcode;
}

run.onclick = async () => {
    localStorage.setItem("code", code.value);
    const options = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({cod: code.value}) // body data type must match "Content-Type" header
    };
    const req = await fetch('/code', options);
    const result = await req.json();
    const outputRes = result.out;
    output.innerHTML = outputRes;
}