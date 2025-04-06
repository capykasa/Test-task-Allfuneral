import axios from 'axios'

function createHttpPlugin(baseURL: string) {
    const http = axios.create({
        baseURL,
        timeout: 1000,
        headers: {'Authorization': 'Bearer _token_'}
    })

    return http
}

export default createHttpPlugin
