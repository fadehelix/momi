import React from 'react';

import useMarkText from '../../../hooks/useMarkText';

import './Context.scss';

const Context = props => {

  const {text, phrase} = props;

  return (
    <div className="Context" dangerouslySetInnerHTML={useMarkText(text, phrase)} />
  );
}

export default Context;