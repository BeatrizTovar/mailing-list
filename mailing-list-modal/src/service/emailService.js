import axios from 'axios'

function sendEmail(email) {
    const promise = axios.post('/api/mail/send', email)
        .then(success)
        .catch(error)

    return promise
}

const success = response => {
    console.log(response)
    return response.data
}

const error = error => {
    console.log(error)
    if(error && error.response.data && error.response.data.errors){
        console.error(error.response.data.errors)
    }
    return Promise.reject(error)
}

export { sendEmail }