import {post,put} from '../utils/request';
//注册
export async function SignINApi(payload){
    return post('/api/emstu/teacher/register',payload)
}
//登录
export async function loginApi(payload){
    console.log(payload)
    return post('/api/emstu/teacher/login',payload)
}
//创建班级
export async function addClass(){
    return put('/api/emstu/class/create')
}