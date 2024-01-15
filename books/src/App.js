import {useState} from 'react';
import BookCreate from './components/BookCreate';

function App() {

    // books piece of state.
    const [books, setBooks] = useState([]);

    // Event handler
    const createBook = (title) => {

        /**
         * Note: When using array don't use push() method as it modifies existing array.
         * For Ex: don't use books.push({id: 123, title: title})
         */

        /** 
            This will copy the books array to the updatedBooks array 
            and then add the new title to the end of the Array.
        **/
        const updatedBooks = [...books, {id: 123, title: title}];
        setBooks(updatedBooks);
    };

    const updateBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) 
                return { ...book, title: newTitle };
                
            return book;

        });

        setBooks(updatedBooks);
    };

    // onCreate is the event/prop and createBook is event handler.
    return (
        <div>
            {books.length}
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;