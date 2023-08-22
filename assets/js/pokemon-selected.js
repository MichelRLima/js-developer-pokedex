const pokemon = document.getElementById("pokemonList");
const voltar = document.getElementById("sair")
pokemon.addEventListener('click', (event) => {
    const pokemonElemento = event.target.closest('li')
    if (pokemonElemento) {
        const detalhes = document.querySelector('.detalhes');

        const number = pokemonElemento.querySelector('.number').textContent;
        const name = pokemonElemento.querySelector('.name').textContent;
        const types = Array.from(pokemonElemento.querySelectorAll('.type')).map(type => type.textContent);
        const imgSrc = pokemonElemento.querySelector('img').getAttribute('src');

        const pokemonInfo = {
            number: number,
            name: name,
            types: types,
            imgSrc: imgSrc
        };
        console.log(pokemonInfo.types)
        console.log(pokemonInfo)
        detalhes.querySelector('.number').innerHTML = pokemonInfo.number
        detalhes.querySelector('.name').innerHTML = pokemonInfo.name
        detalhes.querySelector('img').setAttribute('src', pokemonInfo.imgSrc)
        detalhes.classList.add(pokemonInfo.types[0])
        detalhes.classList.add('selected')


    }
});


voltar.addEventListener('click', () => {
    const detalhes = document.querySelector('.detalhes');

    detalhes.className = '';
    detalhes.classList.add('detalhes')

})

/*
 const liElement = event.target.closest('li');

    

    const pokemonInfo = {
        number: number,
        name: name,
        types: types,
        imgSrc: imgSrc
    };

    console.log(pokemonInfo);
    //window.location.href = '../assets/selected.html';
    */