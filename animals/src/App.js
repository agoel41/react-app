import {useState} from 'react';

function App () {

    // state system.
    const [count, setCount] = useState(0);

    // Arrow function is another way to define a function without using function keyword.
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button onClick={handleClick}>Add Animal!</button>
            <div>
                Number of Animals: {count}
            </div>
        </div>
    );    
}

export default App;