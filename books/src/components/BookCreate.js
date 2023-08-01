import { useState } from 'react';

function BookCreate({ onCreate }) {

    // title piece of state.
    const [title, setTitle] = useState('');

    // Event handler.
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    // Event handler
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    };

    return (
        <div className="book-create">
            <h3> Add a Book</h3>
            <form onSubmit={handleSubmit} >
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Create!</button>
            </form>
        </div>
    );
}

export default BookCreate;