
import { Route, Switch ,Redirect} from 'dva/router';
const MapRouter=({routes})=>{
     return <Switch>
                 {
                   routes.map((item, index) => {
                        if (item.path) {
                            return <Route key={ index } path={ item.path } render={ (props) => {
                                if (item.children) {
                                    /** 渲染组件，类似于<Tab/>
                                     *  ...props 把路由信息展开传递下去
                                     *  item.children 把子路由配置传递下去
                                     */
                                    return <item.component { ...props } routes={ item.children } />
                                } else {
                                    return <item.component { ...props } />
                                }
                                // return  <Redirect key={index} exact from="/main" to="/main/addquestions"></Redirect>
                            } }></Route>
                            
                        }
                        return  <Redirect key={index} exact from="/" to="/"></Redirect>
                    })
                 } 
            </Switch>      
    
}  


export default MapRouter;
