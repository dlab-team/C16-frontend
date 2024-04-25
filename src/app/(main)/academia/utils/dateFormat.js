
// toma la cadena de fecha en formato ISO 8601 y la convertirá al formato DD/MM/YYY
export const dateFormat = (isoString) => {
    const fecha = new Date(isoString);
    const dia = `0${fecha.getDate()}`.slice(-2); // Asegura dos dígitos para el día
    const mes = `0${fecha.getMonth() + 1}`.slice(-2); // Asegura dos dígitos para el mes
    const año = fecha.getFullYear();
    return `${dia}/${mes}/${año}`;
}