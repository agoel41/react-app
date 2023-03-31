import './App.css';
import {useState} from 'react';
import AnimalShow from './AnimalShow';


function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'allegator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)];
}


function App () {

    // state system
    const [animals, setAnimals] = useState([]);

    // Arrow function is another way to define a function without using function keyword.
    const handleClick = () => {
        //setAnimals([getRandomAnimal()]);
        setAnimals([...animals, getRandomAnimal()]);
    };

    // Arrow function. 
    // map is a built in function in JS. When we call map, we take every element in an array.
    // and map it to transformation function.
    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });

    return (
        <div>
            <button onClick={handleClick}>Add Animal!</button>
            <div>{renderedAnimals}</div>
        </div>
    );    
}

export default App;