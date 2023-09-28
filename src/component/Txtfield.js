import React, { useState } from "react";

export default function Txtfield(props) {
  const [text, setText] = useState("Enter text here");

  const handleonclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("set to uppercase","success");
  };

  const handleloclick = () => {
    let newtt = text.toLowerCase();
    setText(newtt);
    props.showAlert("set to lowercase","success");
  };
  const clear = () => {
    let newtt = '';
    setText(newtt);
    props.showAlert("text clear","success");
  };
  const copy = () => {
    
    navigator.clipboard.writeText(text);
    props.showAlert("text copied","success");
  };
  const handleremove = () => {
    let newtt = text.split(/[ ]+/);

    setText(newtt.join(" "));
    props.showAlert("white spaces are Remove","success");
  };


  const textonchange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{color :props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={textonchange}
            style={{backgroundColor:props.mode==='dark'?'#1c2d2a':'white', color :props.mode==='dark'?'white':'#2d265a'}}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button  disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleonclick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleloclick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={clear}>
          Clear
        </button>
        <button  disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={copy}>
          Copy text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleremove}>
          Remove white spaces
        </button>
      </div>

      <div className="container my-2" style={{color :props.mode==='dark'?'white':'#2d265a'}}>
        <h2> Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length}
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minitus to read</p>
        <h2>Preview</h2>
        <p>{text.lenght > 0 ? text :"write something in above textbox to preview"}</p>
      </div>
    </>
  );
}
