import React from 'react'

export default function Alert(props) {
    const capitalize = (text)=>{
        if(text === "danger"){
            text = "error";
        }
        const newText = text.toLowerCase();
        return text.charAt(0).toUpperCase() + newText.slice(1);
    }
  return (
    <div style = {{height : '50px'}}>
    {
    props.alert && 
     <div className={`alert alert-${props.alert.type} alert-dismissible  show" role="alert`}>
  <strong>{capitalize(props.alert.type)}</strong>:  {props.alert.msg}
  </div>
    } 
    </div>
  )
}