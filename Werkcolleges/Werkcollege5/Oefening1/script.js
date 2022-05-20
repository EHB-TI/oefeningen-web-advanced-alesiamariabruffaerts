window.onload = async() => {
    let results = await fetch('data.json');
    let data = await results.json();
    console.log(data);

    let div = document.getElementById('content');
    let p = document.createElement('p');
    p.innerText = `Hallo, ik ben ${data.name}.`;
    div.appendChild(p);

}