import React, { useState }from "react";

function CreateArea(props) {
    const [note, setNote] = useState({title: "", content: "", id: ""});
    
    function handleChange(event){
        const { name, value } = event.target
        setNote(preNote => {
            return {
                ...preNote,
                [name]: value
            };
        });
    }

    function submitNote(event){
        props.onAdd(note)
        setNote({title: "", content: "", id: ""})
        event.preventDefault();
    }
    
    return (
        <div>
            <form>
                <input name="title" placeholder="Title" onChange={handleChange} value={note.title} id={note.id}/>
                <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content} id={note.id}/>
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
  );
}

export default CreateArea;