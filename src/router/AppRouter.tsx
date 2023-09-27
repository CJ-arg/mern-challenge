import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { TasksRoutes } from '../tasks/routes/TasksRoutes'

export const AppRouter = () => {

  return (
    <Routes>
      <Route path='/auth/*' element={<AuthRoutes />} />

      <Route path='/*' element={<TasksRoutes />} />
    </Routes>
  )
}
