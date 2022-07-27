import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('')
  const [debouncedText, setDebouncedText] = useState(text)

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log('setDebounced')
      setDebouncedText(text);
    }, 500);

    return () => {
      console.log('clearTimeout')
      clearTimeout(timerId)
      console.log("clear")
    }
  // ↓this useEffect will be fired only when 'text' is updated.
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      console.log('New language or text');
      console.log(language)
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2',
      {},
      {
        params: {
          q: debouncedText,
          target: language.value,
          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
        }
      })
      // .then(
      //   (response) => {
      //     console.log("response")
      //     console.log(response)
      //   }
      // )
      console.log('____data')
      console.log(data)
      setTranslated(data.data.translations[0].translatedText)
    };
    doTranslation();
  }, [language, debouncedText]
  );

  return (
    <div>
      <h1>{translated}</h1>
    </div>
  );
};

export default Convert;
