import React from 'react'
import classes from './Item.module.css'
import MyCheckbox from "../UI/MyCheckbox/MyCheckbox"
import MyButton from '../UI/MyButton/MyButton'
function Item({id,body,isChecked,callback,remove}) {
  return (
    <div className={classes.item}>
        <MyCheckbox checked={isChecked} id={id} labeltxt={body} callback={callback}/>
        <MyButton onClick={()=>{remove(id)}}>Delete</MyButton>
        </div>
  )
}

export default Item