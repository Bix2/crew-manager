import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

function getDevelopers (cb) {
    api.get('developers')
    .then((response) => {
        cb(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
}

function createDeveloper (data, cb) {
    api.post('developers', data)
    .then((response) => {
        cb(response)
    })
    .catch((error) => {
        console.log(error)
    })
}

function getDeveloper (id, cb) {
    api.get(`developers/${id}`)
    .then((response) => {
        cb(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
}

function updateDeveloper (data, cb) {
    api.post(`developers/${data.id}`, {
        data,
        _method: 'patch',
    })
    .then((response) => {
        cb(response)
    })
    .catch((error) => {
        console.log(error)
    })
}

function deleteDeveloper (id, cb) {
    api.delete(`developers/${id}`)
    .then((response) => {
        cb(response)
    })
    .catch((error) => {
        console.log(error)
    })
}

export default {
    getAll: (cb) => getDevelopers(cb),
    show: (id, cb) => getDeveloper(id, cb),
    create: (data, cb) => createDeveloper(data, cb),
    update: (data, cb) => updateDeveloper(data, cb),
    delete: (id, cb) => deleteDeveloper(id, cb)
}
