import React, { useState }from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

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

    function handleClick(){
        setExpanded(true)
    }
    
    return (
        <div>
            <form className="create-note">
                <input name="title" placeholder="Title" onChange={handleChange} onClick={handleClick} value={note.title} id={note.id}/>
                {isExpanded && (<textarea name="content" placeholder="Take a note..." rows= "3" onChange={handleChange} value={note.content} id={note.id}/>)}
                <Zoom in={isExpanded ? true : false}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
  );
}

export default CreateArea;