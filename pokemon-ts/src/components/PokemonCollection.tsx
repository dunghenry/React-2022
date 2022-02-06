import React from 'react';
import { Pokemon } from '../interface'
import PokemonList from './PokemonList';
import './pokemon.css'
interface Props {
    pokemons: Pokemon[]

}
const PokemonColection: React.FC<Props> = (props) => {
    const { pokemons } = props;
    return (<div>
        <section className="collection-container">
            {pokemons.map((pokemon) =>{
                return(
                    <div className="" key={pokemon.id}>
                        <PokemonList id={pokemon.id} name={pokemon.name} image={pokemon.sprites.front_default}/>
                    </div>
                )
            })}
        </section>
    </div>
    )

};

export default PokemonColection;
