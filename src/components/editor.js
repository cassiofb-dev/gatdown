import React from 'react';

const Editor = props => (
  <textarea className="editor"
    value={props.markdown}
    onChange={props.onChange}
    type="text"/>
);

export default Editor;