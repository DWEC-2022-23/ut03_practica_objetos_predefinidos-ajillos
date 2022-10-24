function reyesMagos(){
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
	return "Quedan "+dif+" dias para reyes";
}

function fechaActual(){
    var d=new Date();
    var year=d.getFullYear();
    var month=d.getMonth();
    var date=d.getDate();
    var dia=d.getDay();
    var hour=d.getHour();
    var min=d.getMinutes();
    var nomDia;
    var nomMes;
    switch(dia){
        case 0:
            nomDia="Lunes";
        break;
        case 1:
            nomDia="Martes";
        break;
        case 2:
            nomDia="Miercoles";
        break;
        case 3:
            nomDia="Jueves";
        break;
        case 4:
            nomDia="Viernes";
        break;
        case 5:
            nomDia="Sabado";
        break;
        case 6:
            nomDia="Domingo";
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
function calcularAreaCirculo(Radio){
    var ra = Integer.parseInt(Radio);
    var area=Math.PI*Math.pow(ra,2);
    var per=2*Math.PI*ra;
    area2decimales=area.toFixed(2);
    per2decimales=per.toFixed(2);
    return "Tiene "+area2decimales+" m de area y "+per2decimales+" m de perimetro";
}
function calcularAleatorio(){
    var prin=prompt("Escribe first");
    var fin=prompt("Escribe final");
    var random=Math.random() * (fin - prin+1) + prin;
    var randomDec=random.toFixed(2);
    return randomDec;
}


