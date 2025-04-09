import axios from 'axios'

function createHttpPlugin(baseURL: string) {
    const http = axios.create({
        baseURL,
        timeout: 1000,
    })

    return http
}

export default createHttpPlugin
