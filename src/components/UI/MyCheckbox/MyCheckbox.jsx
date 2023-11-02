import React from 'react'
import classes from './MyCheckbox.module.css'
function MyCheckbox({labeltxt,id,checked,callback}) {
  return (
    <div className={classes.checkConteiner}>
        <input onChange={()=>callback(id)} checked={checked} className={classes.inCheck} type={"checkbox"} id={id}/>
        <label htmlFor={id}>{labeltxt}</label>
    </div>
  )
}

export default MyCheckbox