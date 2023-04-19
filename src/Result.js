function Result({ result, index }) {
  return (
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
  )
}

export default Result
