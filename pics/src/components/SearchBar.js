import './SearchBar.css';
import {useState} from 'react';

function SearchBar({ onSubmit }) {

  // 1. Create a new piece of state
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    // disable default form submission event.
    event.preventDefault();
    onSubmit(term);
  };

  // 4. update the state
  const handleChange = (event) => {
    //console.log(event.target.value);
    setTerm(event.target.value);
  };

  // 2. Create an event handler to watch for the onChange event.
  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit} className='form'>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}


export default SearchBar;
