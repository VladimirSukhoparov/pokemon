import { fillPokemonCard,getPokemonByNameOrId, cards} from './const.js';

const btn = document.querySelector('.poke_ball');




if(cards!=0){cards.forEach((el)=>{fillPokemonCard(el)})};

btn.addEventListener('click', async (event) => {
    const randomId=Math.floor(Math.random()*100);


    try{
        event.preventDefault()
        const pokemon = await getPokemonByNameOrId(randomId);
      fillPokemonCard(pokemon);

      cards.push(pokemon)
      localStorage.setItem('card', JSON.stringify(cards)); 
      

      }catch(error){
          alert(error.message);
      }    
   
 });
