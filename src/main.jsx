import React from "react";
import ReactDOM from 'react-dom'
import App from './App'
import { ContextProvider } from "./context/ContextProvider";
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   )


ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById('root')
)  
