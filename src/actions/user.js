import axios from "axios";

const URL = 'http://localhost:8080/api/login';

export function login(data) {
  return {
    type: 'LOGIN',
    payload: axios.post(URL, data)
  }
};
