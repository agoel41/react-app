import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  /** initialize images to empty array */
  state = { images: [] };

  // async onSearchSubmit(term) {
  onSearchSubmit = async term => {
    /** Make a request to unsplash REST API using axios library */
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    /** Setting state after Async REST API request */
    this.setState({ images: response.data.results });
  };

  /* At line #24, "onSubmit" can be any name. We can name events uniquely on the 
     React components we created.
  */
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
