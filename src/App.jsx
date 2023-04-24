import logo from './logo.svg'
import Result from './Result'
import './App.css'
import { useState } from 'react'
import Result from './Result'

function App() {
  // states
  const [results, setResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  // data
  let data = [
    {
      title: 'JS testing',
      description: 'The best JavaScript tutorials in the galaxy!',
      url: 'www.testing.com',
      links: [
        {
          title: 'JS for Beginner tests',
          url: 'https://www.w3schools.com/js',
        },
        {
          title: 'JS for the Web',
          url: 'https://www.w3schools.com/js',
        },
      ],
    },
    {
      title: 'Tutorial - W3School',
      description:
        'Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL...',
      url: 'developer.mozilla.org',
      links: [
        {
          title: 'JS Introduction',
          url: 'https://www.w3schools.com/js/js_intro.asp',
        },
        {
          title: 'JS Functions',
          url: 'https://www.w3schools.com/js/js_functions.asp',
        },
      ],
    },
    {
      title: 'JavaScript | MDN',
      description:
        'JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced. Start learning ...',
      url: 'developer.mozilla.org',
      links: [
        {
          title: 'JavaScript Operator',
          url: 'https://www.w3schools.com/js/js_examples.asp',
        },
        {
          title: 'JavaScript Code',
          url: 'https://www.w3schools.com/js/js_functions.asp',
        },
        {
          title: 'JavaScript Meaning',
          url: 'https://www.w3schools.com/js/js_functions.asp',
        },
      ],
    },
  ]
  // function
  //  takes a string parameter then returns an array from the data array that contains only results where the string parameter can be found in either the title, description or url of the element.
  function setValue(str) {
    setSearchTerm(str)
  }
  function search(e, str) {
    e.preventDefault()
    let matchingResults = []

    // data.map((result, index) => {
    //   let resultsArray = []
    //   if (result.title.toLowerCase().includes(str.toLowerCase())) {
    //     console.log(result)
    //     // setResults(results.p)

    //     results.push(result)
    //     console.log(matchingResults)
    //     console.log('matching results has been updated')
    //   }
    //   console.log(results)
    //   setResults(results)
    //   // return resultsArray
    // })

    const filteredResults = data.filter((result) =>
      result.title.toLowerCase().includes(str.toLowerCase())
    )
    setResults(filteredResults)

    // if search bar is empty dont show any results
    if (str == '') {
      let emptyArr = []
      setResults(emptyArr)
    }
    console.log(filteredResults)
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
