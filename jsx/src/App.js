// Create a react component named App
function App () {
    const buttonText = {text: 'Click me!'}
    
    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor:'blue', color:'white'}}>
                {buttonText.text}
            </button>
        </div>
    );
};

const message = 'Hi there!'


// named export.
export {message};

// A file can only have a single 'default' export.
export default App;