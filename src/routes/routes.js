import IndexPage from '../view/IndexPage.js';
import keyStudent from '../view/KeyStudent';
import AllAchievenment from '../view/allAchievements.js';
import Main from '../view/main'
const routes = [
 
    {
        path:"/main",
        component:Main
    },
    {
        path:"/keyStudent",
        component:keyStudent,       
    },
    {
        path:"/allAchievenment",
        component:AllAchievenment
    },
    {
        path:'/',
        component:IndexPage
    },
    
]
export default routes;