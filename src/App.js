import React, { Component } from 'react';
import './App.css';
var marked = require('marked');


const inicialValue = `Welcome to my Markdown Previewer
========================

Lorem ipsum dolor sit amet, consectetur [adipiscing elit](#)

Proin:
 > Vivamus sed augue sed est consequat ultricies!

Nunc ac leo nec nisi rhoncus maximus
-------------------

1. Nullam facilisis, tellus ac ullamcorper porta, lacus libero posuere massa, nec luctus nibh erat ut nisl.
2. Vestibulum pulvinar purus ac molestie vulputate.

Morbi tincidunt scelerisque mollis: \`<div> USuspendisse eget nulla </div> \`
 
\`\`\`
// Pellentesque vitae mollis eros:

function myFunction(value) {
    return value; 
    }
\`\`\`

Proin convallis nisl id **lorem** _convallis_ _**sagittis**_.

## Etiam lacinia velit eros, eget lacinia augue ultricies eu:
- Duis tempor neque sit 
 - amet mauris 
   - elementum ornare.

### Duis luctus:

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/250px-Markdown-mark.svg.png)
`

function getMarked(value){
    //options from documentation of library
    marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  });

  return marked(value);
}



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      input: inicialValue, 
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e){
    console.log(e.target.value)
    this.setState({
      input: e.target.value
    })
  }
  render(){

    return(
      <div id="container">
        <div id="containerEditor" className="containerWindow">
          <h4>Editor</h4>
          <textarea name="" id="editor" value={this.state.input} onChange={this.handleChange} cols="30" rows="10">
</textarea>
        </div>
        
        <div id="containerPreview" className="containerWindow">
          <h4>Preview</h4>
          <div id="preview" dangerouslySetInnerHTML={{__html:getMarked(this.state.input)}}></div>
        </div>
        
      </div>
    )
  }
}

export default App;
