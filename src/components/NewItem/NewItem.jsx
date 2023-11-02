import React, { useState } from 'react'
import MyInput from '../UI/MyInput/MyInput'
import MyButton from '../UI/MyButton/MyButton'
import classes from './NewItem.module.css'

function NewItem({addNewItem}) {
  const [value, setValue] = useState('');

  return (
    <div className={classes.wrapper}>
        <MyInput
        value ={value} 
        type='text' 
        placeholder='New item'
        onChange={e => setValue(e.target.value)}/>
        <MyButton
         onClick = {() => {
          addNewItem(value);
          setValue('')
        }}
         children={'Add'}
         />
    </div>
  )
}

export default NewItem