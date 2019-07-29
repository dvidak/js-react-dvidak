import { put , get } from '../services/api';

export function getUser(id) {
    return get(`users/${id}`)
          .then((response) => response.user)
  }

export function editUser(data,id) {
    return put(`users/${id}`,data)
          .then((response) => response.user)
  }
