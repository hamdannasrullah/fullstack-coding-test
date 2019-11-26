import axios from 'axios';

export function getTasks() {
  return axios.get('http://localhost:3003/tasks');
}

export function getTask(id) {
  return axios({
    method: 'get',
    url: 'http://localhost:3003/tasks'+id,
    params: { id },
  })
}
