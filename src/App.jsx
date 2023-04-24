import logo from './logo.svg'
import Result from './Result'
import './App.css'
import { useState } from 'react'
import axios from 'axios'

function App() {
  // states
  const [results, setResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  // function
  //  takes a string parameter then returns an array from the data array that contains only results where the string parameter can be found in either the title, description or url of the element.
  function setValue(str) {
    setSearchTerm(str)
  }

  // search function is called when form is submitted
  function search(e, str) {
    e.preventDefault()
    let matchingResults = []

    // if search bar is empty dont show any results
    if (str == '') {
      let emptyArr = []
      setResults(emptyArr)
    }

    console.log(results)
    // call api search which will change state variable results
    apiSearch()
    console.log(results)
  }

  // access api
  const apiSearch = async () => {
    let searchResult = await axios.get(
      'https://project-google-search-api-demo.herokuapp.com/results',
      {
        params: {
          search: searchTerm,
        },
      }
    )
    setResults(searchResult.data)
    console.log(results)
  }

  // return
  return (
    <>
      <div className="navigation">
        <img src="images/google.png" alt="google-image" className="logo" />
        <form onSubmit={(e) => search(e, searchTerm)}>
          <input
            type="text"
            name="searchBar"
            onKeyUp={(e) => setValue(e.target.value)}
          />

          <button className="search-button">Search</button>
        </form>
      </div>
      <span className="num-results">{results.length} Results</span>
      <div className="wrapper">
        {/* Start of single result */}
        {/* map array of object with results */}
        {results.map((result, index) => (
          <Result result={result} key={index} />
        ))}
        {/* End of single result */}
      </div>
    </>
  )
}

export default App
