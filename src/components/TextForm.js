import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","Success");
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","Success");
    }

    const handleclearClick = ()=>{
        let newText = "";
        setText(newText);
    }

    const handleextraspace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    // setText("hello");
    return (
        <>
        <div className="container" style={{color: props.mode === 'light'?'black':'white'}}>
            <h1>{props.heading}</h1>
           <div className="mb-3">
             <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode === 'light'?'white':'grey', color: props.mode === 'light'?'black':'white'}} id="myBox" rows="8"></textarea>
           </div> 
           <button className="btn btn-primary mx-2" onClick = {handleUpClick}>Convert to Uppercase</button>
           <button className="btn btn-primary mx-3" onClick = {handleLoClick}>Convert to Lowercase</button>
           <button className="btn btn-primary mx-3" onClick = {handleclearClick}>Clear Text</button>
           <button className="btn btn-primary mx-3 " onClick = {handleextraspace}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light'?'black':'white'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes</p>
            <h2>Preview</h2>
            <p>{text.length >0?text:"Enter Something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
