import axios from 'axios';
const instance = axios.create();



export function get(url,config){
  return instance.get(url,config);
}

export function post(url,data,config){
  return instance.post(url,data,config);
}

export function put(url,data,config){
  return instance.put(url,data,config);
}

export function remove(url,config){
  return instance.remove(url,config);
}