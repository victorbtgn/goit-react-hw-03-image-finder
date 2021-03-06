import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  inputChange = ({ currentTarget: { value } }) => {
    this.setState({
      query: value,
    });
  };

  setQuery = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state.query);
    this.reset();
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.setQuery}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.inputChange}
          />
        </form>
      </header>
    );
  }
}
