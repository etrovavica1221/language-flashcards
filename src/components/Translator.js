import React /*{ useState, useEffect }*/ from 'react';
//import cookie from "react-cookies";
import { googleTranslate } from "../utils/googleTranslate";
import '../styles/Translator.css';

const Translator = ({ userState, valueState, setValueState }) => {
  if (valueState.initialPhrase){
    googleTranslate.translate(valueState.initialPhrase, userState.translateTo, function(err, translation) {
      
      setValueState({
        initialPhrase: valueState.initialPhrase,
        translatedPhrase: translation.translatedText,
      })
    })
  };
  //console.log(valueState.initialPhrase)
    return (
      <textarea type="text" placeholder="Translated phrase..." value={valueState.translatedPhrase} required name="translatedPhrase"/>        
    );
};

export default Translator; 

/*const Translator = ({ userState, valueState }) => {

  // const [languageCodes, setlanguageCodes] = useState([]);
  // const [language, setLanguage] = useState(cookie.load("language") ? cookie.load("language") : "en",)
  //const [question, setQuestion] = useState(cookie.load("question")
  //? cookie.load("question"):"")

  let translatedPhrase = "";
  // useEffect(() => {
  //   googleTranslate.getSupportedLanguages("en", function(err, languageCodes) {
  //     getLanguageCodes(languageCodes); // use a callback function to setState
  //   });

  //   const getLanguageCodes = languageCodes => {
  //     setlanguageCodes(languageCodes);
  //   }
  // });

    // const translating = translatedPhrase => {
    //    if (question !== translatedPhrase) {
    //      setQuestion(translatedPhrase);
    //      cookie.save("question", translatedPhrase, { path: "/" });
    //    }
    //  };

      if (valueState.initialPhrase){
        googleTranslate.translate(valueState.initialPhrase, userState.translateTo, function(err, translation) {
        console.log(err)
        console.log(translation)
        translatedPhrase = translation.translatedText;
      })
  };

  // const changeHandler = language => {
  //   let cookieLanguage = cookie.load("language");
  //   let transQuestion = "";

  //   const translating = transQuestion => {
  //     if (question !== transQuestion) {
  //       setQuestion(transQuestion);
  //       cookie.save("question", transQuestion, { path: "/" });
  //     }
  //   };

  //   // translate the question when selecting a different language
  //   if (language !== cookieLanguage) {
  //     googleTranslate.translate(question, language, function(err, translation) {
  //       transQuestion = translation.translatedText;
  //       translating(transQuestion);
  //     });
  //   }

  //   setLanguage(language);
  //   cookie.save("language", language, { path: "/" });
  // }
  console.log(translatedPhrase)
    return (
      <div>
      <form id="translation-form" action="submit">
        <input type="text" placeholder="Translated phrase..." value={translatedPhrase} required name="translatedPhrase"/>        
      </form>

      </div>
    );

};*/
 

/* <div>
<input type="text" value={valueState.value} required name="translatedPhrase"/>
<select
  className="select-language"
  value={language}
  onChange={e => {changeHandler(e.target.value)}}
>
  {languageCodes.map(lang => (
    <option key={lang.language} value={lang.language}>
      {lang.name}
    </option>
  ))}
</select>
</div> */