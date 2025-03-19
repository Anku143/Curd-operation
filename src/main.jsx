import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateStudent from './Components/CreateStudent.jsx'
import StudentTable from './Components/StudentTable.jsx'
import StudentEdit from './Components/StudentEdit.jsx'
import ViewDetails from './Components/ViewDetails.jsx'


const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [{
    path: '/',
    element: <StudentTable />,
  },
  {
    path: '/create',
    element: <CreateStudent />,
  }, {
    path: '/edit/:studentid',
    element: <StudentEdit />,
  },
  {
    path: '/view/:studentid',
    element: <ViewDetails />,
  }
  ],
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
