import request from '../utils/request';

export function login() {
  return request.get('/emstu/teacher/userlist');
}
