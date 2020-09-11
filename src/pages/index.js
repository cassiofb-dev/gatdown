import React from 'react';

import Editor from '../components/editor';
import Preview from '../components/preview';

import '../styles/styles.css';

import placeholder from '../components/placeholder';

const App = () => {

  const [text, setText] = React.useState(placeholder);

  function handleEdit(event) {
    setText(event.target.value);
  }

  return (
    <div className='wrapper'>
      <Editor markdown={text} onChange={handleEdit} />
      <Preview markdown={text} />
    </div>
  );
}

export default App;