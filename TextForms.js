import React, {useState} from 'react'


export default function TextForms(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converetd to uppercase", "Success");
    }

    const handleLoClick = () =>{
      //console.log("LowerCase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to Lowercase", "Success");
    }

    const handleClearClick = () =>{
      //console.log("Clear a text " + text);
      let newText =('');
      setText(newText)
      props.showAlert("Text Cleared!", "Success");
    }
 

    const handleOnChange = (event)=>{
       // console.log("On Change");
        setText(event.target.value);
    }


    
    const handleCopy = ()=>{
      var text = document.getElementById("mybox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard", "Success");
    }


    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed!", "Success");
    }

const [text, setText] = useState('');
// text = "new text"; // Wrong way to chnage the state
// setText("new text"); //Correct way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
       <h1>{props.heading}</h1>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>

       <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
       <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
       <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-2"  style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>Words Count: {text.split(" ").length} | Character Count: {text.length} | Line Count:</p>
      <p>{0.08 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      
    </div>
    </>
  )
}


