var scr1,scr2,maxscr,v;

scr1=0; scr2=0; maxscr=5; v=0;

var mxscr_inp = document.getElementById("MxScr_inp");
var p1_btn = document.getElementById("pls1");
var p2_btn = document.getElementById("pls2");
var p1_scr = document.getElementById("P1");
var p2_scr = document.getElementById("P2");
var reset_btn = document.getElementById("reset");

function Updt() {
	maxscr = Number(mxscr_inp.value);
	document.getElementById("mx_scr").textContent = maxscr.toString();
}

function Reset() {
	scr1=0; scr2=0;
	p1_scr.textContent = 0;
	p2_scr.textContent = 0;
	if (v===1) {P1.classList.toggle("Victory");}
	if (v===2) {P2.classList.toggle("Victory");}
	v = 0;
}

function Add1() {
	if (v!==0) return;
	if (scr1<maxscr) {
		++scr1;
		p1_scr.textContent = scr1;
		if (scr1==maxscr) {
			v = 1;
			P1.classList.toggle("Victory");
		}
	}
}

function Add2() {
	if (v!==0) return;
	if (scr2<maxscr) {
		++scr2;
		p2_scr.textContent = scr2;
		if (scr2==maxscr) {
			v = 2;
			P2.classList.toggle("Victory");
		}
	}
}

p1_btn.addEventListener("click",Add1);
p2_btn.addEventListener("click",Add2);
mxscr_inp.addEventListener("change",Updt);
reset_btn.addEventListener("click",Reset);