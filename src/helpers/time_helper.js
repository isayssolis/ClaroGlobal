export const unixToTime = (unixTime)=>{
    let unix_timestamp = unixTime;
// Crea nuevo objero tiempo
// multiplica por 1000 para obtener milisegundos
    let date = new Date(unix_timestamp * 1000);
// obtener horas
    let hours = date.getHours();
// Minutos
    let minutes = "0" + date.getMinutes();
// Segundos
    //let seconds = "0" + date.getSeconds();
// Formato 10:30:23 format
    let formattedTime = hours + ':' + minutes.substr(-2);
    // console.log(formattedTime);
    // console.log(date)
    return(formattedTime);
}