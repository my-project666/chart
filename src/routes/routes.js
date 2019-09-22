import IndexPage from '../view/IndexPage.js';
import keyStudent from '../view/KeyStudent';
import AllAchievenment from '../view/allAchievements.js';
const routes = [
    
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