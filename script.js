var playing=true;

mix();

function hasNextFree(square) {
	num = Number(square.substr(6, square.length));

	if (num > 5) {
		if (isFree(num-5)){
			return num-5;
		}
	}
	if (num <  21) {
		if (isFree(num+5)){
			return num+5;
		}
	}
	if (num!=1 && num!=6 && num!=11 && num!=16 && num!=21) {
		if (isFree(num-1)){
			return num-1
		}
	}
	if (num!=5 && num!=10 && num!=15 && num!=20 && num !=25) {
		if (isFree(num+1)){
			return num+1;
		}
	}

	return 0;
}

function isFree(squareNum) {
	return (document.getElementById('square'+squareNum).className.indexOf('free') >0);
}

function clickOn(square) {
	if (playing) {
		moveTo = hasNextFree(square);

		if (moveTo > 0){
			classeDe = document.getElementById(square).className;
			classeVers = document.getElementById('square'+moveTo).className;

			document.getElementById(square).className = classeVers;
			document.getElementById('square'+moveTo).className = classeDe;

			if (check()) {
				document.getElementById('square25').className = 'tile img25';
				document.getElementById('term').innerHTML="<center><br/><h3>Congratulations !<br/>You win</h3></center>";
				playing = false;
			}
		} else {
			alert('Click on a tile that can move');
		}
	}
}

function check() {
	if ((document.getElementById('square1').className.indexOf('img01') >0) &&
		(document.getElementById('square2').className.indexOf('img02') >0) &&
		(document.getElementById('square3').className.indexOf('img03') >0) &&
		(document.getElementById('square4').className.indexOf('img04') >0) &&
		(document.getElementById('square5').className.indexOf('img05') >0) &&
		(document.getElementById('square6').className.indexOf('img06') >0) &&
		(document.getElementById('square7').className.indexOf('img07') >0) &&
		(document.getElementById('square8').className.indexOf('img08') >0) &&
		(document.getElementById('square9').className.indexOf('img09') >0) &&
		(document.getElementById('square10').className.indexOf('img10') >0) &&
		(document.getElementById('square11').className.indexOf('img11') >0) &&
		(document.getElementById('square12').className.indexOf('img12') >0) &&
		(document.getElementById('square13').className.indexOf('img13') >0) &&
		(document.getElementById('square14').className.indexOf('img14') >0) &&
		(document.getElementById('square15').className.indexOf('img15') >0) &&
		(document.getElementById('square16').className.indexOf('img16') >0) &&
		(document.getElementById('square17').className.indexOf('img17') >0) &&
		(document.getElementById('square18').className.indexOf('img18') >0) &&
		(document.getElementById('square19').className.indexOf('img19') >0) &&
		(document.getElementById('square20').className.indexOf('img20') >0) &&
		(document.getElementById('square21').className.indexOf('img21') >0) &&
		(document.getElementById('square22').className.indexOf('img22') >0) &&
		(document.getElementById('square23').className.indexOf('img23') >0) &&
		(document.getElementById('square24').className.indexOf('img24') >0) &&
		(document.getElementById('square25').className.indexOf('free') >0)) {
		return true;
	}
	return false;
}

function whoIsFree() {
	for (var i=1; i<=25; i++) {
		if (document.getElementById('square'+i).className.indexOf('free')>0) {
			return i;
		}
	}
}

function mix() {
	for (var e=1; e<100; e++) {
		freeOne = Number(whoIsFree());

		cases = [];

		if (freeOne > 5) {
			cases.push(freeOne-5);
		}
		if (freeOne<21) {
			cases.push(freeOne+5);
		}
		if (freeOne!=1 && freeOne!=6 && freeOne!=11 && freeOne!=16 && freeOne!=21) {
			cases.push(freeOne-1);
		}
		if (freeOne!=5 && freeOne!=10 && freeOne!=15 && freeOne!=20 && freeOne!=25) {
			cases.push(freeOne+1);
		}

		rand = Math.floor((Math.random() * cases.length));
		clickOn('square'+cases[rand]);
	}
}




