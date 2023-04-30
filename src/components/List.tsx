import React from 'react'
import { Task } from './Todo';

export default function List({
  content,
  isCompleted
}: Task) {
  return (
    <>
      <h3>{content}</h3>
      <p>{isCompleted ? '완료' : '미완' }</p>
    </>
  )
}
