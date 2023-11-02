import React, { useEffect, useState } from 'react'
import NewItem from '../../components/NewItem/NewItem'
import ItemList from '../../components/ItemList/ItemList';

function ToDoPage() {
    const [list, setList] = useState([]);

    useEffect(()=>{
        const local = localStorage.getItem('list');
        if(local){
            setList(JSON.parse(local))
        }
    },[])


    function isChecked(id){
     const newList = list.map(elem => {
        if(elem.id === id){
            return {...elem, isChecked: !elem.isChecked}
        } return elem
    })
    setList(newList)
    localStorage.setItem('list',JSON.stringify(newList))
    }

    function addNewItem(value){
        const newItem = {id: Date.now(), body: value, isChecked: false}
        const newList =[...list,newItem]
        setList(newList)
        localStorage.setItem('list',JSON.stringify(newList))
    } 

    function remove(id){
        const newList = list.filter(elem => {
            if(elem.id === id){
                return false
            }else{
                return true
            }
        })
        setList(newList)
        localStorage.setItem('list',JSON.stringify(newList))
    }

  return (
    <div>
        <NewItem addNewItem={addNewItem}/>
        <ItemList list={list} callback={isChecked} remove={remove}/>
    </div>
  )
}

export default ToDoPage