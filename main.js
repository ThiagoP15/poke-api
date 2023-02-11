const pokeNome = document.getElementById(".poke_nome");
const pokeNumero = document.getElementById(".poke_numero");
const pokeImagem = document.getElementById(".poke_imagem");
const form = document.getElementById(".input_pesquisa");
const btnA = document.getElementById(".button btn-ante");
const btnP = document.getElementById(".button btn-prox")


let pesquisaPoke = 1;

const fetchPoke = async (pokemon) => {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if (API.status === 200){
        const data = API.json()
        return data
    }
}
const visualizaPoke = async (pokemon) => {

const data = await fetchPoke(pokemon);

if (data) {
    pokeImagem.style.display = 'block'
    pokeNome.innerHTML = data.name
    pokeNumero.innerHTML = data.id
    pokeImagem.src = data['sprites']['other']['home']['front_default'];
    input.value = '';
    pesquisaPoke = data.id
} else {
    pokeImagem.style.display = 'Erro';
    pokeNome.innerHTML = 'Não encontrado!';
    pokeNumero.innerHTML = '';
}
}

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    visualizaPoke(input.value.toLowerCase())
});


