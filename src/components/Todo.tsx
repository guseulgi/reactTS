import React, { useRef, useState } from 'react'
import List from './List';

export interface Task {
  content: string,
  isCompleted? : boolean,
}

export default function Todo() {
  const [inputs, setInputs] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const lists = useRef<Task[]>([]);

  const addTask = () => {
    const newTask :Task = {
      content:inputs,
      isCompleted: false,
    }

    lists.current.push(newTask);

    console.log(newTask);
    console.log(lists.current);

    if(inputRef.current !== null)
      inputRef.current.value = '';
      
    setInputs('');
  }
  return (
    <div>
      <input 
        ref={inputRef}
        type='text' 
        onChange={(e :React.ChangeEvent<HTMLInputElement>): void => setInputs(e.target.value)}  
      />
      <button
        onClick={addTask}  
      >
        할 일 추가
      </button>
      <h1>할 일 목록</h1>
      {lists.current.map((el) => <List {...el} />)}
    </div>
  )
}
