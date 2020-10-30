var doorStatus=0;
var pisoActual=3;
var totalPisos=6; 

function abrirPuerta(){
    if(doorStatus==0)
    doorStatus=1;
    else
    console.log("La puerta ya esta abierta");
}

function cerrarPuerta(){
    if(doorStatus==1)
    doorStatus=0;
    else
    console.log("Ya esta cerrada la puerta");
}

function subirPiso(){
    if(doorStatus==0){
        if(pisoActual!=totalPisos)
        pisoActual++;
        else
        console.log("Estas en el ultimo piso");
    }else{
        console.log("Por seguridad, cierra la puerta");
    }
}

function bajarPiso(){
    if(doorStatus ==0){
        if(pisoActual!=1)
        pisoActual--;
        else
        console.log("Estas en el primer piso");
    }else{
        console.log("Por seguridad, cierra la puerta");
    }
}
function estado(){
    if(doorStatus==1)
    console.log("Piso "+pisoActual+" de "+totalPisos+" Puerta abierta");
    else
    console.log("Piso "+pisoActual+" de "+totalPisos+" Puerta cerrada"); 
}

function elegirpiso(destino){
    if(doorStatus==0){
        console.log(pisoActual);
        if(pisoActual<destino){
            for(let i=pisoActual;i<destino;i++){
                subirPiso();
                console.log(pisoActual);   
            } 
            abrirPuerta();
        }else{
            if(pisoActual==destino)
            console.log("Ya estas en este piso"); 
            else{
                for(let i=pisoActual; i>destino;i--){
                    bajarPiso();
                    console.log(pisoActual); 
                }
                abrirPuerta();
            }
        }
    }else{
        console.log("Por seguridad, cierra la puerta");
    }
}
module.exports={
    estado: estado,
    irA: elegirpiso,
    abrir: abrirPuerta,
    cerrar: cerrarPuerta
};
