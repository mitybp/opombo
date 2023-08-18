export function strFormat(str){
    return str.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll(" ","-")
    .toLowerCase()
    .replaceAll("?","")
    .replaceAll("!","")
    .replaceAll("°","")
    .replaceAll(",","");
}