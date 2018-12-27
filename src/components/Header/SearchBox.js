import React from 'react'
import { SearchContext } from '../contexts/SearchContext';
// import PropTypes from 'prop-types'
export default class SearchBox extends React.Component {
  
  // static propTypes = {
  //   doSearch: PropTypes.func.isRequired,
  //   onSearchChange: PropTypes.func.isRequired,
  // }
  static contextType = SearchContext;

  constructor(props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  onKeyDown(e) {
    if (e.key === 'Enter') {
      const { doSearch } = this.context
      doSearch(e)
    }
  }

  render() {
    return (
      <form onSubmit={this.context.doSearch}>
        <input
          className="input"
          type="text"
          placeholder="Search for a show"
          onChange={this.context.onSearchChange}
          onKeyDown={this.onKeyDown}
        />
        <input type="submit" value="SEARCH" />
      </form>
    )
  }
}