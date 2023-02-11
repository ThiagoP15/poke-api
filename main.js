const pokeNome = document.getElementById("poke_nome");
const pokeNumero = document.getElementById("poke_numero");
const pokeImagem = document.getElementById("poke_imagem");
const form = document.getElementById("input_pesquisa");
const btns = document.getElementById("buttons");

let pesquisaPoke = 1;

const fetchPoke = async (pokemon) => {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if (API.status === 200){
        const data = API.json()
        return data
    }
}


const data = fetchPoke(pokemon);

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
