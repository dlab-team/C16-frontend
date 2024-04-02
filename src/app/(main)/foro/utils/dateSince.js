
//  calcula la diferencia entre la fecha dada y la fecha actual, y luego expresar esa diferencia en una forma legible, como minutos, horas, días, semanas, etc.
export const dateSince = (isoString) => {
    const ahora = new Date();
    const fecha = new Date(isoString);
    const segundos = Math.floor((ahora - fecha) / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const semanas = Math.floor(dias / 7);
    const meses = Math.floor(dias / 30);
    const años = Math.floor(meses / 12);

    if (segundos < 60) {
        return `${segundos} segundos`;
    } else if (minutos < 60) {
        return `${minutos} minutos`;
    } else if (horas < 24) {
        return `${horas} horas`;
    } else if (dias < 7) {
        return `${dias} días`;
    } else if (semanas < 4) {
        return `${semanas} semanas`;
    } else if (meses < 12) {
        return `${meses} meses`;
    } else {
        return `${años} años`;
    }
} 