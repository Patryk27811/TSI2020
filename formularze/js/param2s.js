let awatar=params.awatar;
document.getElementById("login").innerHTML = decodeURIComponent(params.login);
document.getElementById("pass").innerHTML = decodeURIComponent(params.pass);
document.getElementById("awatar").innerHTML = decodeURIComponent(params.awatar);
switch(awatar){
case 1:
    document.getElementById("awatar").innerHTML = document.write("<img src='/img/awatar1.jpg'/>");
};

document.getElementById("name").innerHTML = decodeURIComponent(params.name);
document.getElementById("last_name").innerHTML = decodeURIComponent(params.last_name);
document.getElementById("wiek").innerHTML = decodeURIComponent(params.wiek);
document.getElementById("du").innerHTML = decodeURIComponent(params.du);
document.getElementById("phone").innerHTML = decodeURI(params.phone);
document.getElementById("email").innerHTML = decodeURIComponent(params.email);
document.getElementById("wojewodztwa").innerHTML = decodeURIComponent(params.wojewodztwa);
document.getElementById("city").innerHTML = decodeURIComponent(params.city);
document.getElementById("ul").innerHTML = decodeURIComponent(params.ul);
document.getElementById("pcode").innerHTML = decodeURIComponent(params.pcode);
document.getElementById("nr").innerHTML = decodeURIComponent(params.nr);
document.getElementById("kwls").innerHTML = decodeURIComponent(params.kwls);
document.getElementById("cocz").innerHTML = decodeURIComponent(params.cocz);
document.getElementById("plc").innerHTML = decodeURIComponent(params.plc);
document.getElementById("height").innerHTML = decodeURIComponent(params.height);
document.getElementById("sport").innerHTML = decodeURIComponent(params.sport);
document.getElementById("wyrobalkoholowy").innerHTML = decodeURIComponent(params.wyrobalkoholowy);
document.getElementById("ksredniaszkola").innerHTML = decodeURIComponent(params.ksredniaszkola1) + " " + decodeURIComponent(params.ksredniaszkola2) + " " + decodeURIComponent(params.ksredniaszkola3);
document.getElementById("spr").innerHTML = decodeURIComponent(params.spr);
document.getElementById("urzwyb").innerHTML = decodeURIComponent(params.urzwyb);
document.getElementById("dystro").innerHTML = decodeURIComponent(params.dystro);
document.getElementById("podszkola").innerHTML = decodeURIComponent(params.podszkola);
document.getElementById("kpodszkola").innerHTML = decodeURIComponent(params.kpodszkola1) + " " + decodeURIComponent(params.kpodszkola2) + " " + decodeURIComponent(params.kpodszkola3);
document.getElementById("sredniaszkola").innerHTML = decodeURIComponent(params.sredniaszkola);
document.getElementById("wyzszaszkola").innerHTML = decodeURIComponent(params.wyzszaszkola);
document.getElementById("kier").innerHTML = decodeURIComponent(params.kier);