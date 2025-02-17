import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Route.tsx'
import { HeroUIProvider } from '@heroui/react'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <RouterProvider router={routes} />
    </HeroUIProvider>
  </StrictMode>,
)
