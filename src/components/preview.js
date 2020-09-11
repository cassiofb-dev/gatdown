import React from 'react';
import Marked from 'marked';

const Preview = props => (
  <div className='preview' dangerouslySetInnerHTML={{__html: Marked(props.markdown)}} />
);

export default Preview;