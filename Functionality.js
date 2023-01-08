// This command increases 'Hope' value
function incrementValue(){
		var value = parseInt(document.getElementById('number').value, 10);
		value = isNaN(value) ? 0 : value;
		value++;
		document.getElementById('number').value = value;
}
// This command decreases 'Hope' value
function decrementValue(){
		var value = parseInt(document.getElementById('number').value, 10);
		value = isNaN(value) ? 0 : value;
		value--;
		document.getElementById('number').value = value;
}
// This command disables the '-1' button when Hope hits 0, and re-enables when it goes up
function EnDisM(){
		var button = document.getElementById('minus');
		if ((parseInt(document.getElementById('number').value, 10) > "0")) {
			button.disabled = false;
		} else {
			button.disabled = true;
		}
}
// This command sets 'Hope' value to 6. Used by 'reset' button
function resetHope(){
		document.getElementById('number').value = "6";
	}
//The 'ToggleTest' series changes which table is displayed, based on the Table ID and button text
function ToggleTest2(){
		var y = ((((((event.target).parentElement).parentElement).parentElement).parentElement).parentElement);
			y.style.display = "none";
		var x = document.getElementById(event.target.innerHTML);
			x.style.display = "block";	
}
// Causes the 'Back' button to reset locked buttons, and rolled result
function disB() {
	var c = (((((event.target).parentElement).parentElement).nextElementSibling).firstChild).firstChild;
		c.innerText = 'Roll';
		c.className = "blank";
	var d = (((((event.target).parentElement).parentElement).nextElementSibling).nextElementSibling).firstChild;
		d.innerHTML = ' <br> ';
		d.className = "blank";
}
// Both commands let one button unlock the other, and lock itself
		const arr = [];
function disRB() {
    var x = event.target;
    if(x.innerHTML != "Roll"){
	var z = (((((event.target).parentElement).parentElement).nextElementSibling).firstChild);
	var g = document.getElementById('john');
	var c = parseInt(document.getElementById('falsify').innerText);
	var st = z.innerHTML.split(': ')[1];
	var ShowRerolls = document.querySelector('#ScrollReset');
		if ((z.innerText != "Out of Operators!")) {arr.push(st);
			g.innerText = (arr.join('\n'));
		document.getElementById('falsify').innerText = (c)+1;
	// Show 5 vs show all - setting to show 5 will delete previous.
			if (ShowRerolls.checked != true){
				g.style.overflowY = "hidden";
				g.style.flexDirection = "column";
				while (arr.length > 5){
					arr.shift();
				}
			}
			else if (c > 4){
				g.style.flexDirection = "column-reverse";
				g.style.overflowY = "scroll";
			}
			// ABOVE - sets scroll to scroll down once 5 operators reached automatically
			g.innerText = (arr.join('\n'));
		}
	}
	x.innerText = 'Reroll...'
    }
//This is my array for 'Hope' Background change!! FULLY OPERATIONAL
function HopeCheck() {
	var a = parseInt(document.getElementById('number').value, 10);
	var b = document.getElementById('hopetable');
		if (a > 10) {return;}
		else {b.className = HT[a];}
}
	        const HT = [];
			HT[0] = "Hope0";
			HT[1] = "Hope1";
			HT[2] = "Hope2";
			HT[3] = "Hope3";
			HT[4] = "Hope4";
			HT[5] = "Hope5";
			HT[6] = "Hope6";
			HT[7] = "Hope7";
			HT[8] = "Hope8";
			HT[9] = "Hope9";
			HT[10] = "Hope10";
// UNIVERSAL Randomiser. Nested Successfully. 'QQ' returns results in quotations - if statements are workarounds
	function randVal(){
		var T = parseInt(document.getElementById('number').value, 10);
		var QQ = (((((((event.target).parentElement).parentElement).parentElement).parentElement).parentElement.id));
		if (QQ === "Defender"){var Q = Defender}
		if (QQ === "Guard"){var Q = Guard}
		if (QQ === "Vanguard"){var Q = Vanguard}
		if (QQ === "Sniper"){var Q = Sniper}
		if (QQ === "Medic"){var Q = Medic}
		if (QQ === "Supporter"){var Q = Supporter}
		if (QQ === "Specialist"){var Q = Specialist}
		if (QQ === "Caster"){var Q = Caster}
		if (QQ === "All"){var Q = All}
		var z = (((((event.target).parentElement).parentElement).nextElementSibling).firstChild);

		var A = (Q)[0].length;
		var B = ((Q)[0].length + (Q)[1].length);
		var C = ((Q)[0].length + (Q)[1].length + (Q)[2].length);
			if (T < 2){
				var c = Math.floor ((Math.random()) * (A));
				var xt = 0;
				var DD = (Q).flat()[c];						
			}
			else if (T === 2){
				var c = Math.floor ((Math.random()) * (B));
				if (c > (A - 1)){ var xt = 1}
				else {var xt = 0}
				var DD = (Q).flat()[c];
			}
			else if ((T > 2) && (T < 6)){
				var c = Math.floor ((Math.random()) * (C));
				if (c > (B - 1)){ var xt = 2}
				else if (c > (A - 1)){ var xt = 1}
				else {var xt = 0}
				var DD = (Q).flat()[c];
			}
			else if (T > 5){
				var c = Math.floor ((Math.random()) * (((Q).flat()).length));
				if (c > (C - 1)){ var xt = 3}
				else if (c > (B - 1)){ var xt = 2}
				else if (c > (A - 1)){ var xt = 1}
				else {var xt = 0}
				var DD = (Q).flat()[c];
			}
		var index = (Q)[xt].indexOf(DD);
		var index2 = (All)[xt].indexOf(DD);
		var index3 = (Guard)[xt].indexOf(DD); var are = Guard; var EZ = "Guard";
			if (index3 === -1){var index3 = (Sniper)[xt].indexOf(DD); var are = Sniper; var EZ = "Sniper"}
			if (index3 === -1){var index3 = (Vanguard)[xt].indexOf(DD); var are = Vanguard; var EZ = "Vanguard";}
			if (index3 === -1){var index3 = (Defender)[xt].indexOf(DD); var are = Defender; var EZ = "Defender"}
			if (index3 === -1){var index3 = (Medic)[xt].indexOf(DD); var are = Medic; var EZ = "Medic"}
			if (index3 === -1){var index3 = (Caster)[xt].indexOf(DD); var are = Caster; var EZ = "Caster"}
			if (index3 === -1){var index3 = (Specialist)[xt].indexOf(DD); var are = Specialist; var EZ = "Specialist"}
			if (index3 === -1){var index3 = (Supporter)[xt].indexOf(DD); var are = Supporter; var EZ = "Supporter"}
			if ((index !== -1) && ((DD!="Reserve Op: Melee")&&(DD!="Reserve Op: Ranged")&&(DD!="Reserve Medic"))) {
					(Q)[xt].splice(index, 1);
					}
			if ((index2 !== -1) && ((DD!="Reserve Op: Melee")&&(DD!="Reserve Op: Ranged")&&(DD!="Reserve Medic"))&&(Q != All)){
					(All)[xt].splice(index2, 1);
					}
			if ((index3 !== -1) && ((DD!="Reserve Op: Melee")&&(DD!="Reserve Op: Ranged")&&(DD!="Reserve Medic"))&&(Q === (All))){
					(are)[xt].splice(index3, 1);
					}
		if (index != -1){
					 z.className = EZ;
		return 'Result: ' + DD;} else {return "Out of Operators!"}
		}			
const Defender = [];
const Guard = [];
const Vanguard = [];
const Sniper = [];
const Medic = [];
const Specialist = [];
const Supporter = [];
const Caster = [];		
const All = [];
window.onload = TestRest();
function TestRest(){
	Vanguard.length = 0;
	Guard.length = 0;
	Caster.length = 0;
	Sniper.length = 0;
	Supporter.length = 0;
	Defender.length = 0;
	Medic.length = 0;
	Specialist.length = 0;
	All.length = 0;
			Defender[0] = ["Noir Corne", "Beagle", "Cardigan", "Spot"];	
			Defender[1] = ["Cuora", "Dur-nar", "Bubble", "Gummy", "Matterhorn"];
			Defender[2] = ["Liskarm", "Vulcan", "Aurora", "Nearl", "Asbestos", "Ashlock", "Shalem", "Croissant", "Bison", "Blitz", "Heavyrain", "Hung", "Czerny"];
			Defender[3] = ["Nian", "Hoshiguma", "Saria", "Mudrock", "Blemishine", "Eunectes"];
			Guard[0] = ["Castle-3","Melantha", "Popukar", "Midnight"];	
			Guard[1] = ["Matoimaru", "Cutter", "Conviction", "Estelle", "Utage", "Frostleaf", "Beehunter", "Jackie", "Mousse", "Arene", "Dobermann"];
			Guard[2] = ["Specter", "Broca", "Savage", "La Pluma", "Lappland", "Franka", "Astesia", "Tequila", "Akafuyu", "Bibeak", "Swire", "Whislash", "Indra", "Amiya (G)", "Flint", "Ayerscarpe", "Tachanka", "Flamebringer", "Sideroca"];
			Guard[3] = ["Blaze", "SilverAsh", "Surtr", "Thorns", "Mountain", "Skadi", "Hellagur", "Ch'en", "Nearl (TRK)", "Pallas"];
			Vanguard[0] = ["Yato", "Fang", "Plume", "Vanilla"];
			Vanguard[1] = ["Vigna", "Beanstalk", "Scavenger", "Courier", "Myrtle"];
			Vanguard[2] = ["Grani", "Reed", "Wildmane", "Blacknight", "Texas", "Zima", "Elysium", "Chiave"];
			Vanguard[3] = ["Bagpipe", "Saileach", "Siege", "Flametail", "Saga"];
			Sniper[0] = ["'Justice Knight'", "Rangers","Kroos","Adnachiel","Catapult"];
			Sniper[1] = ["Jessica","Meteor","Vermeil","May","Ambriel","Pinecone","Aciddrop","Shirayuki"];
			Sniper[2] = ["Kroos (KG)","GreyThroat","April","Executor","Platinum","Blue Poison","Sesa","Firewatch","Andreana","Aosta","Provence","Toddifons","Meteorite","Erato"];
			Sniper[3] = ["Exusiai","Archetto","Ash","W","Fartooth","Ch'en (H)","Schwarz","Rosa","Rosmontis","Fiametta"];
			Medic[0] = ["Lancet-2","Hibiscus","Ansel"];
			Medic[1] = ["Perfumer", "Sussurro", "Myrrh","Purestream","Gavial"];
			Medic[2] = ["Warfarin","Ptilopsis","Breeze","Ceylon","Tuye","Mulberry","Folinic","Silence","Whisperain","Honeyberry", "Hibiscus (Purifier)"];
			Medic[3] = ["Kal'tsit","Nightingale","Shining"];
			Specialist[0] = ["THRM-EX"];
			Specialist[1] = ["Shaw","Ethan","Jaye","Rope","Gravel"];
			Specialist[2] = ["Projekt Red","Enforcer","Kafka","Manticore","Bena","Robin","KAZEMARU","Waai Fu","Cliffheart","FEater","Mr. Nothing","Snowsant","Frost","Kirara"];
			Specialist[3] = ["Weedy","Gladiia","Lee","Phantom","Mizuki","Aak"]
			Supporter[0] = ["Orchid"];
			Supporter[1] = ["Deepcolor","Podenco","Earthspirit","Roberta"];
			Supporter[2] = ["Mayer","Scene","Sora","Shamare","Istina","Quercus","Glaucus","Nine-Colored Deer","Pramanix","Tsukinogi"];
			Supporter[3] = ["Angelina","Ling","Skadi (CH)","Suzuran","Magallan","Gnosis"];
			Caster[0] = ["12F","Durin","Lava","Steward"];
			Caster[1] = ["Click","Gitano","Haze","Indigo","Greyy","Pudding"];
			Caster[2] = ["Leizi","Kjera","Skyfire","Iris","Lava (Purgatory)","Nightmare","Beeswax","Mint","Tomimi","Corroserum","Leonhardt","Amiya","Absinthe"];
			Caster[3] = ["Ifrit","Ceobe","Dusk","Mostima","Eyjafjalla","Carnellian","Goldenglow","Passenger", "Ebenholz"];			
			All[0] = Guard[0].concat(Vanguard[0], Supporter[0], Sniper[0], Caster[0], Specialist[0], Defender[0], Medic[0]);
			All[1] = Guard[1].concat(Vanguard[1], Supporter[1], Sniper[1], Caster[1], Specialist[1], Defender[1], Medic[1]);
			All[2] = Guard[2].concat(Vanguard[2], Supporter[2], Sniper[2], Caster[2], Specialist[2], Defender[2], Medic[2]);
			All[3] = Guard[3].concat(Vanguard[3], Supporter[3], Sniper[3], Caster[3], Specialist[3], Defender[3], Medic[3]);
}
function accept(){
	var toast = (((((event.target.parentElement).parentElement).previousElementSibling).firstChild));
	var toast3 = (((((event.target.parentElement).parentElement).previousElementSibling).previousElementSibling.firstChild).firstChild);
	var toast2 = (((((event.target.parentElement).parentElement).previousElementSibling).firstChild).innerHTML);
	var success = toast2.split(': ')[1];
		if (success != undefined){
			document.getElementById(RR).innerText = success;
			RR = 'r'+CN;
			var coe = document.getElementById(RR).innerText;
			if (coe != undefined){
				CN++;
				RR = 'r'+CN;
			}
			toast.innerHTML = " <br> ";
			toast.className = "";
			toast3.innerText = "Roll";
		var crc = (((((event.target.parentElement).parentElement).previousElementSibling).previousElementSibling));
	}
}
var CN = 1;
var RR = "r1";
function ResetAB() {
	CN = 1;
	RR = "r1";
	document.getElementById("r1").innerText = "";
	document.getElementById("r2").innerHTML = "";
	document.getElementById("r3").innerHTML = "";
	document.getElementById("r4").innerHTML = "";
	document.getElementById("r5").innerHTML = "";
	document.getElementById("r6").innerHTML = "";
	document.getElementById("r7").innerHTML = "";
	document.getElementById("r8").innerHTML = "";
	document.getElementById("r9").innerHTML = "";
	document.getElementById("r10").innerHTML = "";
	document.getElementById("r11").innerHTML = "";
	document.getElementById("r12").innerHTML = "";
	document.getElementById('falsify').innerText = 0;
	arr.length = 0;
	document.getElementById('john').innerText = "";
	document.getElementById('john').style.flexDirection = "column";
	document.getElementById('john').style.overflow = "hidden";
	document.getElementById("hopetable").style.display = "none";
	document.getElementById("ISYAY").style.display = "block";
}
	
function AddIS(){
	var rg = Guard[0].indexOf("Reserve Op: Melee");
	var vg = Vanguard[0].indexOf("Reserve Op: Melee");
	var rd = Defender[0].indexOf("Reserve Op: Melee");
	var rs = Specialist[0].indexOf("Reserve Op: Melee");
	var rm = Medic[0].indexOf("Reserve Medic");
	var rsp = Supporter[0].indexOf("Reserve Op: Ranged");
	var rsn = Sniper[0].indexOf("Reserve Op: Ranged");
	var rc = Caster[0].indexOf("Reserve Op: Ranged");
	var i = 1;
	if ((Guard[0].indexOf("Reserve Op: Melee")) != (-1)){
		Guard[0].splice(rg, 1), Vanguard[0].splice(vg, 1), Defender[0].splice(rd, 1), Specialist[0].splice(rs, 1);
		Medic[0].splice(rm, 1), Supporter[0].splice(rsp, 1), Sniper[0].splice(rsn, 1), Caster[0].splice(rc, 1);
		while (i < 5){
			var ra1 = All[0].indexOf("Reserve Op: Melee");			
			if (ra1 != -1){All[0].splice(ra1, 1);}
			var ra2 = All[0].indexOf("Reserve Op: Ranged");
			if (ra2 != -1){All[0].splice(ra2, 1)};
			var ra3 = All[0].indexOf("Reserve Medic");
			if (ra3 != -1){All[0].splice(ra3, 1)};
			i++;}
		document.getElementById("jeg").innerText = "Enable IS";
	} else {
	Guard[0].push("Reserve Op: Melee"), Vanguard[0].push("Reserve Op: Melee"), Specialist[0].push("Reserve Op: Melee");
	Defender[0].push("Reserve Op: Melee"), Medic[0].push("Reserve Medic"),Supporter[0].push("Reserve Op: Ranged");
	Sniper[0].push("Reserve Op: Ranged"), Caster[0].push("Reserve Op: Ranged");
	All[0].push("Reserve Op: Melee", "Reserve Op: Ranged", "Reserve Medic");
	document.getElementById("jeg").innerText = "Disable IS";
	}
	var jor = (document.getElementById("hopetable"));
	if (jor.style.display === "none"){jor.style.display = "block";}
	else{jor.style.display = "none";}
	var bruhs = (document.getElementById("ISYAY"));
	if (bruhs.style.display === "none"){bruhs.style.display = "block";}
	else {bruhs.style.display = "none";}
}
function HopeCycle(){
	var arrrr = event.target.innerText;
	if(arrrr === '6*'){var Corre = "6";}
	if(arrrr === '5*'){var Corre = "3";}
	if(arrrr === '4*'){var Corre = "2";}
	if(arrrr === '3*'){var Corre = "0";}
	document.getElementById("number").value = Corre;
	HopeCheck();
}
//Change log:
//Added ability to toggle IS reserve operators (AddIS())
//Set default to IS (OFF)
//Added 'out of operators' condition
//Added ResetAB() - which removes stored results and resets to zero. Added to reset button.
//ResetAB() also resets reroll result array, and incremented number.
//Added HopeCycle() to directly set rarity. Very WIP styling. Eventually hide all the default IS hope stuff.
//Cleaned up a lot of the CSS overlap and errors
//Simplified reroll process to be more efficient
//Fixed SOME of the issues with regards to other resolutions
//Added up to Erato. Added scrollbar and toggle for resets.
//Fixed 'reset' CSS issue. Reset now properly clears flex direction and scroll. 
//Need to assign the above line to toggle show all as well!
//Added Ebenholz, Hibiscus (Purifier) and Czerny
