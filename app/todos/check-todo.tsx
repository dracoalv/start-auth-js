'use client'

import { useState } from "react"

export function CheckTodo({ children }: { children: React.ReactNode }) {
  const [checkTodo, setCheckTodo] = useState(false)
  const handleCheckboxChange = () => setCheckTodo(!checkTodo)

  return (
    <>
      <input type="checkbox" onChange={handleCheckboxChange} checked={checkTodo} />
      <span className={`${checkTodo ? 'line-through' : ''}`}>{children}</span>
    </>
  )
}