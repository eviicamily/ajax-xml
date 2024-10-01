//endereço
const xmlURL = 'sistemap.xml';

function buscarXML(){
    fetch(xmlURL)
    .then(response => response.text())
    .then(data => {
        //converter tcto em DOM 
        let parser = new DOMParser():
        let xml = parser.parseFromString(data,"application/xml");
    //extrair os dados desejados 
    let noticias = xml.getElementsByTagName("url");
    //elementos para exibir as noticias 
    let manchetesContainer = document.getElementById("manchetes")
     manchetesContainer.innerHTML = ""; //limpa a div 

    //vamos  percorrer a lista usando for 
    for (let i = 0; i <noticias.length; i++)
        let loc = noticias[i].getElementsByTagName
    }
}