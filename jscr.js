document.getElementById("rey").onclick = function(){
       var dia=prompt("Escribe el dia");
    var mes=prompt("Escribe el mes");
    var ano=prompt("Escribe el año");
    var d = new Date(ano,mes,dia);
    var anorey=d.getFullYear()+1;
    const fechaReyes=new Date(anorey,01,06)
    if(d.getDate()==6 && d.getMonth()==1){
        anorey=anorey+1;
    }else if(d.getDate()<6 && d.getMonth()==1){
        anorey=anorey-2;
    }
    let ms = 1000 * 60 * 60 * 24;
    var dif=Math.ceil(fechaReyes.getTime()-d.getTime())/ms;
    alert("Quedan "+dif+" dias para reyes");
}

document.getElementById("fechaActual").onclick = function(){
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
function calcularAreaCirculo(radio){
    var ra = Integer.parseInt("radio");
    var area=Math.PI*Math.pow(ra,2);
    var per=2*Math.PI*ra;
    var area2decimales=area.toFixed(2);
    var per2decimales=per.toFixed(2);
    return "Tiene "+area2decimales+" m de area y "+per2decimales+" m de perimetro";
}
function calcularAleatorio(){
    var prin=prompt("Escribe first");
    var fin=prompt("Escribe final");
    max=Math.floor(fin);
    min=Math.ceil(prin);
    var random=Math.random() * (max - min+1) + min;
    var randomDec=random.toFixed(2);
    alert(randomDec);
}
document.getElementById("caraterMitad").onclick = function(){    var a=5;
    alert("Hola");
    //var texto=prompt("Escribe el texto");
    //var mit=parseInt(text.length/2);
    //var sol=text.substring(0,mit);
    alert(a);
}
