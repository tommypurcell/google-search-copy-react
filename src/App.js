import logo from './logo.svg'
import './App.css'

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
      <span className="num-results">37 Results</span>
      <div className="wrapper">
        <div className="search-result">
          <span>www.w3schools.com</span>
          <div>
            <a href="https://developer.mozilla.org/en-US/">
              <h2>Tutorial - W3School</h2>
            </a>
          </div>
          <div>
            <p>
              Well organized and easy to understand Web building tutorials with
              lots of examples of how to use HTML, CSS, JavaScript, SQL...
            </p>
            <ul>
              <li>
                <a href="https://www.w3schools.com/js/js_intro.asp">
                  JavaScript Introduction
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/js/js_functions.asp">
                  JS Functions
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/js/js_examples.asp">
                  JavaScript Examples
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="search-result">
          <span>developer.mozilla.org</span>
          <div>
            <a href="https://developer.mozilla.org/en-US/">
              <h2>JavaScript | MDN</h2>
            </a>
          </div>
          <div>
            <p>
              JavaScript is the programming language of the Web. JavaScript is
              easy to learn. This tutorial will teach you JavaScript from basic
              to advanced. Start learning ...
            </p>
            <ul>
              <li>
                <a href="https://www.w3schools.com/js/js_examples.asp">
                  JavaScript Operator
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/js/js_examples.asp">
                  JavaScript Code
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/js/js_examples.asp">
                  JavaScript Meaning
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
