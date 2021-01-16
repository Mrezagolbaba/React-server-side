import {Switch,Route} from 'react-router'
import Home from '../src/pages/home'

function App(){
    
    return(
        <Switch>
            <Route path="/" render={props=>(
                <Home {...props}/>
            )}/>
        </Switch>
    )
} 
export default App;