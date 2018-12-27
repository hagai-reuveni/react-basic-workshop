import React from 'react'
import { SearchContext } from '../contexts/SearchContext'

import SearchBox from './SearchBox'
export default () => (
  <SearchContext.Consumer>{
    ({ searchTerm }) =>( 
    <div className="header" style={{display: 'flex', justifyContent:'space-between'}}>
      <SearchBox/>
      <span>{ `Current Search Query: ${searchTerm}` }</span>
    </div>)}
  </SearchContext.Consumer>)