<html>
<head>
<link href="Style1.css?Version1" rel="Stylesheet" type="text/css" />
<script type="text/javascript" src="Functionality.js"></script>
</head>
<body>
<br> <br>
	<table style="Width:50%">
		<tr>
				<th> Begin </th>
				<th> Challenges </th>
				<th> Options </th>
				<th> Feedback </th>
		</tr>
	</table> <br>
<table class="main">
	<table class="Hope6" id="hopetable">
		<tr><td colspan="2">Hope</td></tr>
        <tr><td colspan="2" id="hope"><div id="Hope"><form><input type="text" id="number" value="6" readonly /></form></td></tr>
		<tr><td><button id="minus" type="button" onclick="decrementValue();EnDisM();HopeCheck()">-1</button></td>
			<td><button id="plus" type="button" onclick="incrementValue();EnDisM();HopeCheck()">+1</button></td></tr>
    </table>
	<div id="Back">
		<table class="Table2 CIA">
			<tr><th colspan="2"> Operators </th></tr>
			<tr><td><button type="button" onclick="ToggleTest2()">Vanguard</button></td>
				<td><button type="button" onclick="ToggleTest2()">Guard</button></td></tr>
			<tr><td><button type="button" onclick="ToggleTest2()">Defender</button></td>
				<td><button type="button" onclick="ToggleTest2()">Medic</button></td></tr>
			<tr><td><button type="button" onclick="ToggleTest2()">Sniper</button></td>
				<td><button type="button" onclick="ToggleTest2()">Caster</button></td></tr>
			<tr><td><button type="button" onclick="ToggleTest2()">Supporter</button></td>
				<td><button type="button" onclick="ToggleTest2()">Specialist</button></td></tr>		
			<tr><td colspan="2"><button type="button" onclick="ToggleTest2()">All</button></td></tr>
		</table>
	</div>
	<div id="Vanguard" hidden>
		<table class="Table2 TableVG">
			<tr><th colspan="2">Vanguards</th></tr>
			<tr><td colspan="2"><button type="button" onclick="disB();ToggleTest2()">Back</button></td></tr>
				<tr><td><button type="button"onclick="document.getElementById('VGres').innerHTML=randVal();EnRB()">Roll</button></td>
				<td><button class="LockButtonRESET"type="button" onclick="disRB()" disabled> Separater </button></td></tr>
				<tr><td colspan="2"id="VGres"><br></td></tr>
				<tr><td><button type="button"onclick="accept()">Accept</button></td></tr>
		</table>
	</div>
	<div id="Guard" hidden>
		<table class="Table2 TableG">
			<tr><th colspan="2">Guards</th></tr>
			<tr><td colspan="2"><button type="button" onclick="disB();ToggleTest2()">Back</button></td></tr>
				<tr><td><button type="button"onclick="document.getElementById('Gres').innerHTML=randVal();EnRB()">Roll</button></td>
				<td><button class="LockButtonRESET"type="button"disabled onclick="disRB();RemTest()"> Separater </button></td></tr>
				<tr><td colspan="2"id="Gres"><br></td></tr>
				<tr><td><button type="button"onclick="accept()">Accept</button></td></tr>
		</table>
	</div>
	<div id="Defender" hidden>
		<table class="Table2 TableD">
			<tr><th colspan="2">Defenders</th></tr>
			<tr><td colspan="2"><button type="button" onclick="disB();ToggleTest2()">Back</button></td></tr>
				<tr><td><button type="button"onclick="document.getElementById('Dres').innerHTML=randVal();EnRB()">Roll</button></td>
				<td><button class="LockButtonRESET"type="button" onclick="disRB()" disabled> Separater </button></td></tr>
				<tr><td colspan="2"id="Dres"><br></td></tr>
				<tr><td><button type="button"onclick="accept()">Accept</button></td></tr>
		</table>
	</div>
		<div id="Medic" hidden>
		<table class="Table2 TableM">
			<tr><th colspan="2">Medics</th></tr>
			<tr><td colspan="2"><button type="button" onclick="disB();ToggleTest2()">Back</button></td></tr>
				<tr><td><button type="button"onclick="document.getElementById('Mres').innerHTML=randVal();EnRB()">Roll</button></td>
				<td><button class="LockButtonRESET"type="button" onclick="disRB()" disabled> Separater </button></td></tr>
				<tr><td colspan="2"id="Mres"><br></td></tr>
				<tr><td><button type="button"onclick="accept()">Accept</button></td></tr>
		</table>
	</div>
	<div id="Sniper" hidden>
		<table class="Table2 TableSN">
			<tr><th colspan="2">Snipers</th></tr>
			<tr><td colspan="2"><button type="button" onclick="disB();ToggleTest2()">Back</button></td></tr>
				<tr><td><button type="button"onclick="document.getElementById('SNres').innerHTML=randVal();EnRB()">Roll</button></td>
				<td><button class="LockButtonRESET"type="button"onclick="disRB()"disabled> Separater </button></td></tr>
				<tr><td colspan="2"id="SNres"><br></td></tr>
				<tr><td><button type="button"onclick="accept()">Accept</button></td></tr>
		</table>
	</div>
	<div id="Caster" hidden>
		<table class="Table2 TableC">
			<tr><th colspan="2">Casters</th></tr>
			<tr><td colspan="2"><button type="button" onclick="disB();ToggleTest2()">Back</button></td></tr>
				<tr><td><button type="button"onclick="document.getElementById('Cres').innerHTML=randVal();EnRB()">Roll</button></td>
				<td><button class="LockButtonRESET"type="button"onclick="disRB()"disabled> Separater </button></td></tr>
				<tr><td colspan="2"id="Cres"><br></td></tr>
				<tr><td><button type="button"onclick="accept()">Accept</button></td></tr>
		</table>
	</div>
	<div id="Supporter" hidden>
		<table class="Table2 TableSU">
			<tr><th colspan="2">Supporters</th></tr>
			<tr><td colspan="2"><button type="button" onclick="disB();ToggleTest2()">Back</button></td></tr>
				<tr><td><button type="button"onclick="document.getElementById('SUres').innerHTML=randVal();EnRB()">Roll</button></td>
				<td><button class="LockButtonRESET"type="button"onclick="disRB()"disabled> Separater </button></td></tr>
				<tr><td colspan="2"id="SUres"><br></td></tr>
				<tr><td><button type="button"onclick="accept()">Accept</button></td></tr>
		</table>
	</div>
	<div id="Specialist" hidden>
		<table class="Table2 TableSP">
			<tr><th colspan="2">Specialists</th></tr>
			<tr><td colspan="2"><button type="button" onclick="disB();ToggleTest2()">Back</button></td></tr>
				<tr><td><button type="button"onclick="document.getElementById('SPres').innerHTML=randVal();EnRB()">Roll</button></td>
				<td><button class="LockButtonRESET"type="button"onclick="disRB()"disabled> Separater </button></td></tr>
				<tr><td colspan="2"id="SPres"><br></td></tr>
				<tr><td><button type="button"onclick="accept()">Accept</button></td></tr>
		</table>
	</div>
	<div id="All" hidden>
		<table class="Table2 TableA">
			<tr><th colspan="2">All</th></tr>
			<tr><td colspan="2"><button type="button" onclick="disB();ToggleTest2()">Back</button></td></tr>
				<tr><td><button type="button"onclick="document.getElementById('Owl').innerHTML=randVal();EnRB()">Roll</button></td>
				<td><button class="LockButtonRESET"type="button"onclick="disRB()"disabled> Separater </button></td></tr>
				<tr><td colspan="2"id="Owl"><br></td></tr>
				<tr><td><button type="button" onclick="accept()">Accept</button></td></tr>
		</table>
	</div>
</table>
<button type="button" onclick="resetHope();EnDisM();HopeCheck();TestRest()" style="margin-bottom:12%">reset</button> 

<!-- The blow is a quick mockup of THAT. Probably put in a different page on other to continue work-->
<table><tr><td>BarBaRa</td></tr>
	<tr><td><button id="e" type ="button" onclick="dV(); EM()" > -1 </td>
		<td><button id="tart"type="button" onclick="RTD()"style="margin-left:-130px"> ROLL THE DICE </td>
		<td><button type ="button" onclick="iV(); EM()"style="margin-left:-50px"> +1 <td></tr>
	<tr><td><form><input type="range" class="Slide" id="val" value="1" disabled /> </td></tr>
	<tr><td><form><input type="text" id="bbr" value="1" readonly /></form></td>
<td id="lol" style="margin-left:-110px">Pongos</td></tr>
<td hidden><button id="tt" hidden type="button" value="0"/></td>
</table>
<table><tr><td> Rerolls: </td><td id ="falsify">0
</td></tr>
<tr><td id="john"></td></tr></table>
<script>
var testInput = document.getElementsByClassName('Slide')[0];
var tart = document.getElementById('tart');
var br = document.getElementById('bbr');
testInput.min = 100;
testInput.max = 600;
tart.addEventListener('click', uv, false);
function uv() {
    currValue = +testInput.value;
    window.requestAnimationFrame(animateH);
}
function animateH() {
    testInput.value = currValue;
    if((testInput.value < 200) && (br.value > 2)){
      window.requestAnimationFrame(animateH);   
    } 
    if (testInput.value < 108){currValue = currValue + 0.1;}
	else if (testInput.value < 120){currValue = currValue + 1.5;}
	else if (testInput.value < 200) {currValue = 200}
}
function RTD(){
var T = ((parseInt(document.getElementById('val').value, 10) /100 )-1);
var J = parseInt(document.getElementById('tt').value, 10);
var X = (1 + (J * 0.4));
for (let i = 0; i < (X); i++) {
	var c = Math.floor ((Math.random()) * (Rolls[T].length));
	var numb = (br.value * Rolls[T][c]);
	numb = numb.toFixed(2);
	br.value = numb;
	document.getElementById('tt').value = (J + 1);
}
if (T === 5){document.getElementById("tt").value = (J + 15)}}
const Rolls =[];
	Rolls[0] = ["1.005","1.01", "1.015","1.02","1.025"];
	Rolls[1] = ["1.1", "1.15","1.2", "1.125","1.175"];
	Rolls[2] = ["1.5", "1.75", "2", "2.5", "3.0", "7.5"];
	Rolls[3] = ["20", "50"];
	Rolls[4] = ["150", "250"];
	Rolls[5] = ["500", "750"];
	Rolls[6] = ["2000", "5000"];
function iV()
	{
		var value = parseInt(document.getElementById('val').value, 10);
		value = isNaN(value) ? 0 : value;
		value+= 100;
		document.getElementById('val').value = value;
		document.getElementById('tt').value = "0";
	}
function dV()
	{
		var value = parseInt(document.getElementById('val').value, 10);
		value = isNaN(value) ? 0 : value;
		value-= 100;
		document.getElementById('val').value = value;
	}
function EM()
	{
		var button = document.getElementById('e');
		if ((parseInt(document.getElementById('val').value, 10) > "0")) {
			button.disabled = false;
		} else {button.disabled = true;}
	}
	</script>
<table class="Result" id="Rolls">
	<tr><td id="r1"/><td id="r2"/><td id="r3"/><td id="r4"/><td id="r5"/><td id="r6"/></tr>
	<tr><td id="r7"/><td id="r8"/><td id="r9"/><td id="r10"/><td id="r11"/><td id="r12"/></tr>
</table>
</body>
</html>