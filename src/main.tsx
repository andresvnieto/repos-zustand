import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ReactQuery from './QueryClient/ReactQuery'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReactQuery>
      <App />
    </ReactQuery>
  </React.StrictMode>,
)
