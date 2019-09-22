
import Login from '../view/login';
import Main from '../view/main'
const route = [
    {
       path:"/login",
       component:Login
    },
    {
        path:"/main",
        component:Main
    },
    {
        from:'/',
        to:'/login'
    }
]


export default route;

