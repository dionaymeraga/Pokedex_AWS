import PokemonCardComp from "@/components/pokemonCardComp";
import PokeNavBar from "@/components/pokeNavBarComp";


export default function Home() {
 const testData = {
   pokemonNumber: 1,
   pokemonName:"poke1",
   pokemonType:["Water"],
   mainImage:"https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png"
 };


 return (
   <>
     <PokeNavBar></PokeNavBar>
     <PokemonCardComp pokemon={testData}></PokemonCardComp>
   </>
 );
}
