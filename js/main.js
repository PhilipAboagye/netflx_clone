const btn = document.querySelector("start-btn");
const section = document.querySelector(".content");
const email = document.querySelector("");
const lbl = document.createElement("label");
const img = document.createElement("img");

function printValue(e){
    e.preventDefault();
    section.appendChild(lbl);
    alert(email.value);
    lbl.innerText="Welcome, " + email.value;
    lbl.style.color="red";
    lbl.style.fontSize="40px";
    img.style.width="300px";
    img.src="/images/3d.png";
    section.appendChild(img)

}

function onHover(){
    img.style.width="500px"
}

btn.addEventListener("click",printValue);
img.addEventListener("mouseover",onHover);


function loadDataNow(e){
    const div = document.createElement("div");
    const lbl = document.createElement("label");
    
    const p = document.createElement("p");
    const p2 = document.createElement("p2");

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        p.innerText=json["title"];
        p2.innerText=json["completed"]; 
        lbl.innerText="title of work";
        div.appendChild(lbl);
        div.appendChild(p);
        div.appendChild(p2);
        section.appendChild(div);
      })
      
}
