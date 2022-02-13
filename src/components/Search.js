import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term)
  // const [term, setTerm] = useState('');
  const [results, setResults] = useState([])
  console.log(results)

  console.log("I run everytime")

  useEffect(() => {
    // this setTimeout will be called without calling timerId
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId)
      console.log("clear")
    }
    // ↓this useEffect will be fired only when 'term' is updated.
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        // const { data } = await axios.get('http://localhost:3001/',{

        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        }
      })

      // const hoge = setTimeout((setResults(data.query.search), 500))
      // clearTimeout(hoge)
      console.log("searching")
      setResults(data.query.search)
    }
    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm])


  // useEffect(()=> {
  //     // async can't be used as an argument here.
  //     // console.log("useEffect Called")
  //     console.log("I only run after data changes and at initial render")
  //     const search = async () => {
  //         const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
  //         // const { data } = await axios.get('http://localhost:3001/',{

  //             params: {
  //                 action: 'query',
  //                 list: 'search',
  //                 origin: '*',
  //                 format: 'json',
  //                 srsearch: term,
  //             }
  //         })

  //         // const hoge = setTimeout((setResults(data.query.search), 500))
  //         // clearTimeout(hoge)
  //         console.log("searching")
  //         setResults(data.query.search)
  //     }

  //     if (term && !results.length) {
  //         search();
  //     } else {
  //         const timeoutId = setTimeout(()=>{
  //             if (term) {
  //                 search();
  //             }
  //         }, 1000)

  //         return () => {
  //             clearTimeout(timeoutId)
  //             console.log("clear")
  //         }
  //     }



  //     // console.log("initial render or term was changed")

  //     // return () => {
  //     //     console.log("clean up")
  //     // }
  // }, [term, results.length]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          {/* {result.snippet} */}
        </div>
      </div>

    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  )
};

export default Search;