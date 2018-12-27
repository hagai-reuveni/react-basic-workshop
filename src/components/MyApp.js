import React from 'react'
import List from './List/List'
import Header from './Header/Header'
import { SearchContext } from './contexts/SearchContext'

class MyApp extends React.Component {
  constructor(props){
    super(props)
    this.onSearchChange = 
    this.state = {
      shows: [],
      searchTerm: '',
      doSearch: this.doSearch.bind(this),
      onSearchChange: this.onSearchChange.bind(this),
    }
  }

  componentDidMount() {
    this.setState((state, props) => ({
      searchTerm: 'Oath'
    }), () => this.doSearch())
  }

  onSearchChange(e) {
    const searchTerm = e.target.value
    this.setState((state, props) => ({
      searchTerm
    }), () => console.log('this.state: ', this.state))
  }
  
  doSearch(e) {
    if (e) { e.preventDefault() }
    const { searchTerm } = this.state
    fetch(
      `http://api.tvmaze.com/search/shows?q=${encodeURI(searchTerm)}`,
      {mode: 'cors'}
    )
      .then(res => res.json())
      .then(data => this.setState(() => ({ shows: data})))
      .catch(() =>  this.setState(() => ({ shows: []})))
  }


  render () {
    return (
      <div>
        <SearchContext.Provider value={this.state}>
          <Header/>
        </SearchContext.Provider>
        {this.state.shows.length && <List shows={ this.state.shows }/>}
        {
          !this.state.shows.length && 
          <div style={{display: 'flex', justifyContent: 'center', marginTop:'50px' }}>Nothing yet</div>
        }
      </div>
    )
  }
}

export default MyApp
