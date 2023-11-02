import React from 'react'
import classes from './ItemList.module.css'
import Item from '../Item/Item'
function ItemList({list,callback,remove}) {
  return (
    <div className={classes.list}>
        {list.map((el)=>(
            <Item key={el.id} id={el.id} body={el.body} isChecked={el.isChecked} callback={callback} remove={remove}/>
        ))}
    </div>
  )
}

export default ItemList 