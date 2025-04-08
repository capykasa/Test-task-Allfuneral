import './styles/globals.scss'
import { createRoot } from 'react-dom/client'
import { App } from './components/App/App'
import { BrowserRouter } from 'react-router-dom'
import createHttpPlugin from './plugins/http'
import createApi from './api'
import Store from './store'
import { createContext } from 'react'

const root = document.getElementById('root')

if (!root) {
    throw new Error('root not fount')
}

const http = createHttpPlugin('https://test-task-api.allfuneral.com/')
const api = createApi(http)
export const store = new Store(api)

export const StoreContext = createContext<Store>(store)

const container = createRoot(root)
container.render(
    <BrowserRouter>
        <StoreContext.Provider
            value={store}
        >
            {<App />}
        </StoreContext.Provider>
    </BrowserRouter>
)
