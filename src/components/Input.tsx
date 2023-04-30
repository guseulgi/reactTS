import React, { useRef, useState } from 'react'

export default function Input() {
  const [string, setString] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = ():void => {
    if(inputRef.current !== null)
      setString(inputRef.current.value);
  }

  const handleChange2 = (e: any) :void => {
    setString(e.target.value);
  }

  return (
    <div>
      <h1>{string === '' ? '값을 입력하시오' : string}</h1>
      <input 
        ref = {inputRef}
        onChange={handleChange} />
    </div>
  )
}
