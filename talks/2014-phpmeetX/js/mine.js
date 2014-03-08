function readTextFile(id, file) {
    var fp = new XMLHttpRequest();
    fp.open("GET", file, true);
    //fp.send(); // BUG: this code run outside the block but not inside
    console.log(fp.responseText);
    document.getElementById(id).innerHTML=fp.responseText;
}

//readTextFile('init', 'pre/init')

var fp = new XMLHttpRequest();

fp.open('GET', 'pre/install', false); fp.send();
document.getElementById("install").innerHTML=fp.responseText;

fp.open('GET', 'pre/diff', false); fp.send();
document.getElementById("diff").innerHTML=fp.responseText;

fp.open('GET', 'pre/config', false); fp.send();
document.getElementById("config").innerHTML=fp.responseText;

fp.open('GET', 'pre/config-list', false); fp.send();
document.getElementById("config-list").innerHTML=fp.responseText;


fp.open('GET', 'pre/commands', false); fp.send();
var word="<p>";
var ftag=false;
var cco=0, cpo=0, cpl=0;
for(var i=0; i < fp.responseText.length; i++) {
    switch(fp.responseText[i]){
	case "\n":
	  if(ftag){
	      word+="</span>";
	      ftag=false;
	  }
	  word+=" · ";
	  cco++;
	  break;
	case "@": cpo++; word+='<span id="porcelain">'; ftag=true; break;
	case "#": cpl++; word+='<span id="plumbing">'; ftag=true; break;
	default: word += fp.responseText[i];
    }
}

document.getElementById("clist").innerHTML=word+"</p>"+cco+" commands, "+cpo+" porecelain, "+cpl+"plumbing";


// fp.open('GET', 'pre/init', false); fp.send();
// document.getElementById("init").innerHTML=fp.responseText;

fp.open('GET', 'pre/add', false); fp.send();
document.getElementById("add").innerHTML=fp.responseText;

fp.open('GET', 'pre/commit', false); fp.send();
document.getElementById("commit").innerHTML=fp.responseText;

// fp.open('GET', 'pre/branch', false); fp.send();
// document.getElementById("branch").innerHTML=fp.responseText;

fp.open('GET', 'pre/checkout', false); fp.send();
document.getElementById("checkout").innerHTML=fp.responseText;

// fp.open('GET', 'pre/merge', false); fp.send();
// document.getElementById("merge").innerHTML=fp.responseText;
