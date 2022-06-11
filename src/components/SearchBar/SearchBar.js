import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    };
    const sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    };
    this.sortByOptions.bind(this)
    this.handleLocationChange.bind(this)
    this.handleTermChange.bind(this)
    this.handleSearch.bind(this)
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return "active";
    }
    return "";
  }

  handleSortByChange(sortByOption) {
    this.setState({ ...this.state, sortBy: sortByOption });
  }
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <l1 key={sortByOptionValue} className={this.getSortByClass()} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
          {sortByOption}
        </l1>
      );
    });
  }

  handleTermChange(event) {
    this.setState({...this.state, term: event.target.value})
  }

  handleLocationChange(event) {
    this.setState({...this.state, location: event.target.value})
  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
    event.preventDefault();

  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div onClick={this.handleSearch} className="SearchBar-submit">
          <a href="#">Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
