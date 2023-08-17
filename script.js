const inputTitle = document.getElementById('input-title');
const inputContent = document.getElementById('input-content');
const outputBox = document.getElementById('app');

function addPost() {
    if(inputTitle.value === '' || inputContent.value === '')
        alert("Please enter the both title and content!")
    else {
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let div = document.createElement('div');
        let title = document.createTextNode(inputTitle.value);
        let content = document.createTextNode(inputContent.value);
        h3.appendChild(title);
        p.appendChild(content);
        div.appendChild(h3);
        div.appendChild(p);
        outputBox.appendChild(div);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        div.appendChild(span);
    }
    inputTitle.value = "";
    inputContent.value = "";
    saveData();
}

outputBox.addEventListener("click", function(e){
   if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("Blogs", outputBox.innerHTML);
}

function showData() {
    outputBox.innerHTML = localStorage.getItem("Blogs");
}

showData();