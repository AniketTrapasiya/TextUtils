import React, {useState} from 'react'


export default function TextForm(props) {
  
    const handleUpClick = () => {
        console.log("You clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLcClick = () => {
        console.log("You clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleCleartext = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }


    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const intoTitleCase = () => {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
        props.showAlert("First letter Capitalized!", "success");
    }


    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
      
      
    const [text,setText] = useState('');
    return (
        <>
        <div style={{color: props.mode ==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6" style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLcClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleCleartext}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={intoTitleCase}>Title Text</button>
            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        </div>
        </>
    )
}

