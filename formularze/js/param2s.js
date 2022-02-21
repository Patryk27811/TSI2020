document.getElementById("login").innerHTML = decodeURIComponent(params.login);
document.getElementById("pass").innerHTML = decodeURIComponent(params.pass);
switch(parseInt(params.awatar)){
    case 1:
    document.getElementById("awatar").innerHTML = "<img src='/formularze/img/awatar1.jpg'/>";
    
    break;
    case 2:
    document.getElementById("awatar").innerHTML = "<img src='/img/awatar2.jpg'/>";
    break;
    case 3:
    document.getElementById("awatar").innerHTML = "<img src='/img/awatar3.jpg'/>";
    break;
    case 4:
    document.getElementById("awatar").innerHTML = "<img src='/img/awatar4.jpg'/>";
    break;
    case 5:
    document.getElementById("awatar").innerHTML = "<img src='/img/awatar5.jpg'/>";
    break;
    case 6:
    document.getElementById("awatar").innerHTML = "<img src='/img/awatar1.jpg'/>";
    break;
};
if(params.kpodszkola1==undefined){
    params.kpodszkola1="";
}
if(params.kpodszkola2==undefined){
    params.kpodszkola2="";
}
if(params.kpodszkola3==undefined){
    params.kpodszkola3="";
}
if(params.ksredniaszkola1==undefined){
    params.ksredniaszkola1="";
}
if(params.ksredniaszkola2==undefined){
    params.ksredniaszkola2="";
}
if(params.ksredniaszkola3==undefined){
    params.ksredniaszkola3="";
}

document.getElementById("name").innerHTML = decodeURIComponent(params.name);
document.getElementById("last_name").innerHTML = decodeURIComponent(params.last_name);
document.getElementById("wiek").innerHTML = decodeURIComponent(params.wiek);
document.getElementById("du").innerHTML = decodeURIComponent(params.du);
document.getElementById("phone").innerHTML = decodeURI(params.phone);
document.getElementById("email").innerHTML = decodeURIComponent(params.email);
document.getElementById("wojewodztwa").innerHTML = decodeURIComponent(params.wojewodztwa);
document.getElementById("city").innerHTML = decodeURIComponent(params.city);
document.getElementById("ul").innerHTML = decodeURIComponent(params.ul);
document.getElementById("pcode").innerHTML=decodeURIComponent(params.pcode)+" - "+decodeURIComponent(params.pcode2);
document.getElementById("nr").innerHTML=decodeURIComponent(params.nr)+" / "+decodeURIComponent(params.nr2);
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
document.getElementById("ocena").innerHTML = decodeURIComponent(params.ocena);
