import React from 'react';

import useMarkText from '../../../hooks/useMarkText';

import './Context.scss';

const createMarkup = (markup) => ({__html: markup});

const Context = props => {

  const {text, phrase} = props;

  return (
    <div className="Context" dangerouslySetInnerHTML={createMarkup(useMarkText(text, phrase))} />
  );
}

export default Context;