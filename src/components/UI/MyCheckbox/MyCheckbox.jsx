import React from 'react'
import classes from './MyCheckbox.module.css'
function MyCheckbox({labeltxt,id}) {
  return (
    <div className={classes.checkConteiner}>
        <input className={classes.inCheck} type={"checkbox"} id={id}/>
        <label for={id}>{labeltxt}</label>
    </div>
  )
}

export default MyCheckbox