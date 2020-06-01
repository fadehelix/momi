import React from 'react';

import './Context.scss';


const markPhrase = (string, phrase) => {
  const regExp = new RegExp(phrase);
  return string.replace(regExp, `<span class="Context__phrase">${phrase}</span>`)
};

const createMarkup = (markup) => ({__html: markup});

const Context = props => {

  const {text, phrase} = props;

  return (
    <div className="Context" dangerouslySetInnerHTML={createMarkup(markPhrase(text, phrase))} />
  );
}

export default Context;