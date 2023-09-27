import React from 'react'
import { TasksPage } from '../pages/tasksPage'
import { Navigate, Route, Routes } from 'react-router'

export const TasksRoutes = () => {
  return (
    <Routes>

      <Route path='/' element={<TasksPage />} />

      <Route path='/*' element={<Navigate to="/" />} />

    </Routes>
  )
}
