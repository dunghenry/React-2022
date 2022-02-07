import React from 'react';
import { Pokemon, PokemonDetail } from '../interface'
import PokemonList from './PokemonList';
import './pokemon.css';
import { Detail } from '../App'
interface Props {
    pokemons: PokemonDetail[];
    viewDetail: Detail;
    setDetail: React.Dispatch<React.SetStateAction<Detail>>

}
const PokemonColection: React.FC<Props> = (props) => {
    const { pokemons, viewDetail, setDetail } = props;
    const selectPokemon = (id: number) => {
        if (!viewDetail.isOpened) {
            setDetail({
                id: id,
                isOpened: true,
            })
        }
    }
    return (<>
        <section className={
            viewDetail.isOpened
                ? "collection-container-active"
                : "collection-container"
        }>
            {viewDetail.isOpened ? (
                <div className="overlay"></div>
            ) : (
                <div className=""></div>
            )}
            {pokemons.map((pokemon) => {
                return (
                    <div className="" key={pokemon.id} onClick={() => selectPokemon(pokemon.id)}>
                        <PokemonList viewDetail={viewDetail} setDetail={setDetail} id={pokemon.id} name={pokemon.name} image={pokemon.sprites.front_default} abilities={pokemon.abilities} />
                    </div>
                )
            })}
        </section>
    </>
    )

};

export default PokemonColection;
