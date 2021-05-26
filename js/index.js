for (let i = 0; i < 10; i ++) {
    const ele = document.createElement("h1");
    ele.innerHTML = "Hello, world!";
    ele.style.color = "lightblue";
    ele.style.display = "flex";
    ele.style.float = "left";
    document.body.appendChild(ele);
}


function list() {
    var names = ['steve','larry','joe','shirley', 'steph', 'nate', 'rick', 'emily'];
		var ul = document.createElement('ul');
        document.body.appendChild(ul);
        ul.style.border = "2px groove grey";
        ul.style.backgroundColor = "lightgrey";
        ul.style.maxWidth = "400px";
        ul.style.marginLeft = "50px";
        ul.style.fontSize = "20px";
        ul.style.clear = "both";
		names.forEach(function(name){
			var li = document.createElement('li');
			ul.appendChild(li);
            li.innerHTML += name;
		});
}

list();