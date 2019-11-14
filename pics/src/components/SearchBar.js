import React from "react";

class SearchBar extends React.Component {

  /* term is defaulted to empty string */
  state = { term: "" };

  onFormSubmit(event) {
    /** If will keep the browser from submitting the form automatically. 
        By default, the browser submits the form when we hit "enter"/"return" key.
    */
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={event => this.onFormSubmit(event)} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* 
                Note: this.onInputChange does not have parentheses. We don't put
                parentheses for any callback function passed to any event handler such as onChange.
                this.onInputChange - called when the onChange event is triggered.
                this.onInputChange() - called everytime the component is rendered.
            */}
            <input
              type="text"
              value={this.state.term}
              onChange={event => this.setState({ term: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
