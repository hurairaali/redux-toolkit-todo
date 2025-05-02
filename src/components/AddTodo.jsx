import React from 'react';
 import {useDispatch} from 'react-redux';
 import {addTodo} from '../features/todo/todoSlice'
 function AddTodo(){
        const [input, setInput] = React.useState('')
        const dispatch = useDispatch();

        const handleSubmit = (e)=>{
            e.preventDefault();
            if(!input) return;
            dispatch(addTodo(input))
            setInput('')
        }
       
        
        return(
            <>
         <form onSubmit={handleSubmit} className='space-x-3 mt-12'>

            <input type='text'
            className='bg-gray-200 border-2 border-gray-300 rounded-lg p-2 text-gray-700'
            placeholder='Add a new todo'
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            ></input>
            <button type='submit'
            className='bg-blue-500 text-white rounded-lg p-2'
            >
                Add
            </button>
         </form>

                     </>
        )
    
    
 }

 export default AddTodo;