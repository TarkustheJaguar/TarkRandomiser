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
	var f = (((((event.target).parentElement).parentElement).nextElementSibling).firstChild).nextElementSibling.firstChild;
		f.disabled = true;
		f.innerText = ' a ';
		f.className = "LockButtonRESET";
	var c = (((((event.target).parentElement).parentElement).nextElementSibling).firstChild).firstChild;
		c.disabled = false;
		c.innerText = 'Roll';
		c.className = "blank";
	var d = (((((event.target).parentElement).parentElement).nextElementSibling).nextElementSibling).firstChild;
		d.innerHTML = ' <br> ';
		d.className = "blank";
}
// Both commands let one button unlock the other, and lock itself
		const arr = [];
		var show = 5;
function disRB() {
    var x = event.target;
        x.disabled = true;
        x.innerText = ' a '
		x.className = "LockButtonRESET";
	var y = (((((event.target).parentElement).previousElementSibling).firstChild));
        y.disabled = false;
        y.innerText = 'Roll'
		y.className = "blank";
	var z = (((((event.target).parentElement).parentElement).nextElementSibling).firstChild);
	var g = document.getElementById('john');
	var c = parseInt(document.getElementById('falsify').innerText);
	var st = z.innerHTML.split(': ')[1];
	if (g.innerText === ""){arr.push(st);
			g.innerText = (arr);}
	else if (c < show) {arr.push(st);
			g.innerText = (arr.join('\n'));}
	z.innerHTML = ' <br> ';
	z.className = 'blank';
	document.getElementById('falsify').innerText = (c)+1;
	if (c >= show) {arr.push(st);
		arr.shift();
		g.innerText = (arr.join('\n'))}
    }
function EnRB() {
	var y = (((((event.target).parentElement).nextElementSibling).firstChild));
		y.disabled = false;
		y.innerText = 'Reset?'
		y.className = "blank";
	var x = event.target;
		x.disabled = true;
		x.innerText = 'Roll...';
		x.className = "LockButton";
}
//This is my array for 'Hope' Background change!! FULLY OPERATIONAL
function HopeCheck() {
	var a = parseInt(document.getElementById('number').value, 10);
	var b = document.getElementById('hopetable');
		if (a > 9) {return;}
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
		 z.className = QQ;
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
		var index3 = (Guard)[xt].indexOf(DD); var are = Guard;
			if (index3 === -1){var index3 = (Sniper)[xt].indexOf(DD); var are = Sniper}
			if (index3 === -1){var index3 = (Vanguard)[xt].indexOf(DD); var are = Vanguard}
			if (index3 === -1){var index3 = (Defender)[xt].indexOf(DD); var are = Defender}
			if (index3 === -1){var index3 = (Medic)[xt].indexOf(DD); var are = Medic}
			if (index3 === -1){var index3 = (Caster)[xt].indexOf(DD); var are = Caster}
			if (index3 === -1){var index3 = (Specialist)[xt].indexOf(DD); var are = Specialist}
			if (index3 === -1){var index3 = (Supporter)[xt].indexOf(DD); var are = Supporter}
			if ((index !== -1) && ((DD!="Reserve Op: Melee")&&(DD!="Reserve Op: Ranged")&&(DD!="Reserve Medic"))) {
					(Q)[xt].splice(index, 1);
					}
			if ((index2 !== -1) && ((DD!="Reserve Op: Melee")&&(DD!="Reserve Op: Ranged")&&(DD!="Reserve Medic"))&&(Q != All)){
					(All)[xt].splice(index2, 1);
					}
			if ((index3 !== -1) && ((DD!="Reserve Op: Melee")&&(DD!="Reserve Op: Ranged")&&(DD!="Reserve Medic"))&&(Q === (All))){
					(are)[xt].splice(index3, 1);
					}
		return 'Results: ' + DD;
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
			Defender[0] = ["Reserve Op: Melee", "Noir Corne", "Beagle", "Cardigan", "Spot"];	
			Defender[1] = ["Cuora", "Dur-nar", "Bubble", "Gummy", "Matterhorn"];
			Defender[2] = ["Liskarm", "Vulcan", "Aurora", "Nearl", "Asbestos", "Ashlock", "Shalem", "Croissant", "Bison", "Blitz", "Heavyrain", "Hung"];
			Defender[3] = ["Nian", "Hoshiguma", "Saria", "Mudrock", "Blemishine", "Eunectes"];
			Guard[0] = ["Reserve Op: Melee", "Castle-3","Melantha", "Popukar", "Midnight"];	
			Guard[1] = ["Matoimaru", "Cutter", "Conviction", "Estelle", "Utage", "Frostleaf", "Beehunter", "Jackie", "Mousse", "Arene", "Dobermann"];
			Guard[2] = ["Specter", "Broca", "Savage", "La Pluma", "Lappland", "Franka", "Astesia", "Tequila", "Akafuyu", "Bibeak", "Swire", "Whislash", "Indra", "Amiya (G)", "Flint", "Ayerscarpe", "Tachanka", "Flamebringer", "Sideroca"];
			Guard[3] = ["Blaze", "SilverAsh", "Surtr", "Thorns", "Mountain", "Skadi", "Hellagur", "Ch'en", "Nearl (TRK)", "Pallas"];
			Vanguard[0] = ["Reserve Op: Melee", "Yato", "Fang", "Plume", "Vanilla"];
			Vanguard[1] = ["Vigna", "Beanstalk", "Scavenger", "Courier", "Myrtle"];
			Vanguard[2] = ["Grani", "Reed", "Wildmane", "Blacknight", "Texas", "Zima", "Elysium", "Chiave"];
			Vanguard[3] = ["Bagpipe", "Saileach", "Siege", "Flametail", "Saga"];
			Sniper[0] = ["Reserve Op: Ranged", "'Justice Knight'", "Rangers","Kroos","Adnachiel","Catapult"];
			Sniper[1] = ["Jessica","Meteor","Vermeil","May","Ambriel","Pinecone","Aciddrop","Shirayuki"];
			Sniper[2] = ["Kroos (KG)","GreyThroat","April","Executor","Platinum","Blue Poison","Sesa","Firewatch","Andreana","Aosta","Provence","Toddifons","Meteorite"];
			Sniper[3] = ["Exusiai","Archetto","Ash","W","Fartooth","Ch'en (H)","Schwarz","Rosa","Rosmontis","Fiametta"];
			Medic[0] = ["Reserve Medic","Lancet-2","Hibiscus","Ansel"];
			Medic[1] = ["Perfumer", "Sussurro", "Myrrh","Purestream","Gavial"];
			Medic[2] = ["Warfarin","Ptilopsis","Breeze","Ceylon","Tuye","Mulberry","Folinic","Silence","Whisperain","Honeyberry"];
			Medic[3] = ["Kal'tsit","Nightingale","Shining"];
			Specialist[0] = ["Reserve Op: Melee", "THRM-EX"];
			Specialist[1] = ["Shaw","Ethan","Jaye","Rope","Gravel"];
			Specialist[2] = ["Projekt Red","Enforcer","Kafka","Manticore","Bena","Robin","KAZEMARU","Waai Fu","Cliffheart","FEater","Mr. Nothing","Snowsant","Frost","Kirara"];
			Specialist[3] = ["Weedy","Gladiia","Lee","Phantom","Mizuki","Aak"]
			Supporter[0] = ["Reserve Op: Ranged","Orchid"];
			Supporter[1] = ["Deepcolor","Podenco","Earthspirit","Roberta"];
			Supporter[2] = ["Mayer","Scene","Sora","Shamare","Istina","Quercus","Glaucus","Nine-Colored Deer","Pramanix","Tsukinogi"];
			Supporter[3] = ["Angelina","Ling","Skadi (CH)","Suzuran","Magallan","Gnosis"];
			Caster[0] = ["Reserve Op: Ranged","12F","Durin","Lava","Steward"];
			Caster[1] = ["Click","Gitano","Haze","Indigo","Greyy","Pudding"];
			Caster[2] = ["Leizi","Kjera","Skyfire","Iris","Lava (Purgatory)","Nightmare","Beeswax","Mint","Tomimi","Corroserum","Leonhardt","Amiya","Absinthe"];
			Caster[3] = ["Ifrit","Ceobe","Dusk","Mostima","Eyjafjalla","Carnellian","Goldenglow","Passenger"];			
			All[0] = Guard[0].concat(Vanguard[0], Supporter[0], Sniper[0], Caster[0], Specialist[0], Defender[0], Medic[0]);
			All[1] = Guard[1].concat(Vanguard[1], Supporter[1], Sniper[1], Caster[1], Specialist[1], Defender[1], Medic[1]);
			All[2] = Guard[2].concat(Vanguard[2], Supporter[2], Sniper[2], Caster[2], Specialist[2], Defender[2], Medic[2]);
			All[3] = Guard[3].concat(Vanguard[3], Supporter[3], Sniper[3], Caster[3], Specialist[3], Defender[3], Medic[3]);
}
function accept(){
	var toast = (((((event.target.parentElement).parentElement).previousElementSibling).firstChild));
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
		var crc = (((((event.target.parentElement).parentElement).previousElementSibling).previousElementSibling));
		var og = (crc.firstChild).firstChild;
		var pog = (crc.firstChild).nextElementSibling.firstChild;
			og.disabled = false;
			og.innerText = "Roll";
			og.className = "";
			pog.disabled = true;
			pog.className = "LockButtonRESET";
	}
}
var CN = 1;
var RR = "r1";