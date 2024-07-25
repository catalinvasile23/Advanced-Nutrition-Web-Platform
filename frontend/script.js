var apiPath = '../caloriiData/php/';
var bg = 'rgba(1, 151, 52, 1)';
var bg_hover = 'rgba(0, 255, 0, 0.25)';

document.addEventListener("DOMContentLoaded", function(){
	generateHeader();
});

async function adjusMain(){
	var main = document.querySelector('main');
	var header = document.querySelector('header');
	
	main.style.marginTop = header.offsetHeight + 20 + 'px';
}

async function generateHeader(f){
	var header = document.querySelector('header');
	
	header.innerHTML = "";
	
	var img = document.createElement('img');
	img.src = "imgs/icon.jpeg";
	
	header.appendChild(img);
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', apiPath + 'getHeaderButtons.php', true);
	
	xhr.onload = function() {
		if (xhr.status == 200) {
			var buttons = JSON.parse(xhr.responseText);
			
			buttons.forEach(function (button) {
				var btn = document.createElement('button');
				btn.id = button.innerHTML;
                btn.type = button.type;
				btn.className = button.classs;
				btn.onclick = function(){eval(button.onclick);};
				btn.innerHTML = button.innerHTML;
				btn.style.display = "none";
				header.appendChild(btn);
            });
		
			$('.header-button').slideToggle("slow");
			
			adjusMain();
			
			if(f != null && f == true)
				generateHomePageUser();
			else
				generateHomePage();
		} 
	};
	
	xhr.send();
}

async function generateHomePage(){
	var main = document.querySelector('main');
	
	main.innerHTML = '';
	
	var divv = document.createElement('div');
	divv.className = "home-page";
	
	var h1 = document.createElement('h1');
	h1.innerHTML = "Descopera platforma noastra"
	divv.appendChild(h1);
	var span = document.createElement('span');
	span.innerHTML = "Pentru o urmarire a nutritiei ideale";
	divv.appendChild(span);
	
	var div = document.createElement('div');
	div.className = 'happy-row';
	
	var div3 = document.createElement('div');
	div3.className = "happy-column";
	
	var img = document.createElement('img');
	img.src = "./imgs/user_icon.png";
	div3.appendChild(img);
	span = document.createElement('span');
	span.innerHTML = 'Peste <span style="color: var(--bg)" id="users-count">0</span> de utilizatori folosesc platforma';
	span.style.color = "black";
	div3.appendChild(span);
	
	div.appendChild(div3);
	
	div3 = document.createElement('div');
	div3.className = "happy-column";
	img = document.createElement('img');
	img.src = "./imgs/food_icon.png";
	div3.appendChild(img);
	span = document.createElement('span');
	span.innerHTML = 'Peste <span style="color: var(--bg)" id="food-count">0</span> de alimente inregistrate zilnic';
	span.style.color = "black";
	div3.appendChild(span);
	div.appendChild(div3);
	
	div3 = document.createElement('div');
	div3.className = "happy-column";
	img = document.createElement('img');
	img.src = "./imgs/recipes_icon.png";
	div3.appendChild(img);
	span = document.createElement('span');
	span.innerHTML = 'Peste <span style="color: var(--bg)" id="recipes-count">0</span> de retete foarte sanatoase';
	span.style.color = "black";
	div3.appendChild(span);
	div.appendChild(div3);
	
	div3 = document.createElement('div');
	div3.className = "happy-column";
	img = document.createElement('img');
	img.src = "./imgs/advices_icon.png";
	div3.appendChild(img);
	span = document.createElement('span');
	span.innerHTML = 'Peste <span style="color: var(--bg)" id="advices-count">0</span> de sfaturi nutritionale utile';
	span.style.color = "black";
	div3.appendChild(span);
	div.appendChild(div3);
	
	
	
	divv.appendChild(div);
	
	
	div = document.createElement('div');
	div.className = "button-row";
	
	var btn = document.createElement('button');
	btn.className = "click-button home-btn";
	btn.id = "account";
	btn.type = "button";
	btn.innerHTML = "Informatii personale";
	btn.style.background = "purple"
	btn.onclick = await async function(){ 
		var imgg = document.getElementById("home-image");
		imgg.style.opacity = 0;
		await delay(500);
		imgg.src = './imgs/account.png'; 
		imgg.style.opacity = 1;
		updateBtns("account");
	};
	div.appendChild(btn);
	
	btn = document.createElement('button');
	btn.className = "click-button home-btn";
	btn.id = "catalog";
	btn.type = "button";
	btn.innerHTML = "Catalog alimente";
	btn.onclick = await async function(){ 
		var imgg = document.getElementById("home-image");
		imgg.style.opacity = 0;
		await delay(500);
		imgg.src = './imgs/catalog.png'; 
		imgg.style.opacity = 1;
		updateBtns("catalog");
	};
	div.appendChild(btn);
	
	btn = document.createElement('button');
	btn.className = "click-button home-btn";
	btn.id = "history";
	btn.type = "button";
	btn.innerHTML = "Istoric alimente";
	btn.onclick = await async function(){ 
		var imgg = document.getElementById("home-image");
		imgg.style.opacity = 0;
		await delay(500);
		imgg.src = './imgs/history.png'; 
		imgg.style.opacity = 1;
		updateBtns("history");
	};
	div.appendChild(btn);
	
	btn = document.createElement('button');
	btn.className = "click-button home-btn";
	btn.id = "recipes";
	btn.type = "button";
	btn.innerHTML = "Retete";
	btn.onclick = await async function(){ 
		var imgg = document.getElementById("home-image");
		imgg.style.opacity = 0;
		await delay(500);
		imgg.src = './imgs/recipes.png'; 
		imgg.style.opacity = 1;
		updateBtns("recipes");
	};
	div.appendChild(btn);
	
	btn = document.createElement('button');
	btn.className = "click-button home-btn";
	btn.id = "advices";
	btn.type = "button";
	btn.innerHTML = "Sfaturi";
	btn.onclick = await async function(){ 
		var imgg = document.getElementById("home-image");
		imgg.style.opacity = 0;
		await delay(500);
		imgg.src = './imgs/advices.png'; 
		imgg.style.opacity = 1;
		updateBtns("advices");
	};
	div.appendChild(btn);
	
	divv.appendChild(div);
	
	img = document.createElement('img');
	img.id = "home-image";
	img.src = "./imgs/account.png";
	divv.appendChild(img);
	
	
	
	main.appendChild(divv);
	
	var buttons = document.querySelectorAll('.header-button');
	
	buttons.forEach(function(x){
		x.style.background = 'white';
	});
	
	document.getElementById("Acasa").style.background = bg_hover;
	
	incrementUsersCount();
	incrementFoodCount();
	incrementRecipesCount();
	incrementAdvicesCount();
}

function delay(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function incrementUsersCount(){
	var uc = document.getElementById("users-count");
	for(var i = 0; i <= 500000; i += 1000){
		uc.innerHTML = i;
		await delay(3);
	}
}

async function incrementFoodCount(){
	var uc = document.getElementById("food-count");
	for(var i = 0; i <= 3000000; i += 6000){
		uc.innerHTML = i;
		await delay(3);
	}
}

async function incrementRecipesCount(){
	var uc = document.getElementById("recipes-count");
	for(var i = 0; i <= 500; i += 1){
		uc.innerHTML = i;
		await delay(3);
	}
}

async function incrementAdvicesCount(){
	var uc = document.getElementById("advices-count");
	for(var i = 0; i <= 500; i += 1){
		uc.innerHTML = i;
		await delay(3);
	}
}

async function updateBtns(id){
	var btns = document.querySelectorAll(".home-btn");
	
	btns.forEach(function(x){
		x.style.background = bg;
	});
	
	document.getElementById(id).style.background = "purple";
}

async function generateHomePageUser(){
	var main = document.querySelector('main');
	
	main.innerHTML = "";
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", apiPath + 'getFoodHistory.php', true);
	xhr.onload = function(){
		if(xhr.status == 200){
			var divv = document.createElement('div');
			divv.className = "home-page";
			var res = JSON.parse(xhr.responseText);
			
			var calories = [];
			var proteins = [];
			var fats = [];
			var carbs = [];
			var sugars = [];
			var fibres = [];
			var datesStart = [];
			var datesEnd = [];
			var currentDate = new Date();
			
			for(var i = 0; i < 90; i++){
				var currentCopy = new Date(currentDate);
				currentCopy.setDate(currentCopy.getDate() - i);
				currentCopy.setHours(0, 0, 0, 0);

				datesStart.push(Math.floor(currentCopy.getTime() / 1000));
				currentCopy.setHours(23, 59, 59, 999);
				datesEnd.push(Math.floor(currentCopy.getTime() / 1000));
				
			}
			
			for(var i = 0; i < 90; i++){
				var sumCalories = 0;
				var sumProteins = 0;
				var sumFats = 0;
				var sumCarbs = 0;
				var sumSugars = 0;
				var sumFibres = 0;
				
				res.forEach(function(x){
					if(x.timestamp >= datesStart[i] && x.timestamp <= datesEnd[i]){
						sumCalories += (x.calories * x.grams / 100);
						sumProteins += (x.protein * x.grams / 100);
						sumFats += (x.fat * x.grams / 100);
						sumCarbs += (x.carb * x.grams / 100);
						sumSugars += (x.sugar * x.grams / 100);
						sumFibres += (x.fibre * x.grams / 100);
					}
				});

				calories.push(sumCalories);
				proteins.push(sumProteins);
				fats.push(sumFats);
				carbs.push(sumCarbs);
				sugars.push(sumSugars);
				fibres.push(sumFibres);
			}
			
			var labels = [];
			
			while(calories[calories.length - 1] == 0)
				calories.pop();
			
			while(proteins[proteins.length - 1] == 0)
				proteins.pop();
			
			while(fats[fats.length - 1] == 0)
				fats.pop();
			
			while(carbs[carbs.length - 1] == 0)
				carbs.pop();
			
			while(sugars[sugars.length - 1] == 0)
				sugars.pop();
			
			while(fibres[fibres.length - 1] == 0)
				fibres.pop();
			
			for(var i = calories.length - 1; i >= 0; i--)
				labels.push(i);
			
			calories = calories.reverse();
			proteins = proteins.reverse();
			fats = fats.reverse();
			carbs = carbs.reverse();
			sugars = sugars.reverse();
			fibres = fibres.reverse();
			
			var data = {
				labels: labels,
			    datasets: [
					{
					    label: 'Ultimele ' + labels.length + ' zile',
					    data: calories,
						backgroundColor: 'yellow'
					}
			    ]
			};
			
			var canvas = document.createElement("canvas");
			divv.appendChild(canvas);
			
			var ctx = canvas.getContext("2d");
			
			new Chart(ctx, {
				type: "line",
				data: data,
				options:{
					responsive: true,
					plugins:{
						legend:{
							position: 'top',
						},
						title:{
							display: true,
							text: 'Raport calorii'
						}
					}
				},
			});	
				
			data = {
				labels: labels,
			    datasets: [
					{
					    label: 'Ultimele ' + labels.length + ' zile',
					    data: proteins,
						backgroundColor: 'blue'
					}
			    ]
			};
			
			canvas = document.createElement("canvas");
			divv.appendChild(canvas);
			
			ctx = canvas.getContext("2d");
			
			new Chart(ctx, {
				type: "line",
				data: data,
				options:{
					responsive: true,
					plugins:{
						legend:{
							position: 'top',
						},
						title:{
							display: true,
							text: 'Raport proteine'
						}
					}
				},
			});	
			
			data = {
				labels: labels,
			    datasets: [
					{
					    label: 'Ultimele ' + labels.length + ' zile',
					    data: fats,
						backgroundColor: 'purple'
					}
			    ]
			};
			
			canvas = document.createElement("canvas");
			divv.appendChild(canvas);
			
			ctx = canvas.getContext("2d");
			
			new Chart(ctx, {
				type: "line",
				data: data,
				options:{
					responsive: true,
					plugins:{
						legend:{
							position: 'top',
						},
						title:{
							display: true,
							text: 'Raport grasimi'
						}
					}
				},
			});	
			
			data = {
				labels: labels,
			    datasets: [
					{
					    label: 'Ultimele ' + labels.length + ' zile',
					    data: carbs,
						backgroundColor: 'orange'
					}
			    ]
			};
			
			canvas = document.createElement("canvas");
			divv.appendChild(canvas);
			
			ctx = canvas.getContext("2d");
			
			new Chart(ctx, {
				type: "line",
				data: data,
				options:{
					responsive: true,
					plugins:{
						legend:{
							position: 'top',
						},
						title:{
							display: true,
							text: 'Raport Carbohidrati'
						}
					}
				},
			});	
				
			data = {
				labels: labels,
			    datasets: [
					{
					    label: 'Ultimele ' + labels.length + ' zile',
					    data: sugars,
						backgroundColor: 'red'
					}
			    ]
			};
			
			canvas = document.createElement("canvas");
			divv.appendChild(canvas);
			
			ctx = canvas.getContext("2d");
			
			new Chart(ctx, {
				type: "line",
				data: data,
				options:{
					responsive: true,
					plugins:{
						legend:{
							position: 'top',
						},
						title:{
							display: true,
							text: 'Raport Zahar'
						}
					}
				},
			});	
				
			data = {
				labels: labels,
			    datasets: [
					{
					    label: 'Ultimele ' + labels.length + ' zile',
					    data: fibres,
						backgroundColor: 'green',
						
					}
			    ]
			};
			
			canvas = document.createElement("canvas");
			divv.appendChild(canvas);
			
			ctx = canvas.getContext("2d");
			
			new Chart(ctx, {
				type: "line",
				data: data,
				options:{
					responsive: true,
					plugins:{
						legend:{
							position: 'top',
						},
						title:{
							display: true,
							text: 'Raport Fibre'
						}
					}
				},
			});	
				
			main.appendChild(divv);
		}
	};
	xhr.send();	
	
	var buttons = document.querySelectorAll('.header-button');
	
	buttons.forEach(function(x){
		x.style.background = 'white';
	});
	
	document.getElementById("Acasa").style.background = bg_hover;
}

//#################################################################### REGISTER PAGE ##############################################

async function generateRegisterPage(){
	var main = document.querySelector('main');
	
	main.innerHTML = "";
	
	var div = document.createElement('div');
	div.className = "registerPage";
	
	var div2 = document.createElement('div');
	div2.className = "registerForm";
	
	var input = document.createElement('input');
	input.type = "text";
	input.placeholder = "Nume...";
	input.id = "firstName";
	div2.appendChild(input);
	
	input = document.createElement('input');
	input.type = "text";
	input.placeholder = "Prenume...";
	input.id = "lastName";
	div2.appendChild(input);
	
	input = document.createElement('input');
	input.type = "text";
	input.placeholder = "Email...";
	input.id = "email";
	input.onkeyup = checkEmailUsed;
	div2.appendChild(input);
	
	input = document.createElement('input');
	input.type = "password";
	input.placeholder = "Parola...";
	input.id = "pass";
	input.onkeyup = checkPassword;
	div2.appendChild(input);
	
	input = document.createElement('input');
	input.type = "password";
	input.placeholder = "Repeta parola...";
	input.id = "repass";
	input.onkeyup = checkRepass;
	div2.appendChild(input);
	
	var div3 = document.createElement('div');
	
	input = document.createElement('input');
	input.type = "checkbox";
	input.id = "policy"
	input.onchange = checkLiftRegisterButton;
	div3.appendChild(input);
	
	var label = document.createElement('label');
	label.htmlFor = "policy";
	label.innerHTML = "Sunt de acord cu politica de confidentialitate";
	div3.appendChild(label);
	
	div2.appendChild(div3);
	
	var span = document.createElement('span');
	span.style.color = "red";
	span.id = 'form-error';
	div2.appendChild(span);
	
	var btn = document.createElement('button');
	btn.type = "button";
	btn.className = "click-button";
	btn.onclick = registerUser;
	btn.innerHTML = "Creeaza cont";
	btn.style.background = 'rgba(0, 0, 0, 0.5)';
	btn.disabled = true;
	btn.id = "registerButton";
	div2.appendChild(btn);
	
	input = document.createElement('input');
	input.type = "hidden"
	input.id = "validateForm";
	input.value = 'false';
	div2.appendChild(input);
	
	div.appendChild(div2);
	
	main.appendChild(div);
	
	var inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
	
	inputs.forEach(function(e){
		e.style.marginLeft= "100%";
		e.style.display = "none";
	});
	
	inputs.forEach(function(e){
		var n = 100;
		e.style.display = "block";
		
		var animationInterval = setInterval(function() {
			e.style.marginLeft = n + "%";
			n--;

			if (n < 0) {
				clearInterval(animationInterval);
			}
		}, 3);
	});
	
	var buttons = document.querySelectorAll('.header-button');
	
	buttons.forEach(function(x){
		x.style.background = 'white';
	});
	
	document.getElementById("Inregistrare").style.background = bg_hover;
}

async function checkEmailUsed(event){
	var email = event.target.value;
	var formError = document.getElementById('form-error');
	var validateForm = document.getElementById('validateForm');
	
	if(!(email.includes('@') && email.includes('.'))){
		formError.innerHTML = 'Email invalid';
		validateForm.value = false;
		return;
	}
	else{
		formError.innerHTML = '';
		validateForm.value = true;

	}
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', apiPath + 'checkEmail.php?email=' + email, true);
	
	xhr.onload = function() {
		if (xhr.status == 200) {
			var res = xhr.responseText;
			if(res == true){
				formError.innerHTML = 'Email deja folosit';
				validateForm.value = false;
			}
			else{
				formError.innerHTML = '';
				validateForm.value = true;
				checkLiftRegisterButton();
			}
		} 
	};
	
	xhr.send();
}

async function checkPassword(event){
	var pass = event.target.value;
	var formError = document.getElementById('form-error');
	var validateForm = document.getElementById('validateForm');
	
	if(pass.length < 6){
		formError.innerHTML = 'Parola este prea scurta';
		validateForm.value = false;
		return;
	}
	else{
		formError.innerHTML = '';
		validateForm.value = true;	
	}
	
	var sl = /[a-z]/.test(pass);
	var bl = /[A-Z]/.test(pass);
	var d = /\d/.test(pass);
	var sc = /[^a-zA-Z\d]/.test(pass);
	
	if(sl == true && bl == true && d == true && sc == true){
		formError.innerHTML = '';
		validateForm.value = true;
		checkLiftRegisterButton();
	}
	else{
		var s = 'Parola nu contine:<br><ul>';
		
		if(sl == false)
			s += '<li>Cel putin o litera mica</li>';
		
		if(bl == false)
			s += '<li>Cel putin o litera mare</li>';
		
		if(d == false)
			s += '<li>Cel putin o cifra</li>';
		
		if(sc == false)
			s += '<li>Cel putin un caracter special</li>';
		
		s += '</ul>';
		
		formError.innerHTML = s;
		validateForm.value = false;
	}
	
	
}

async function checkRepass(event){
	var pass = document.getElementById("pass").value;
	var repass = event.target.value;
	var formError = document.getElementById('form-error');
	var validateForm = document.getElementById('validateForm');
	
	if(pass == repass){
		formError.innerHTML = '';
		validateForm.value = true;
		checkLiftRegisterButton();
	}
	else{
		formError.innerHTML = 'Parolele nu se potrivesc';
		validateForm.value = false;
	}
}


async function checkLiftRegisterButton(){
	var inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
	
	inputs.forEach(function(x){
		if(x.value == "")
			return;
	});
	
	if(document.getElementById("validateForm").value == 'false')
		return;
	
	if(document.getElementById("policy").checked == false)
		return;
	
	var btn = document.getElementById("registerButton");
	
	btn.style.background = bg;
	btn.disabled = false;
}

async function registerUser(){
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var email = document.getElementById("email").value;
	var pass = document.getElementById("pass").value;
	
	encriptPass(pass).then(hashHex => {
		var data = new FormData();
		
		data.append('firstName', firstName);
		data.append('lastName', lastName);
		data.append('email', email);
		data.append('pass', hashHex);
		
		var xhr = new XMLHttpRequest();
		xhr.open('POST', apiPath + 'registerUser.php', false);
		
		xhr.onload = function(){
			if(xhr.status == 200){
				if(xhr.responseText == "OK"){
					generateOkRegisterPage();
				}
			}
		};
		
		xhr.send(data);
	});
}	

async function generateOkRegisterPage(){
	var main = document.querySelector('main');
	
	main.innerHTML = '';
	
	var div = document.createElement('div');
	div.className = "registerPage";
	
	var div2 = document.createElement('div');
	div2.className = "registerForm";
	
	var h1 = document.createElement('h1');
	h1.innerHTML = 'Ai fost inregistrat cu succes';
	h1.style.color = bg;
	
	div2.appendChild(h1);
	
	var btn = document.createElement('button');
	btn.className = 'click-button';
	btn.innerHTML = "Intra in cont";
	btn.onclick = generateLoginPage;
	btn.type = "button";
	
	div2.appendChild(btn);
	
	div.appendChild(div2);
	
	main.appendChild(div);
}

//#################################################################### LOGIN PAGE ##############################################

async function generateLoginPage(){
	var main = document.querySelector('main');
	
	main.innerHTML = '';
	
	var div = document.createElement('div');
	div.className = "registerPage";
	
	var div2 = document.createElement('div');
	div2.className = "registerForm";
		
	var input = document.createElement('input');
	input.type = "text";
	input.placeholder = "Email...";
	input.id = "email";
	div2.appendChild(input);
	
	input = document.createElement('input');
	input.type = "password";
	input.placeholder = "Parola...";
	input.id = "pass";
	div2.appendChild(input);
	
	var span = document.createElement('span');
	span.style.color = "red";
	span.id = 'form-error';
	div2.appendChild(span);
	
	var btn = document.createElement('button');
	btn.type = "button";
	btn.className = "click-button";
	btn.onclick = loginUser;
	btn.innerHTML = "Intra in cont";
	btn.style.background = bg;
	div2.appendChild(btn);
	
	div.appendChild(div2);
	
	main.appendChild(div);
	
	var inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
	
	inputs.forEach(function(e){
		e.style.marginLeft= "100%";
		e.style.display = "none";
	});
	
	inputs.forEach(function(e){
		var n = 100;
		e.style.display = "block";
		
		var animationInterval = setInterval(function() {
			e.style.marginLeft = n + "%";
			n--;

			if (n < 0) {
				clearInterval(animationInterval);
			}
		}, 3);
	});
	
	var buttons = document.querySelectorAll('.header-button');
	
	buttons.forEach(function(x){
		x.style.background = 'white';
	});
	
	document.getElementById("Intra in cont").style.background = bg_hover;
}

async function loginUser(){
	var formError = document.getElementById("form-error");
	var email = document.getElementById("email").value;
	var pass = document.getElementById("pass").value;
	
	encriptPass(pass).then(hashHex => {
		var data = new FormData();
		
		data.append('email', email);
		data.append('pass', hashHex);
		
		var xhr = new XMLHttpRequest();
		xhr.open('POST', apiPath + 'loginUser.php', true);
		
		xhr.onload = function(){
			if(xhr.status == 200){
				if(xhr.responseText == "OK"){
					generateHeader(true);
					adjusMain();
				}
				else{
					formError.innerHTML = "Date de logare invalide";
				}
			}
		};
		
		xhr.send(data);
	});
}

function encriptPass(pass) {
	const msgBuffer = new TextEncoder().encode(pass);
	const hashPromise = crypto.subtle.digest('SHA-256', msgBuffer);

	return new Promise((resolve, reject) => {
		hashPromise.then(hashBuffer => {
		    const hashArray = Array.from(new Uint8Array(hashBuffer));
		    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
		    resolve(hashHex);
		}).catch(error => {
		    reject(error);
		});
	});
}

//#################################################################### ACCOUNT PAGE ##############################################

async function generateAccountPage(){
	var main = document.querySelector('main');
	
	main.innerHTML = '';
	
	var div = document.createElement('div');
	div.className = "account-main-container";
		
	var divv = document.createElement('div');
	divv.className = "account-bmi-container";
	
	var h1 = document.createElement('h1');
	h1.innerHTML = "IMC: ";
	
	var span = document.createElement('span');
	span.id = "BMI";
	h1.appendChild(span);
	
	divv.appendChild(h1);
	div.appendChild(divv);
	
	divv = document.createElement('div');
	divv.className = "account-data-container";

	var div3 = document.createElement('div');
	div3.className = "account-data-container-left";
	div3.id = "account-data-container-left";
	divv.appendChild(div3);
	
	div3 = document.createElement('div');
	div3.className = "account-data-container-right";
	div3.id = "account-data-container-right";
	divv.appendChild(div3);

	div.appendChild(divv);
	main.appendChild(div);
	
	adjusMain();
	
	calculateBMI("BMI");
	populateProfileData("account-data-container-left");
	populateProfileMacros("account-data-container-right");

	var buttons = document.querySelectorAll('.header-button');
	
	buttons.forEach(function(x){
		x.style.background = 'white';
	});
	
	document.getElementById("Contul Meu").style.background = bg_hover;
}

async function calculateBMI(id){
	var bmi = document.getElementById(id);
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", apiPath + 'calculateBMI.php', true);
	
	xhr.onload = function(){
		if(xhr.status == 200){
			bmi.innerHTML = xhr.responseText;
		}
	};
	
	xhr.send();
}

async function populateProfileData(id){
	var dest = document.getElementById(id);
	
	dest.innerHTML = "";
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", apiPath + 'getProfileData.php', true);
	
	xhr.onload = function(){
		if(xhr.status == 200){
			var res = xhr.responseText;
			res = JSON.parse(res);
			
			var div = document.createElement('div');
			div.className = "account-data-row";
			
			var label = document.createElement('label');
			label.htmlFor = 'firstName';
			label.innerHTML = 'Prenume:';
			div.appendChild(label);
			
			var input = document.createElement('input');
			input.type = "text";
			input.value = res.firstName;
			input.id = 'firstName';
			div.appendChild(input);
			
			dest.appendChild(div);
			
			div = document.createElement('div');
			div.className = "account-data-row";
			
			label = document.createElement('label')
			label.htmlFor = 'lastName';
			label.innerHTML = 'Nume:';
			div.appendChild(label);
			
			input = document.createElement('input');
			input.type = 'text';
			input.value = res.lastName;
			input.id = 'lastName';
			div.appendChild(input);
			
			dest.appendChild(div);
			
			div = document.createElement('div');
			div.className = "account-data-row";
			
			label = document.createElement('label')
			label.htmlFor = 'email';
			label.innerHTML = 'Email:';
			div.appendChild(label);
			
			input = document.createElement('input');
			input.type = 'text';
			input.value = res.email;
			input.id = 'email';
			div.appendChild(input);
			
			dest.appendChild(div);
			
			div = document.createElement('div');
			div.className = "account-data-row";
			
			label = document.createElement('label')
			label.htmlFor = 'weight';
			label.innerHTML = 'Greutate (Kg):';
			div.appendChild(label);
			
			input = document.createElement('input');
			input.type = 'text';
			
			if(res.weight == null)
				input.placeholder = "Greutate...";
			else
				input.value = res.weight;
			
			input.id = 'weight';
			div.appendChild(input);
			
			dest.appendChild(div);
			
			div = document.createElement('div');
			div.className = "account-data-row";
			
			label = document.createElement('label')
			label.htmlFor = 'height';
			label.innerHTML = 'Inaltime (cm):';
			div.appendChild(label);
			
			input = document.createElement('input');
			input.type = 'text';
			
			if(res.height == null)
				input.placeholder = "Inaltime...";
			else
				input.value = res.height;
			
			input.id = 'height';
			div.appendChild(input);
			
			dest.appendChild(div);
			
			div = document.createElement('div');
			div.className = "account-data-row";
			
			label = document.createElement('label')
			label.htmlFor = 'age';
			label.innerHTML = 'Varsta (ani):';
			div.appendChild(label);
			
			input = document.createElement('input');
			input.type = 'text';
			
			if(res.age == null)
				input.placeholder = "Varsta...";
			else
				input.value = res.age;
			
			input.id = 'age';
			div.appendChild(input);
			
			dest.appendChild(div);
			
			div = document.createElement('div');
			div.className = "account-data-row";
			
			label = document.createElement('label')
			label.htmlFor = 'gender';
			label.innerHTML = 'Gen:';
			div.appendChild(label);
			
			var sel = document.createElement('select');
			sel.id = "gender";
			
			var opt = document.createElement('option');
			opt.value = 'N/A';
			opt.innerHTML = 'Gen...';
			
			if(res.gender == 'N/A')
				opt.selected = true;
			
			sel.appendChild(opt);
			
			opt = document.createElement('option');
			opt.value = 'man';
			opt.innerHTML = 'Barbat';
			
			if(res.gender == 'man')
				opt.selected = true;
			
			sel.appendChild(opt);
			
			opt = document.createElement('option');
			opt.value = 'woman';
			opt.innerHTML = 'Femeie';
			
			if(res.gender == 'woman')
				opt.selected = true;
			
			sel.appendChild(opt);
			
			div.append(sel);
			
			dest.append(div);
			
			div = document.createElement('div');
			div.className = "account-data-row";
			
			label = document.createElement('label');
			label.innerHTML = "Activitate:";
			label.htmlFor = "activity";
			div.appendChild(label);
			
			sel = document.createElement("select");
			sel.id = "activity";
			
			opt = document.createElement('option');
			opt.value = 1;
			opt.innerHTML = 'Sedentar';
			
			if(res.activity == 1)
				opt.selected = true;
			
			sel.appendChild(opt);
			
			opt = document.createElement('option');
			opt.value = 2;
			opt.innerHTML = 'Usor activ';
			
			if(res.activity == 2)
				opt.selected = true;
			
			sel.appendChild(opt);
			
			opt = document.createElement('option');
			opt.value = 3;
			opt.innerHTML = 'Moderat activ';
			
			if(res.activity == 3)
				opt.selected = true;
			
			sel.appendChild(opt);
			
			opt = document.createElement('option');
			opt.value = 4;
			opt.innerHTML = 'Foarte activ';
			
			if(res.activity == 4)
				opt.selected = true;
			
			sel.appendChild(opt);
			
			opt = document.createElement('option');
			opt.value = 5;
			opt.innerHTML = 'Extrem de activ';
			
			if(res.activity == 5)
				opt.selected = true;
			
			sel.appendChild(opt);
			
			div.appendChild(sel);
			
			dest.appendChild(div);
			
			div = document.createElement('div');
			div.className = "account-data-button";
			
			var btn = document.createElement('button');
			btn.type = "button";
			btn.innerHTML = "Salveaza";
			btn.className = 'click-button';
			btn.onclick = function(){saveProfile(id);};
			
			div.appendChild(btn);
			
			btn = document.createElement('button');
			btn.type = "button";
			btn.innerHTML = "Anuleaza";
			btn.className = 'click-button';
			btn.onclick = function(){populateProfileData(id);};
			
			div.appendChild(btn);
			
			dest.appendChild(div);
			
		}
	};
	
	xhr.send();
}

async function saveProfile(id){
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var email = document.getElementById('email').value;
	var weight = document.getElementById('weight').value;
	var height = document.getElementById('height').value;
	var age = document.getElementById('age').value;
	var gender = document.getElementById('gender').value;
	var activity = document.getElementById('activity').value;
	
	var data = new FormData();
	
	data.append('firstName', firstName);
	data.append('lastName', lastName);
	data.append('email', email);
	data.append('weight', weight);
	data.append('height', height);
	data.append('age', age);
	data.append('gender', gender);
	data.append('activity', activity);
	
	var xhr = new XMLHttpRequest();
	xhr.open('POST', apiPath + 'saveProfile.php', true);
	
	xhr.onload = function(){
		if(xhr.status == 200){
			generateAccountPage();
		}
	};
	
	xhr.send(data);
}

async function populateProfileMacros(id){
	var dest = document.getElementById(id);
	
	dest.innerHTML = "";

	var div = document.createElement('div');
	div.className = 'account-data-row';
	
	var span = document.createElement('span');
	span.innerHTML = 'Calorii zilnice necesare:';
	
	div.appendChild(span);
	
	span = document.createElement('span');
	span.id = "BMR";
	div.appendChild(span);
	
	
	dest.appendChild(div);
	
	calculateBMR("BMR");
}

async function calculateBMR(id){
	var dest = document.getElementById(id);
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', apiPath + 'calculateBMR.php', true);
	
	xhr.onload = function(){
		if(xhr.status == 200){
			dest.innerHTML = xhr.responseText;
			calculateMacros(xhr.responseText);
		}
	};
		
	xhr.send();
}

async function calculateMacros(val){
	var dest = document.getElementById("account-data-container-right");
	var proteinMin = 0.1 * val / 4;
	proteinMin = proteinMin.toFixed(1);
	var proteinMax = 0.35 * val / 4;
	proteinMax = proteinMax.toFixed(1);
	var fatMin = 0.2 * val / 9;
	fatMin = fatMin.toFixed(1);
	var fatMax = 0.35 * val / 9;
	fatMax = fatMax.toFixed(1);
	var carbMin = 0.45 * val / 4;
	carbMin = carbMin.toFixed(1);
	var carbMax = 0.65 * val / 4;
	carbMax = carbMax.toFixed(1);
	var zahRec = 0.05 * val / 4;
	zahRec = zahRec.toFixed(1);
	var zahMax = 0.1 * val / 4;
	zahMax = zahMax.toFixed(1);
	var fibMin = 25;
	
	var div = document.createElement('div');
	div.className = "account-data-row";
	
	var span = document.createElement('span');
	span.innerHTML = "Proteine zilnice necesare:";
	
	div.appendChild(span);
	
	span = document.createElement('span');
	span.innerHTML = "intre " + proteinMin + "g si " + proteinMax + 'g';
	div.appendChild(span);
	
	dest.appendChild(div);
	
	div = document.createElement('div');
	div.className = "account-data-row";
	
	span = document.createElement('span');
	span.innerHTML = "Grasimi zilnice necesare:";
	
	div.appendChild(span);
	
	span = document.createElement('span');
	span.innerHTML = "intre " + fatMin + "g si " + fatMax + 'g';
	div.appendChild(span);
	
	dest.appendChild(div);
	
	div = document.createElement('div');
	div.className = "account-data-row";
	
	span = document.createElement('span');
	span.innerHTML = "Carbohidrati zilnic necesari:";
	
	div.appendChild(span);
	
	span = document.createElement('span');
	span.innerHTML = "intre " + carbMin + "g si " + carbMax + 'g';
	div.appendChild(span);
	
	dest.appendChild(div);
	
	div = document.createElement('div');
	div.className = "account-data-row";
	
	span = document.createElement('span');
	span.innerHTML = "Zaharuri zilnice maxime:";
	
	div.appendChild(span);
	
	span = document.createElement('span');
	span.innerHTML = "sub " + zahRec + "g si maxim " + zahMax + 'g';
	div.appendChild(span);
	
	dest.appendChild(div);
	
	div = document.createElement('div');
	div.className = "account-data-row";
	
	span = document.createElement('span');
	span.innerHTML = "Fibre minime:";
	div.appendChild(span);
	span = document.createElement('span');
	span.innerHTML = "cel putin " + fibMin + "g";
	div.appendChild(span);
	dest.appendChild(div);
}

//#################################################################### CATALOG PAGE ##############################################

async function generateCatalogPage(){
	var main = document.querySelector('main');
	
	main.innerHTML = "";
	
	var divv = document.createElement('div');
	divv.className = "catalog-page-container";
	
	var left = document.createElement('div');
	left.className = "catalog-page-container-left";
	left.id = "catalog-page-container-left";
	
	var div = document.createElement('div');
	div.className = 'catalog-page-row';
	
	var label = document.createElement('label');
	label.innerHTML = "Valori pentru fiecare 100g de aliment";
	div.appendChild(label);
	left.appendChild(div);
	
	
	div = document.createElement('div');
	div.className = 'catalog-page-row';
	
	label = document.createElement('label');
	label.innerHTML = "Nume aliment:";
	label.htmlFor = "name";
	div.appendChild(label);
	
	var input = document.createElement('input');
	input.type = "text";
	input.placeholder = "Nume...";
	input.id = "name";
	div.appendChild(input);
	
	left.append(div);
	
	div = document.createElement('div');
	div.className = 'catalog-page-row';
	
	label = document.createElement('label');
	label.innerHTML = "Calorii aliment (Kcal):";
	label.htmlFor = "calories";
	div.appendChild(label);
	
	input = document.createElement('input');
	input.type = "text";
	input.placeholder = "Calorii (Kcal)...";
	input.id = "calories";
	div.appendChild(input);
	
	left.append(div);
	
	div = document.createElement('div');
	div.className = 'catalog-page-row';
	
	label = document.createElement('label');
	label.innerHTML = "Proteine aliment (g):";
	label.htmlFor = "protein";
	div.appendChild(label);
	
	input = document.createElement('input');
	input.type = "text";
	input.placeholder = "Proteine (g)...";
	input.id = "protein";
	div.appendChild(input);
	
	left.append(div);
	
	div = document.createElement('div');
	div.className = 'catalog-page-row';
	
	label = document.createElement('label');
	label.innerHTML = "Grasimi aliment (g):";
	label.htmlFor = "fat";
	div.appendChild(label);
	
	input = document.createElement('input');
	input.type = "text";
	input.placeholder = "Grasimi (g)...";
	input.id = "fat";
	div.appendChild(input);
	
	left.append(div);

	div = document.createElement('div');
	div.className = 'catalog-page-row';
	
	label = document.createElement('label');
	label.innerHTML = "Carbohidrati aliment (g):";
	label.htmlFor = "carb";
	div.appendChild(label);
	
	input = document.createElement('input');
	input.type = "text";
	input.placeholder = "Carbohidrati (g)...";
	input.id = "carb";
	div.appendChild(input);
	
	left.append(div);
	
	div = document.createElement('div');
	div.className = 'catalog-page-row';
	
	label = document.createElement('label');
	label.innerHTML = "Din care zaharuri (g):";
	label.htmlFor = "sugar";
	div.appendChild(label);
	
	input = document.createElement('input');
	input.type = "text";
	input.placeholder = "Zaharuri (g)...";
	input.id = "sugar";
	div.appendChild(input);
	
	left.append(div);
	
	div = document.createElement('div');
	div.className = 'catalog-page-row';
	
	label = document.createElement('label');
	label.innerHTML = "Fibre (g):";
	label.htmlFor = "fibre";
	div.appendChild(label);
	
	input = document.createElement('input');
	input.type = "text";
	input.placeholder = "Fibre(g)...";
	input.id = "fibre";
	div.appendChild(input);
	
	left.append(div);
	
	div = document.createElement('div');
	div.className = "catalog-page-button";
	
	var btn = document.createElement('button');
	btn.type = 'button';
	btn.innerHTML = 'Salveaza';
	btn.onclick = saveFood;
	btn.className = 'click-button';	
	div.appendChild(btn);
	
	btn = document.createElement('button');
	btn.type = 'button';
	btn.innerHTML = 'Anuleaza';
	btn.onclick = generateCatalogPage;
	btn.className = 'click-button';	
	div.appendChild(btn);
	left.appendChild(div);
	
	var right = document.createElement('div');
	right.className = "catalog-page-container-right";
	right.id = "catalog-page-container-right";
	
	divv.appendChild(left);
	divv.appendChild(right);
	main.appendChild(divv);
	
	var buttons = document.querySelectorAll('.header-button');
	
	buttons.forEach(function(x){
		x.style.background = 'white';
	});
	
	document.getElementById("Catalog Alimente").style.background = bg_hover;
	
	populateCatalogFoods();
}

async function saveFood(){
	var name = document.getElementById("name").value;
	var calories = document.getElementById("calories").value;
	var protein = document.getElementById("protein").value;
	var fat = document.getElementById("fat").value;
	var carb = document.getElementById("carb").value;
	var sugar = document.getElementById("sugar").value;
	var fibre = document.getElementById("fibre").value;
	
	var data = new FormData();
	
	data.append('name', name);
	data.append('calories', calories);
	data.append('protein', protein);
	data.append('fat', fat);
	data.append('carb', carb);
	data.append('sugar', sugar);
	data.append('fibre', fibre);
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", apiPath + 'saveFood.php', true);
	xhr.onload = function(){
		if(xhr.status == 200){
			generateCatalogPage();
		}
	};		
	xhr.send(data);
}

async function populateCatalogFoods(){
	var dest = document.getElementById("catalog-page-container-right");
	
	dest.innerHTML = "";
	
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', apiPath + 'getFoods.php', true);
	xhr.onload = function(){
		var res = xhr.responseText;
		
		res = JSON.parse(res);
		
		var table = document.createElement('table');
		
		var tr = document.createElement('tr');
		var th = document.createElement('th');
		th.innerHTML = "Nume";
		tr.appendChild(th);
		th = document.createElement('th');
		th.innerHTML = "Calorii(Kcal)";
		tr.appendChild(th);
		th = document.createElement('th');
		th.innerHTML = "Proteine(g)";
		tr.appendChild(th);
		th = document.createElement('th');
		th.innerHTML = "Grasimi(g)";
		tr.appendChild(th);
		th = document.createElement('th');
		th.innerHTML = "Carbohidrati(g)";
		tr.appendChild(th);
		th = document.createElement('th');
		th.innerHTML = "Zahar(g)";
		tr.appendChild(th);
		th = document.createElement('th');
		th.innerHTML = "Fibre(g)";
		tr.appendChild(th);
		table.appendChild(tr);
		
		res.forEach(function(x){
			tr = document.createElement('tr');
			var td = document.createElement('td');
			td.innerHTML = x.name;
			tr.appendChild(td);
			td = document.createElement('td');
			td.innerHTML = x.calories;
			tr.appendChild(td);
			td = document.createElement('td');
			td.innerHTML = x.protein;
			tr.appendChild(td);
			td = document.createElement('td');
			td.innerHTML = x.fat;
			tr.appendChild(td);
			td = document.createElement('td');
			td.innerHTML = x.carb;
			tr.appendChild(td);
			td = document.createElement('td');
			td.innerHTML = x.sugar;
			tr.appendChild(td);
			td = document.createElement('td');
			td.innerHTML = x.fibre;
			tr.appendChild(td);
			table.appendChild(tr);
		});
		
		dest.appendChild(table);
	}
	xhr.send();
}

//############################################################## FOOD HISTORY PAGE ##############################################

async function generateFoodHistory(){
	var main = document.querySelector('main');
	
	main.innerHTML = "";
	
	var divv = document.createElement("div");
	divv.className = "food-history-page-container";
	
	var sel = document.createElement('select');
	sel.id = "period"
	sel.onchange = function(){
		showFoodHistoryTable();
		showFoodHistoryGraph();
	};
	
	var opt = document.createElement('option');
	opt.value = "today"
	opt.innerHTML = "Ziua curenta";
	sel.appendChild(opt);
	
	opt = document.createElement('option');
	opt.value = "week"
	opt.innerHTML = "Saptamana curenta";
	sel.appendChild(opt);
	
	opt = document.createElement('option');
	opt.value = "month"
	opt.innerHTML = "Luna curenta";
	sel.appendChild(opt);
	
	opt = document.createElement('option');
	opt.value = "year"
	opt.innerHTML = "Anul curenta";
	sel.appendChild(opt);
	
	opt = document.createElement('option');
	opt.value = "all"
	opt.innerHTML = "Toata perioada";
	sel.appendChild(opt);
	
	divv.appendChild(sel);
	
	var div3 = document.createElement('div');
	div3.className = "food-history-page-container-lr";
	
	
	var div = document.createElement('div');
	div.className = "food-history-page-container-left";
	div.id = "food-history-page-container-left";
	
	var div4 = document.createElement('div');
	div4.className = "food-history-page-container-left-input";
	div4.id = "food-history-page-container-left-input";
	div.appendChild(div4);
	
	div4 = document.createElement('div');
	div4.className = "food-history-page-container-left-history";
	div4.id = "food-history-page-container-left-history";
	div.appendChild(div4);
	
	div3.appendChild(div);
	
	div = document.createElement('div');
	div.className = "food-history-page-container-right";
	div.id = "food-history-page-container-right";
	div3.appendChild(div);
	
	divv.appendChild(div3);
	
	main.appendChild(divv);
	
	showFoodHistoryTable();
	showFoodHistoryGraph();
	generateFoodHistoryLeft();
	
	var buttons = document.querySelectorAll('.header-button');
	
	buttons.forEach(function(x){
		x.style.background = 'white';
	});
	
	document.getElementById("Istoric Alimentar").style.background = bg_hover;
}

async function generateFoodHistoryLeft(){
	var dest = document.getElementById("food-history-page-container-left-input");
	
	dest.innerHTML = "";
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", apiPath + "getFoods.php", true);
	xhr.onload = function() {
		if(xhr.status == 200){
			var res = xhr.responseText;
			res = JSON.parse(res);
			
			var input = document.createElement('input');
			input.type = "text";
			input.onkeyup = filterOptions;
			input.placeholder = "Filtru...";
			dest.appendChild(input);
			
			var sel = document.createElement('select');
			sel.id = "food-type";
			
			res.forEach(function(x){
				var opt = document.createElement("option");
				opt.value = x.id;
				opt.innerHTML = x.name;
				sel.appendChild(opt);
				opt.onkeydown = filterOptions;
			});
			
			dest.appendChild(sel);
			
			var label = document.createElement("label");
			label.innerHTML = "Grame:"
			label.htmlFor = "grams";
			dest.appendChild(label);
			
			var input = document.createElement("input");
			input.type = "number";
			input.id = "grams";
			dest.appendChild(input);
			
			var btn = document.createElement("button");
			btn.type = "button";
			btn.innerHTML = "Adauga";
			btn.className = "click-button"
			btn.onclick = addFoodHistory;
			dest.appendChild(btn);
			
		}
	};
	xhr.send();
	
}

async function filterOptions(event){
	var word = event.target.value;
	
	var options = document.querySelectorAll("option");
	
	options.forEach(function(x){
		if(x.innerHTML.toLowerCase().includes(word))
			x.style.display = "block";
		else
			x.style.display = "none";
	});
}

async function addFoodHistory(){
	var id = document.getElementById("food-type").value;
	var grams = document.getElementById("grams").value;
	
	if(grams == "")
		return;
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", apiPath + 'addFoodHistory.php?idFood=' + id + '&grams=' + grams, true);
	xhr.onload = function(){
		if(xhr.status == 200){
			showFoodHistoryTable();
			showFoodHistoryGraph();
		}
	};
	xhr.send();
}

function getSqlTimestamp(){
	var period = document.getElementById("period").value;
	
	var sql = "";
	
	if(period == "today"){
		var today = new Date();
		today.setHours(0, 0, 0, 0);
		today = today.getTime() / 1000;
		
		sql = "AND timestamp > " + today;
	}
	else if(period == "week"){
		var date = new Date();
		date.setHours(0, 0, 0, 0);
		var week = new Date(date);		
		week.setDate(date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1));	
		week = week.getTime() / 1000;
		
		sql = "AND timestamp > " + week;
	}
	else if(period == "month"){
		var date = new Date();
		date.setHours(0, 0, 0, 0);
		var month = new Date(date.getFullYear(), date.getMonth(), 1);
		month.setHours(0, 0, 0, 0);
		month = month.getTime() / 1000;
		
		sql = "AND timestamp > " + month;
	}
	else if(period == "year"){
		var date = new Date();
		date.setHours(0, 0, 0, 0);
		var year = new Date(date.getFullYear(), 0, 1);
		year.setHours(0, 0, 0, 0);
		year = year.getTime() / 1000;
		
		sql = "AND timestamp > " + year;
	}
	
	return sql;
}

async function showFoodHistoryTable(){
	var dest = document.getElementById("food-history-page-container-left-history");
	
	dest.innerHTML = "";
	
	var sql = getSqlTimestamp();
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", apiPath + "getFoodHistory.php?and=" + sql, true);
	xhr.onload = function(){
		if(xhr.status == 200){
			var res = xhr.responseText;
			res = JSON.parse(res);
			
			var table = document.createElement('table');
		
			var tr = document.createElement('tr');
			var th = document.createElement('th');
			th.innerHTML = "Nume";
			tr.appendChild(th);
			th = document.createElement('th');
			th.innerHTML = "Cantitate(g)";
			tr.appendChild(th);
			th = document.createElement('th');
			th.innerHTML = "Calorii(Kcal)";
			tr.appendChild(th);
			th = document.createElement('th');
			th.innerHTML = "Proteine(g)";
			tr.appendChild(th);
			th = document.createElement('th');
			th.innerHTML = "Grasimi(g)";
			tr.appendChild(th);
			th = document.createElement('th');
			th.innerHTML = "Carbohidrati(g)";
			tr.appendChild(th);
			th = document.createElement('th');
			th.innerHTML = "Zahar(g)";
			tr.appendChild(th);
			th = document.createElement('th');
			th.innerHTML = "Fibre(g)";
			tr.appendChild(th);
			table.appendChild(tr);
			
			res.forEach(function(x){
				tr = document.createElement('tr');
				var td = document.createElement('td');
				td.innerHTML = x.name;
				tr.appendChild(td);
				td = document.createElement('td');
				td.innerHTML = x.grams;
				tr.appendChild(td);
				td = document.createElement('td');
				td.innerHTML = x.calories;
				tr.appendChild(td);
				td = document.createElement('td');
				td.innerHTML = x.protein;
				tr.appendChild(td);
				td = document.createElement('td');
				td.innerHTML = x.fat;
				tr.appendChild(td);
				td = document.createElement('td');
				td.innerHTML = x.carb;
				tr.appendChild(td);
				td = document.createElement('td');
				td.innerHTML = x.sugar;
				tr.appendChild(td);
				td = document.createElement('td');
				td.innerHTML = x.fibre;
				tr.appendChild(td);
				table.appendChild(tr);
			});
		
			dest.appendChild(table);
		}
	};
	xhr.send();
}

async function showFoodHistoryGraph(){
	var dest = document.getElementById("food-history-page-container-right");
	dest.innerHTML = "";
	
	var period = document.getElementById("period").value;
	var bmr = 0;
	var data = null;
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", apiPath + 'calculateBMR.php', false);
	xhr.onload = function(){
		if(xhr.status == 200){
			bmr = xhr.responseText;
		}
	};
	xhr.send();
	
	var sql = getSqlTimestamp();
	
	xhr.open("GET", apiPath + 'getFoodHistory.php?and=' + sql, false);
	xhr.onload = function(){
		if(xhr.status == 200){
			data = JSON.parse(xhr.responseText);
		}
	}
	xhr.send();
	
	var neededCalories = bmr;
	var neededFibre = 25;
	var timeNow = Date.now() / 1000;
	var timeOldest = data[data.length - 1].timestamp;
	var days = timeNow - timeOldest; // secconds
	days /= 60;//minutes
	days /= 60;//hours
	days /= 24;//days;
	days = Math.floor(days);
	days += 1;
	
	neededCalories *= days;
	neededFibre * days;
	
	var totalCaloriesConsumed = 0;
	var totalProteinConsumed = 0;
	var totalFatConsumed = 0;
	var totalCarbConsumed = 0;
	var totalSugarConsumed = 0;
	var totalFibreConsumed = 0;
		
	data.forEach(function(x){
		totalCaloriesConsumed += x.calories * x.grams / 100;
		totalProteinConsumed += x.protein * x.grams / 100;
		totalFatConsumed += x.fat * x.grams / 100;
		totalCarbConsumed += x.carb * x.grams / 100;
		totalSugarConsumed += x.sugar * x.grams / 100;
		totalFibreConsumed += x.fibre * x.grams / 100;
	});
		
	var canvas = document.createElement("canvas");
	dest.appendChild(canvas);
	
	var remainingCalories = neededCalories - totalCaloriesConsumed;
	var prcTotal = totalCaloriesConsumed / neededCalories * 100;
	prcTotal = prcTotal.toFixed(2);
	var prcRemaining = remainingCalories / neededCalories * 100;
	prcRemaining = prcRemaining.toFixed(2);
	
	var data = {
		labels: ['Raport calorii'],
		datasets:[
		{
			label: "Calorii ramase [Kcal] (" + prcRemaining + "%)",
			data: [remainingCalories],
			backgroundColor: "red",
		},
		{
			label: "Calorii consumate [Kcal] (" + prcTotal + "%)",
			data: [totalCaloriesConsumed],
			backgroundColor: "orange",
		},
		{
			label: "Indice referinta [Kcal]",
			data: [neededCalories],
			backgroundColor: "green",
		},
		
		]
	};
	
	var ctx = canvas.getContext("2d");
	
	new Chart(ctx, {
		type: "bar",
		data: data,
		options:{
			responsive: true,
			plugins:{
				legend:{
					position: 'top',
				},
				title:{
					display: true,
					text: 'Raport calorii'
				}
			}
		},
	});

	var minNeededProtein = 0.1 * bmr / 4;
	minNeededProtein = minNeededProtein.toFixed(2);
	var maxNeededProtein = 0.35 * bmr / 4;
	maxNeededProtein = maxNeededProtein.toFixed(2);
	totalProteinConsumed = totalProteinConsumed.toFixed(2);
	var prcProtein = totalProteinConsumed / maxNeededProtein * 100;
	prcProtein = prcProtein.toFixed(2);
	
	data = {
		labels: ['Raport proteine'],
		datasets:[
		{
			label: "Proteine minim [g]",
			data: [minNeededProtein],
			backgroundColor: "red",
		},
		{
			label: "Proteine consumate [g] (" + prcProtein + "%)",
			data: [totalProteinConsumed],
			backgroundColor: "orange",
		},
		{
			label: "Proteine maxim [g]",
			data: [maxNeededProtein],
			backgroundColor: "green",
		}
		]
	};
	
	canvas = document.createElement("canvas");
	dest.appendChild(canvas);

	ctx = canvas.getContext("2d");
	
	new Chart(ctx, {
		type: "bar",
		data: data,
		options:{
			responsive: true,
			plugins:{
				legend:{
					position: 'top',
				},
				title:{
					display: true,
					text: 'Raport proteine'
				}
			}
		},
	});
	
	var minNeededFat = (bmr * 0.2 / 9).toFixed(2);
	var maxNeededFat = (bmr * 0.35 / 9).toFixed(2);
	var prcFat = (totalFatConsumed / maxNeededFat * 100).toFixed(2);
	
	data = {
		labels: ['Raport grasimi'],
		datasets:[
		{
			label: "Grasimi minim [g]",
			data: [minNeededFat],
			backgroundColor: "red",
		},
		{
			label: "Grasimi consumate [g] (" + prcFat + "%)",
			data: [totalFatConsumed],
			backgroundColor: "orange",
		},
		{
			label: "Grasimi maxim [g]",
			data: [maxNeededFat],
			backgroundColor: "green",
		}
		]
	};
	
	canvas = document.createElement("canvas");
	dest.appendChild(canvas);

	ctx = canvas.getContext("2d");
	
	new Chart(ctx, {
		type: "bar",
		data: data,
		options:{
			responsive: true,
			plugins:{
				legend:{
					position: 'top',
				},
				title:{
					display: true,
					text: 'Raport grasimi'
				}
			}
		},
	});
	
	var minNeededCarb = (bmr * 0.45 / 4).toFixed(2);
	var maxNeededCarb = (bmr * 0.65 / 4).toFixed(2);
	var prcCarb = (totalCarbConsumed / maxNeededCarb * 100).toFixed(2);
	
	data = {
		labels: ['Raport carbohidrati'],
		datasets:[
		{
			label: "Carbohidrati minim [g]",
			data: [minNeededCarb],
			backgroundColor: "red",
		},
		{
			label: "Carbohidrati consumati [g] (" + prcCarb + "%)",
			data: [totalCarbConsumed],
			backgroundColor: "orange",
		},
		{
			label: "Carbohidrati maxim [g]",
			data: [maxNeededCarb],
			backgroundColor: "green",
		}
		]
	};
	
	canvas = document.createElement("canvas");
	dest.appendChild(canvas);

	ctx = canvas.getContext("2d");
	
	new Chart(ctx, {
		type: "bar",
		data: data,
		options:{
			responsive: true,
			plugins:{
				legend:{
					position: 'top',
				},
				title:{
					display: true,
					text: 'Raport carbohidrati'
				}
			}
		},
	});
	
	var underNeededSugar = (bmr * 0.05 / 4).toFixed(2);
	var maxNeededSugar = (bmr * 0.1 / 4).toFixed(2);
	var prcSugar = (totalSugarConsumed / underNeededSugar * 100).toFixed(2);
	
	data = {
		labels: ['Raport zahar'],
		datasets:[
		{
			label: "Zahar consumat [g] (" + prcSugar + "%)",
			data: [totalSugarConsumed],
			backgroundColor: "orange",
		},
		{
			label: "Zahar maxim [g]",
			data: [underNeededSugar],
			backgroundColor: "green",
		},
		{
			label: "Zahar maxim absolut [g]",
			data: [maxNeededSugar],
			backgroundColor: "red",
		}
		]
	};
	
	canvas = document.createElement("canvas");
	dest.appendChild(canvas);

	ctx = canvas.getContext("2d");
	
	new Chart(ctx, {
		type: "bar",
		data: data,
		options:{
			responsive: true,
			plugins:{
				legend:{
					position: 'top',
				},
				title:{
					display: true,
					text: 'Raport zahar'
				}
			}
		},
	});
	
	neededFibre = neededFibre.toFixed(2);
	var prcFibre = (totalFibreConsumed / neededFibre * 100).toFixed(2);
	
	data = {
		labels: ['Raport fibre'],
		datasets:[
		{
			label: "Fibre consumate [g] (" + prcFibre + "%)",
			data: [totalFibreConsumed],
			backgroundColor: "green",
		},
		{
			label: "Fibre minim [g]",
			data: [neededFibre],
			backgroundColor: "orange",
		}		
		]
	};
	
	canvas = document.createElement("canvas");
	dest.appendChild(canvas);

	ctx = canvas.getContext("2d");
	
	new Chart(ctx, {
		type: "bar",
		data: data,
		options:{
			responsive: true,
			plugins:{
				legend:{
					position: 'top',
				},
				title:{
					display: true,
					text: 'Raport fibre'
				}
			}
		},
	});
}

//############################################################## FOOD RECEPIES PAGE ##############################################

async function generateRecipesPage(){
	var main = document.querySelector("main");
	main.innerHTML = "";
	
	var divv = document.createElement("div");
	divv.className = "recipes-page";
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", apiPath + "getRecipes.php", true);
	xhr.onload = function(){
		if(xhr.status == 200){
			var res = JSON.parse(xhr.responseText);
			
			res.forEach(function(x){
				addRecipe(x);
			});
		}
	};
	xhr.send();
	
	main.appendChild(divv);
	
	var buttons = document.querySelectorAll('.header-button');
	
	buttons.forEach(function(x){
		x.style.background = 'white';
	});
	
	document.getElementById("Retete").style.background = bg_hover;
}

function addRecipe(rec){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", apiPath + 'getRecipeData.php?idRecipe=' + rec.id, true);
	xhr.onload = function(){
		if(xhr.status == 200){
			var divv = document.createElement("div");
			divv.className = "recipe";
			
			var res = JSON.parse(xhr.responseText);
			
			var totalCalories = 0;
			var totalProtein = 0;
			var totalFat = 0;
			var totalCarb = 0;
			var totalSugar = 0;
			var totalFibre = 0;
			
			res.forEach(function(x){
				totalCalories += x.grams * x.calories / 100;
				totalProtein += x.grams * x.protein / 100;
				totalFat += x.grams * x.fat / 100;
				totalCarb += x.grams * x.carb / 100;
				totalSugar += x.grams * x.sugar / 100;
				totalFibre += x.grams * x.fibre / 100;
			});
			
			totalCalories = totalCalories.toFixed(2);
			totalProtein = totalProtein.toFixed(2);
			totalFat = totalFat.toFixed(2);
			totalCarb = totalCarb.toFixed(2);
			totalSugar = totalSugar.toFixed(2);
			totalFibre = totalFibre.toFixed(2);
			
			
			var div = document.createElement('div');
			div.className = "recipe-left";
			
			var img = document.createElement('img');
			img.src = '.' + rec.img;
			div.appendChild(img);
			
			var data = {
				labels: ['Proteine [g]', 'Grasimi [g]', 'Carbohidrati [g]', 'Zahar [g]', 'Fibre [g]'],
				datasets:[
					{
						data: [totalProtein, totalFat, totalCarb, totalSugar, totalFibre],
						backgroundColor: ['green', 'yellow', 'orange', 'red', 'blue'],
					}
				]				
			}
			
			var canvas = document.createElement('canvas');
			div.appendChild(canvas);
			
			ctx = canvas.getContext('2d');
			
			new Chart(ctx, {
				type: "doughnut",
				data: data,
				options:{
					responsive: true,
					plugins:{
						legend:{
							position: 'bottom',
						},
						title:{
							display: true,
							text: rec.title
						}
					}
				},
			});
					
			
			divv.appendChild(div);
			div = document.createElement('div');
			div.className = "recipe-right";
			
			var h1 = document.createElement('h1');
			h1.innerHTML = rec.title;
			div.appendChild(h1);	

			var div3 = document.createElement('div');
			div3.style.display = "flex";
			
			var span = document.createElement('span');
			span.innerHTML = "Total calorii: " + totalCalories;
			div3.appendChild(span);
			
			span = document.createElement('span');
			span.innerHTML = "Timp de preparare: " + rec.time + "minute";
			div3.appendChild(span);
			
			span = document.createElement('span');
			span.innerHTML = "Dificultate: " + rec.difficulty + "/10";
			div3.appendChild(span);
			
			div.appendChild(div3);
			
			span = document.createElement('span');
			span.style.flex = "0";
			span.style.marginTop = "1rem";
			span.innerHTML = "Ingrediente:";
			div.appendChild(span);
			
			var ul = document.createElement('ul');
			ul.style.marginLeft = "1rem";
			
			res.forEach(function(x){
				var li = document.createElement('li');
				li.innerHTML = '[' + x.grams + 'g] - ' + x.name;
				ul.appendChild(li);
			});
			
			div.appendChild(ul);
			
			var ol = document.createElement('ol');
			ol.innerHTML = rec.description;
			div.appendChild(ol);
			
			var btn = document.createElement("button");
			btn.type = "button";
			btn.id = rec.id;
			btn.className = "click-button";
			btn.innerHTML = "Adauga la istoricul alimentar";
			btn.onclick = addRecipeToHistory;
			div.appendChild(btn);
			
			divv.appendChild(div);
			document.querySelector(".recipes-page").appendChild(divv);
		}
	};
	xhr.send();
}

async function addRecipeToHistory(event){
	var id = event.target.id;
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", apiPath + 'addRecipeToHistory.php?id=' + id, true);
	xhr.send();
}

//############################################################## ADVICES PAGE ##############################################

async function generateAdvicePage(){
	var main = document.querySelector('main');
	main.innerHTML = "";
	
	var divv = document.createElement('div');	
	divv.className = "advice-page";
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", apiPath + 'getAdvices.php', true);
	xhr.onload = function(){
		var res = JSON.parse(xhr.responseText);
		
		res.forEach(function(x){	
			var div = document.createElement('div');
			div.className = "advice";
			var img = document.createElement('img');
			img.src = '.' + x.img;
			div.appendChild(img);
			var span = document.createElement('span');
			span.innerHTML = x.title;
			div.appendChild(span);
			var p = document.createElement('p');
			p.innerHTML = x.description;
			div.appendChild(p);
			divv.appendChild(div);
		});
		
		main.appendChild(divv);
	};
	xhr.send();
	
	var buttons = document.querySelectorAll('.header-button');
	
	buttons.forEach(function(x){
		x.style.background = 'white';
	});
	
	document.getElementById("Sfaturi").style.background = bg_hover;
}

async function logOut(){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", apiPath + "logOut.php", true);
	xhr.onload = function(){
		if(xhr.status == 200){
			generateHeader();
		}
	};
	xhr.send();
}