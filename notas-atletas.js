let atletas = [
    {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
    },
    {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
    },
    {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
    }
];

function calcularMedia(){
    let soma = 0;
    let media = 0;

    function ordenar(a, b){
        return a - b;
    }

    atletas.forEach((elemento) => {
        let notas = elemento.notas.sort(ordenar).slice(1, elemento.notas.length - 1);
        
        notas.forEach((elemento) => {
            soma += elemento;
        })
        console.log(soma)
        media = soma / notas.length;
        elemento.media = media;
        soma = 0;

        return console.log(`\nAtleta: ${elemento.nome}\nNotas obtidas: ${elemento.notas}\nMédia Válida: ${elemento.media}`);
    })

}

calcularMedia()