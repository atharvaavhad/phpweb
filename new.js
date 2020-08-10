function search() {
	let inp = document.getElementById('search_inp').value;
	if (inp == 'home') {
		let home = document.getElementById('home');
		let serv = document.getElementById('serv');
		let about = document.getElementById('about');
		let sign = document.getElementById('sign');
		home.style.display = 'block';
		serv.style.display = 'none';
		about.style.display = 'none';
		sign.style.display = 'none';
	}
	else if (inp == 'services') {
		let home = document.getElementById('home');
		let serv = document.getElementById('serv');
		let about = document.getElementById('about');
		let sign = document.getElementById('sign');
		home.style.display = 'none';
		serv.style.display = 'block';
		about.style.display = 'none';
		sign.style.display = 'none';
	}
	else if (inp == 'about') {
		let home = document.getElementById('home');
		let serv = document.getElementById('serv');
		let about = document.getElementById('about');
		let sign = document.getElementById('sign');
		home.style.display = 'none';
		serv.style.display = 'none';
		about.style.display = 'block';
		sign.style.display = 'none';
	}
	else if (inp == 'sign in') {
		let home = document.getElementById('home');
		let serv = document.getElementById('serv');
		let about = document.getElementById('about');
		let sign = document.getElementById('sign');
		home.style.display = 'none';
		serv.style.display = 'none';
		about.style.display = 'none';
		sign.style.display = 'block';
	}
	else {
		console.log("404 not found");
	}
}
function wed() {
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let target = document.getElementById('acont');
	let script =`<div class="onediv"><img src="avatar.png" height="144" width="144"><h1 class="name82">Your acount is create as ${name} <br> and ${email}</h1>`;
	target.innerHTML = script;
}
