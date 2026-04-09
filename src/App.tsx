import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div style={{ color: '#f5f5f5', padding: 24 }}>Second Brain — Phase 1 setup complete</div>,
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
