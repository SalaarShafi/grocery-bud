import React from 'react'
import {FaEdit, FaTrash} from 'react-icons/fa'
import { useState } from 'react'

const List = ({setIdToChange, name, items, handleDelete, handleEdit, setIsEditing, isEditing})=> {
    function handleEditSequence(id) {
    setIsEditing(!isEditing)
    setIdToChange(id)
    }

return(
    <div className='grocery-list'>
        {items.map((item, index)=> {
            const {id} = item
        return (
            <article key ={index} className='grocery-item'>
                <p>{item.name}</p>
                <div className='btn-container'>
                <button onClick={()=> handleEditSequence(id)} className='edit-btn'><FaEdit/></button>
                <button className='delete-btn' onClick={()=> {handleDelete(id)}}><FaTrash/></button>
                </div>
            </article>

        )
        })}
    </div>
)
}

export default List