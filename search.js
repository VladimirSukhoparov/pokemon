import { fillPokemonCard, getPokemonByNameOrId, cards } from "./const.js";

const form=document.querySelector('.search');

form.addEventListener('submit', async (event)=>{
        event.preventDefault();
        const {
            pokemonName:{value},
        }=event.target;
        if(!value){
            alert('Введите имя покемона')
        }else{
            try{
              const pokemon = await getPokemonByNameOrId(value.toLowerCase());
            fillPokemonCard(pokemon);   

            cards.push(pokemon)
      localStorage.setItem('card', JSON.stringify(cards));
            
            }catch(error){
                alert(error.message);
            }
        }
        
});
 