import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {removeTodo} from '../features/todo/todoSlice'
 function Todos(){



    const todos = useSelector(state=>state.todos)
    const dispatch = useDispatch();
     
  
    return(
        <>
        <div>Todos</div>
         <ul className='list-none'>

        {todos.map((todo)=>(
          
            <li key={todo.id}
            
            className='mt-4 flex justify-between item-center bg-black px-4 py-2 rounded-lg'
            >
      <div className='text-white'> {todo.text}</div>    

      <div className='flex gap-3'>

            <button onClick={()=> dispatch(removeTodo(todo.id))} >Delete</button>
            </div> 

            </li>
           
        ))}
         </ul>
        </>
    )
 }

 export default Todos;