//Creating the constructor function!

function Q(question,opt1,opt2,opt3,opt4,correctAns){
	this.question = question;
	this.opt1=opt1;
	this.opt2=opt2;
	this.opt3=opt3;
	this.opt4=opt4;
	this.correctAns=correctAns;
};
//creating the quiestion objects!
var question=[];
 question[6]= "khali";
 question[0]="khalii";
 question[1]=new Q("What is Your Nick Name?","Rahul","Prashant","Daya","Other","Rahul");
 question[2]=new Q("What is Your Horoscope?","Aries","Cancer","Leo","Pieces","Pieces");
 question[3]=new Q("In which year were you born","1992","1993","1994","Other","1992");
 question[4]=new Q("Capital of India","Banaras","Mumbai","Chennai","Delhi","Delhi");
 question[5]=new Q("Biggest IT Company of India","Mphasis","TCS","IBM","Infosys","Mphasis");
//	document.getElementById("question").innerHTML=questionOne.question;
//	document.getElementById("opt1").innerHTML =questionOne.opt1;
//	document.getElementById("opt2").innerHTML =questionOne.opt2;
//	document.getElementById("opt3").innerHTML =questionOne.opt3;
//	document.getElementById("opt4").innerHTML =questionOne.opt4;
//}
var userAnswer=[];
var i=0;
var userName;
function seeName(){
	userName=document.forms["myForm"]["userName"].value;
	
}
function saveResult(ans){
	/*if(i==1){
	alert("i=1");
	}*/
	//console.log(ans);
	i++;
	document.getElementById("userN").innerHTML ="Welcome, "+userName;
	document.getElementById("questionNo").innerHTML=i;
	document.getElementById("question").innerHTML=question[i].question;
	document.getElementById("opt1").innerHTML =question[i].opt1;
	document.getElementById("opt2").innerHTML =question[i].opt2;
	document.getElementById("opt3").innerHTML =question[i].opt3;
	document.getElementById("opt4").innerHTML =question[i].opt4;
	userAnswer[i-1]=ans;
	//alert(i);
	//i++;
if(i==6){
		document.getElementById("questionMain").innerHTML ="";
		UserResult();
}
}
/*function UserResult(){
document.getElementById("questionMain").innerHTML="<table><tr><th>Q. No.</th><th>Your Answer</th><th>Correct Answer</th></tr>";
console.log(question[0].correctAns+"see this "+userAnswer[0]);
var j=1;
		for(j=1;j<6;j++){
			console.log(question[j].correctAns+" "+userAnswer[j]);
			document.getElementById("questionMain").innerHTML += "<tr><td>" +j+ "</td><td>" +question[j].correctAns+ "</td><td>" +userAnswer[j]+ "</td></tr>" ;
		}
	document.getElementById("questionMain").innerHTML +="</table>";
}*/
function UserResult(){
var j=1,score=0;
	for(j=1;j<6;j++){
		var st=userAnswer[j];
		
		document.getElementById("questionMain").innerHTML +="<br />Question: "+question[j].question+"<br /> Your Answer: "+question.st+" Correct Answer: "+ question[j].correctAns;
		if(question.st === question[j].correctAns){
			score++;
			console.log(score+" equal at i="+j);
		}
	}
	document.getElementById("body").innerHTML +="Score = "+score+ " out of 5";
}
