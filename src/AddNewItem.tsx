import { useState } from "react";
import { AddItemButton, NewItemButton } from "./styles";
import { NewItemForm } from "./NewItemForm";
interface AddNewItemProps{
    onAdd(text:string):void
    toggleButtonText:string
    dark?:boolean
}

export const AddNewItem=(props:AddNewItemProps)=>{
    const [showForm,setShowForm]=useState(false);
    const {onAdd,toggleButtonText,dark}=props;

    if(showForm){
        //We show item creation from here
        return(
            <NewItemForm
                onAdd={text=>{
                    onAdd(text)
                    setShowForm(false)
                }}
                />
        )
    }

    return (
        <AddItemButton dark={dark} onClick={()=>setShowForm(true)}>
            {toggleButtonText}
        </AddItemButton>
    )
}