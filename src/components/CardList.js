import React from 'react';
import Card from './Card'

const CardList = ({ planets }) => {
    return (
        <div>
            {
                planets.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={user.id} 
                            name={user.name} 
                            population={user.population}
                            />
                        );
                    })
                }
        </div>
    );
}

export default CardList;