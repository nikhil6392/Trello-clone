import React,{useState} from "react";
import { NewItemFormContainer,NewItemButton,NewItemInput } from "./styles";
import { useFocus } from "./utils/useFocus";

interface NewItemFormProps{
    onAdd(text:string):void //@onAdd is a callback passed through AddNewItemProps
}

export const NewItemForm= ({onAdd}:NewItemFormProps)=>{
    const [text,setText]=useState("");
    const inputRef = useFocus();

    //Giving the app ability create a task when click enter key
    const handleAddText=(
        event:React.KeyboardEvent<HTMLInputElement>
    )=>{
        if(event.key==="Enter"){
            onAdd(text)
        }
    }

    return (
        <NewItemFormContainer>
            <NewItemInput 
                ref={inputRef}
                value={text}
                onChange={e=>setText(e.target.value)}
                onKeyDown={handleAddText}
                />
            <NewItemButton onClick={()=>onAdd(text)}>
                Create
            </NewItemButton>

        </NewItemFormContainer>
    )
}