import './styles/globals.scss'
import { createRoot } from 'react-dom/client'
import { App } from './components/App/App'
import { BrowserRouter } from 'react-router-dom'
import createHttpPlugin from './plugins/http'
import createApi from './api'
import apiContext from './utility/context/api'

const root = document.getElementById('root')

if (!root) {
    throw new Error('root not fount')
}

const http = createHttpPlugin('https://test-task-api.allfuneral.com/')
const api = createApi(http)

const container = createRoot(root)
container.render(
    <BrowserRouter>
        <apiContext.Provider value={api}>
            {<App />}
        </apiContext.Provider>
    </BrowserRouter>
)
