import request from '../utils/request';


export function login() {
  return request.get('/emstu/teacher/userlist');
}
export function query() {
  return request('/api/users');

}
