function siguiente(){
    let sc1 = document.getElementById("screen-1");
    let sc2 = document.getElementById("screen-2");
    let nombre = document.getElementById("nombre").value;
    let mensaje = document.getElementById("hola-x");
    sc1.style.display = 'none';
    sc2.style.display = 'block';
    mensaje.append(` ${nombre}${'!'}`);
}
function tema1(){
	let sc2 = document.getElementById("screen-2");
	let sc3 = document.getElementById("screen-3");
	sc2.style.display = 'none';
    sc3.style.display = 'block';
}
function next1T1(){
	let sc3 = document.getElementById("screen-3");
	let sc4 = document.getElementById("screen-4");
	sc3.style.display = 'none';
    sc4.style.display = 'block';
}
function next2T1(){
	let sc4 = document.getElementById("screen-4");
	let sc5 = document.getElementById("screen-5");
	sc4.style.display = 'none';
    sc5.style.display = 'block';
}
function next3T1(){
	let sc5 = document.getElementById("screen-5");
	let sc9 = document.getElementById("screen-9");
	sc5.style.display = 'none';
	sc9.style.display = 'block';
}
function tema2(){
	let sc2 = document.getElementById("screen-2");
	let sc6 = document.getElementById("screen-6");
	sc2.style.display = 'none';
    sc6.style.display = 'block';
}
function next1T2(){
	let sc6 = document.getElementById("screen-6");
	let sc7 = document.getElementById("screen-7");
	sc6.style.display = 'none';
    sc7.style.display = 'block';
}
function next2T2(){
	let sc7 = document.getElementById("screen-7");
	let sc8 = document.getElementById("screen-8");
	sc7.style.display = 'none';
    sc8.style.display = 'block';
}
function next3T2(){
	let sc8 = document.getElementById("screen-8");
	let sc10 = document.getElementById("screen-10");
	sc8.style.display = 'none';
	sc10.style.display = 'block';
}
function volverJugar1(){
	let sc9 = document.getElementById("screen-9");
	let sc2 = document.getElementById("screen-2");
	sc9.style.display = 'none';
	sc2.style.display = 'block';
}
function volverJugar2(){
	let sc10 = document.getElementById("screen-10");
	let sc2 = document.getElementById("screen-2");
	sc10.style.display = 'none';
	sc2.style.display = 'block';
}

function resultadoTema1() {
	let a1, a2, a3,correct,d1,d2,d3,wrong;
	if (document.getElementById('p131').checked==true){
		a1=1;
		d1=0;
	}
	else {
		a1=0;
		d1=1;

	}
	if (document.getElementById('p221').checked==true) {
		a2=1;
		d2=0;
	}
	else {
		a2=0;
		d2=1;
	}
	if (document.getElementById('p311').checked==true) {
		a3=1;
		d3=0;
	}
	else {
		a3=0;
		d3=1;
		}
	correct=a1+a2+a3;
	wrong=d1+d2+d3;
	alert(`Aciertos: ${correct}`); 
	alert(`Desaciertos: ${wrong}`);
}
function resultadoTema2() {
	let a1, a2, a3,correct,d1,d2,d3,wrong; 
	if (document.getElementById('p112').checked==true){
		a1=1;
		d1=0;
	}
	else {
		a1=0;
		d1=1;

	}
	if (document.getElementById('p232').checked==true) {
		a2=1;
		d2=0;
	}
	else {
		a2=0;
		d2=1;
	}
	if (document.getElementById('p322').checked==true) {
		a3=1;
		d3=0;
	}
	else {
		a3=0;
		d3=1;
		}
	correct=a1+a2+a3;
	wrong=d1+d2+d3;
	alert(`Aciertos: ${correct}`); 
	alert(`Desaciertos: ${wrong}`);
}










	
    




