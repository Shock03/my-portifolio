import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/*ThemeProvider --> Permite que todos os meus componentes utilizem o tema criado em theme.ts
       Tudo que estiver dentro do <App/>, vai conseguir pegar as caracteristicas do tema criado.*/}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
