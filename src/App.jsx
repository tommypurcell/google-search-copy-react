import logo from './logo.svg'
import './App.css'

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

function App() {
  return (
    <>
      <div className="navigation">
        <img src="images/google.png" alt="google-image" className="logo" />
        <form>
          <input type="text" />
          <button className="search-button">Search</button>
        </form>
      </div>
      <span className="num-results">{data.length} Results</span>
      <div className="wrapper">
        {/* Start of single result */}
        {/* map array of object with results */}
        {data.map((result, index) => (
          <div key={index} className="search-result">
            <span>{result.url}</span>
            <div>
              <a href={result.url}>
                <h2>{result.title}</h2>
              </a>
            </div>
            <div>
              <p>{result.description}</p>
              <ul>
                {/* map array of objects with links */}
                {result.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        {/* End of single result */}
      </div>
    </>
  )
}

export default App
