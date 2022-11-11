function reyes(){
    var dia=prompt("Escribe el dia");
    var mes=prompt("Escribe el mes");
    var ano=prompt("Escribe el año");
    var d = new Date(ano,mes,dia);
    var anorey=d.getFullYear();
    if(d.getDate()<6 && d.getMonth()==1){
        
    }else{
        anorey=anorey+1;
    }
    let ms = 1000 * 60 * 60 * 24;
    const fechaReyes=new Date(anorey,01,06)
    var dif=Math.ceil((fechaReyes.getTime()-d.getTime())/ms);
    alert("Quedan "+dif+" dias para reyes");
}

function fechaActual(){
    var d=new Date();
    var year=d.getFullYear();
    var month=d.getMonth();
    var date=d.getDate();
    var dia=d.getDay();
    var hour=d.getHours();
    var min=d.getMinutes();
    var nomDia;
    var nomMes;
    switch(dia){
        case 0:
            nomDia="Domingo";
        break;
        case 1:
            nomDia="Lunes";
        break;
        case 2:
            nomDia="Martes";
        break;
        case 3:
            nomDia="Miercoles";
        break;
        case 4:
            nomDia="Jueves";
        break;
        case 5:
            nomDia="Viernes";
        break;
        case 6:
            nomDia="Sabado";
        break;
    }
    switch(month){
        case 0:
            nomMes="Enero";
        break;
        case 1:
            nomMes="Febrero";
        break;
        case 2:
            nomMes="Marzo";
        break;
        case 3:
            nomMes="Abril";
        break;
        case 4:
            nomMes="Mayo";
        break;
        case 5:
            nomMes="Junio";
        break;
        case 6:
            nomMes="Julio";
        break;
        case 7:
            nomMes="Agosto";
        break;
        case 8:
            nomMes="Septiembre";
        break;
        case 9:
            nomMes="Octubre";
        break;
        case 10:
            nomMes="Noviembre";
        break;
        case 11:
            nomMes="Diciembre";
        break;
    }
    alert("Hoy es "+nomDia+", "+date+" de "+nomMes+" de "+year+" y son las "+hour+":"+min); 
}
var rad=document.getElementById('radio').value
function calcularAreaCirculo(){
    var ra = parseInt(rad)
    var area=Math.PI*Math.pow(ra,2);
    var per=2*Math.PI*ra;
    var area2decimales=area.toFixed(2);
    var per2decimales=per.toFixed(2);
    alert("Tiene "+area2decimales+" m de area y "+per2decimales+" m de perimetro");
}
function calcularAleatorio(){
    var prin=prompt("Escribe first");
    var fin=prompt("Escribe final");
    max=Math.floor(fin);
    min=Math.ceil(prin);
    var random=Math.random() * (max - min) + min;
    var randomDec=random.toFixed(2);
    alert(randomDec);
}
function contarVocales(){
    var texto=prompt("Escribe el texto");
    var mit=texto.charAt(texto.length/2);
    var ult=texto.charAt(texto.length);
    var inv=texto.split("").reverse();
    var gui;
    var vocales="aeiou";
    var contVoc=0;
    for(var i=0;i<texto.length;i++){
        if(vocales.includes(texto.charAt(i))==true){
            contVoc++
        }
        if(i!=texto.length-1){
            gui=gui+texto.charAt(i)+"-"
        }else{
            gui=gui+texto.charAt(i)
        }
    }
    alert("Como caracter de la mitad "+mit+", como ultimo caracter "+ult+", como ultimo caracter "+ult+", como inverso "+inv+", separado en guiones "+gui+", numero de vocales "+contVoc);
}
