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
//Resets to 'Landing' table
function ToggleTest2(){
	var y = document.getElementById("ClassDiv");
		y.style.display = "none";
	var z = document.getElementById("Landing");
		z.style.display = "block";
}
//Changes Class Table to selection
function ToggleReplace() {
	var y = event.target.innerText;
	var x = document.getElementById("ClassHead");
	if (y != 'All'){x.innerText = y + 's';} else {x.innerText = y;}
	var t = document.getElementById("ClassDiv");
	document.getElementById("Landing").style.display = "none";
	t.style.display = "block";
	document.getElementById("ClassTable").className = "Table2 " + y + " Table4";
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
	var g = document.getElementById('OperatorsRerolled');
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
				if (c > 4){ g.style.flexDirection = "column-reverse"}
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
	if (arcticImplement != 5){document.getElementById("MBttn").disabled = true;}
	var T = parseInt(document.getElementById('number').value, 10);
	var QQ = document.getElementById("ClassHead").innerText;
	if (QQ === "Defenders"){var Q = Defender}
	if (QQ === "Guards"){var Q = Guard}
	if (QQ === "Vanguards"){var Q = Vanguard}
	if (QQ === "Snipers"){var Q = Sniper}
	if (QQ === "Medics"){var Q = Medic}
	if (QQ === "Supporters"){var Q = Supporter}
	if (QQ === "Specialists"){var Q = Specialist}
	if (QQ === "Casters"){var Q = Caster}
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
	const qr =[]; //Actual result can appear in fake results
	if(arcticImplement != 5){
		for (i = 0; i < Q.length; i++){
			qr[i] = Q[i];
		}
		qr.push(DD);
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
					
//Uses 'arcticImplement' for enable/disable. 0 enable, 5 disable.
	var hMF = 11; //'How Many Fakes' - should be equal to timings.length
	if ((arcticImplement != 5) && (((Q).flat()).length >= 1) && ((((Q)[xt].flat()).length) > (0))){
		const timings = [20,50,70,100,150,210,280,370,440,580,800];
		for (fO = 0; fO < (hMF); fO += 1){
			var fakeOut = setTimeout(FakeResDisplay, (timings[fO]))}				
	}
	var cntFR = 0; //Displays 'fakes'
	var secondCNT = 0; //Generates 'fakes'
	const arrayfakeres = []; //Stores 'fakes' and real roll
	while (secondCNT < (hMF - 1)){
		if ((((Q).flat()).length >= 1) &&(((Q)[xt].flat()).length) > (0)){
			var fakeGen = (qr).flat()[(Math.floor ((Math.random()) * (((qr).flat()).length)))];
			arrayfakeres.push(("Result: ") + fakeGen);}
		secondCNT++;
	}
	if (((Q).flat()).length >= 1){
		arrayfakeres.push("Result: " + DD);
	}
	function FakeResDisplay() {
		var fakeTarget = (document.getElementById('resetRoll'));
		var useFR = arrayfakeres[cntFR];
		fakeTarget.innerHTML = (useFR);
		cntFR++;
		if (cntFR == (hMF)){
			//Use this to visually change result and unlock roll button, change to classes
			//Then implement the ability to disable
			fakeTarget.style = "color: crimson";z.className = EZ + "Roll";} else {fakeTarget.style = "color: maroon";}
	}
	if (index != -1){
		var cc = z.className;
			if(z.classList != ""){
				z.classList.remove(cc);}
		z.style = "color: maroon";
		if ((arcticImplement !=5) && (((Q).flat()).length >= 1) && (((Q)[xt].flat()).length) > (0)){
			return (arrayfakeres[0]);}
		else {z.className = EZ + "Roll";z.style = "color: crimson";return ("Result: " + DD)}
	} else {z.className = "";return "Out of Operators!"}
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
			Guard[1] = ["Matoimaru", "Cutter", "Conviction", "Estelle", "Utage", "Frostleaf", "Beehunter", "Jackie", "Mousse", "Arene", "Dobermann", "Luo Xiahei"];
			Guard[2] = ["Specter", "Broca", "Savage", "La Pluma", "Lappland", "Franka", "Astesia", "Tequila", "Akafuyu", "Bibeak", "Swire", "Whislash", "Indra", "Amiya (G)", "Flint", "Ayerscarpe", "Tachanka", "Flamebringer", "Sideroca"];
			Guard[3] = ["Blaze", "SilverAsh", "Surtr", "Thorns", "Mountain", "Skadi", "Hellagur", "Ch'en", "Nearl (TRK)", "Pallas","Gavial (I)","Mlynar"];
			Vanguard[0] = ["Yato", "Fang", "Plume", "Vanilla"];
			Vanguard[1] = ["Vigna", "Beanstalk", "Scavenger", "Courier", "Myrtle"];
			Vanguard[2] = ["Grani", "Reed", "Wildmane", "Blacknight", "Texas", "Zima", "Elysium", "Chiave","Cantabile"];
			Vanguard[3] = ["Bagpipe", "Saileach", "Siege", "Flametail", "Saga"];
			Sniper[0] = ["'Justice Knight'", "Rangers","Kroos","Adnachiel","Catapult"];
			Sniper[1] = ["Jessica","Meteor","Vermeil","May","Ambriel","Pinecone","Aciddrop","Shirayuki"];
			Sniper[2] = ["Greyy (LB)","Kroos (KG)","GreyThroat","April","Executor","Platinum","Blue Poison","Sesa","Firewatch","Andreana","Aosta","Provence","Toddifons","Meteorite","Erato"];
			Sniper[3] = ["Exusiai","Archetto","Ash","W","Fartooth","Ch'en (H)","Schwarz","Rosa","Rosmontis","Fiametta","Pozyomka"];
			Medic[0] = ["Lancet-2","Hibiscus","Ansel"];
			Medic[1] = ["Perfumer", "Sussurro", "Myrrh","Purestream","Gavial"];
			Medic[2] = ["Warfarin","Ptilopsis","Breeze","Ceylon","Tuye","Mulberry","Folinic","Silence","Whisperain","Honeyberry", "Hibiscus (P)"];
			Medic[3] = ["Kal'tsit","Nightingale","Shining"];
			Specialist[0] = ["THRM-EX"];
			Specialist[1] = ["Shaw","Ethan","Jaye","Rope","Gravel"];
			Specialist[2] = ["Projekt Red","Enforcer","Kafka","Manticore","Bena","Robin","Kazemaru","Waai Fu","Cliffheart","FEater","Mr. Nothing","Snowsant","Frost","Kirara"];
			Specialist[3] = ["Weedy","Gladiia","Lee","Phantom","Mizuki","Aak","Dorothy"]
			Supporter[0] = ["Orchid"];
			Supporter[1] = ["Deepcolor","Podenco","Earthspirit","Roberta"];
			Supporter[2] = ["Mayer","Scene","Sora","Shamare","Istina","Quercus","Glaucus","Nine-Colored Deer","Pramanix","Tsukinogi","Proviso"];
			Supporter[3] = ["Angelina","Ling","Skadi (CH)","Suzuran","Magallan","Gnosis"];
			Caster[0] = ["12F","Durin","Lava","Steward"];
			Caster[1] = ["Click","Gitano","Haze","Indigo","Greyy","Pudding"];
			Caster[2] = ["Astgenne","Leizi","Minimalist","Kjera","Skyfire","Iris","Lava (P)","Nightmare","Beeswax","Mint","Tomimi","Corroserum","Leonhardt","Amiya","Absinthe"];
			Caster[3] = ["Ifrit","Ceobe","Dusk","Mostima","Eyjafjalla","Carnellian","Goldenglow","Passenger", "Ebenholz"];			
			All[0] = Guard[0].concat(Vanguard[0], Supporter[0], Sniper[0], Caster[0], Specialist[0], Defender[0], Medic[0]);
			All[1] = Guard[1].concat(Vanguard[1], Supporter[1], Sniper[1], Caster[1], Specialist[1], Defender[1], Medic[1]);
			All[2] = Guard[2].concat(Vanguard[2], Supporter[2], Sniper[2], Caster[2], Specialist[2], Defender[2], Medic[2]);
			All[3] = Guard[3].concat(Vanguard[3], Supporter[3], Sniper[3], Caster[3], Specialist[3], Defender[3], Medic[3]);
}
function accept(){
	var toast = (((((event.target.parentElement).parentElement).previousElementSibling).firstChild));
	var rollButton = (((((event.target.parentElement).parentElement).previousElementSibling).previousElementSibling.firstChild).firstChild);
	var displayedResult = (((((event.target.parentElement).parentElement).previousElementSibling).firstChild).innerHTML);
	var success = displayedResult.split(': ')[1];
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
			rollButton.innerText = "Roll";
	}
}
var arcticImplement = 0; 
//Used to enable/disable animations. Currently only animation is the 'fake results'.
function toggleSpin(){
	var togSpin = document.getElementById("toggleSpin");
	if(togSpin.innerText == "Animations Enabled"){arcticImplement = 5; togSpin.innerText = "Animations Disabled"}
	else{arcticImplement = 0; togSpin.innerText = "Animations Enabled"}
}
var CN = 1;
var RR = "r1";
function ResetAB() {
	CN = 1;
	RR = "r1";
	document.getElementById("ISToggle").innerText = "Enable IS";
	for (i = 1; i < 13; i += 1){
		var resetCount = "r" + i;
		document.getElementById(resetCount).innerText = "";
	}
	document.getElementById('falsify').innerText = 0;
	arr.length = 0;
	document.getElementById('OperatorsRerolled').innerText = "";
	document.getElementById('OperatorsRerolled').style.flexDirection = "column";
	document.getElementById('OperatorsRerolled').style.overflow = "hidden";
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
		document.getElementById("ISToggle").innerText = "Enable IS";
	} else {
	Guard[0].push("Reserve Op: Melee"), Vanguard[0].push("Reserve Op: Melee"), Specialist[0].push("Reserve Op: Melee");
	Defender[0].push("Reserve Op: Melee"), Medic[0].push("Reserve Medic"),Supporter[0].push("Reserve Op: Ranged");
	Sniper[0].push("Reserve Op: Ranged"), Caster[0].push("Reserve Op: Ranged");
	All[0].push("Reserve Op: Melee", "Reserve Op: Ranged", "Reserve Medic");
	document.getElementById("ISToggle").innerText = "Disable IS";
	}
	var jor = (document.getElementById("hopetable"));
	if (jor.style.display === "none"){jor.style.display = "block";}
	else{jor.style.display = "none";}
	var bruhs = (document.getElementById("ISYAY"));
	if (bruhs.style.display === "none"){bruhs.style.display = "block";}
	else {bruhs.style.display = "none";}
}
function HopeCycle(){
	var Rarity = event.target.innerText;
	if(Rarity === '6*'){var HopeCost = "6";}
	if(Rarity === '5*'){var HopeCost = "3";}
	if(Rarity === '4*'){var HopeCost = "2";}
	if(Rarity === '3*'){var HopeCost = "0";}
	document.getElementById("number").value = HopeCost;
	HopeCheck();
}
//Change log:
//Added ability to toggle IS reserve operators (AddIS())
//Set default to IS (OFF)
//Added 'out of operators' condition
//Added ResetAB() - which removes stored results and resets to zero. Added to reset button.
//ResetAB() also resets reroll result array, and resets incremented number.
//Added HopeCycle() to directly set rarity. Very WIP styling. Eventually hide all the default IS hope stuff.
//Cleaned up a lot of the CSS overlap and errors
//Simplified reroll process to be more efficient
//Fixed SOME of the issues with regards to other resolutions
//Added up to Mlynar. Added scrollbar and toggle for resets.
//Fixed 'reset' CSS issue. Reset now properly clears flex direction and scroll. 
//Need to assign the above line to toggle show all as well!**********
//Fixed a formatting issue to ensure most recent result is fully visible when 'display all' is false.
//Renamed some variables to provide ease of readibility.
//'Reset' now correctly resets the text in 'Enable IS'
//Class tables reduced to a single table. Heading/CSS changed on initial click. Variables renamed for readability.
//CSS and HTML elements renamed to facilitate reduction from 10 tables to 2.
//Cleared up reset using a 'for' loop. Currently only 12 operators can be selected.
//Might be worth shifting all rolled operators into a list similar to reroll list for convenience - depending on 'card' mechanic
//Implemented randomised 'fake' rolls that display prior to actual result. Intend to lock out reroll and add animation for this.
//Added ability to disable fake results - will be used to disable ALL animations as they are added.
//Fake results now function at different 'Hope' values, and can display actual result in fake displays.
