import React from 'react';
import { Helmet } from 'react-helmet';
class Home extends React.Component{
    buttonOnclick(){
        console.log('js is running')
    }

    head(){
        return(
            <Helmet>
                <title>My page title</title>
            </Helmet>
        )
    }

    render(){
        return(
            <div>
                {this.head()}
                <h1>
                    My Home
                </h1>
                <button onClick={()=>this.buttonOnclick()}>Console log</button>
            </div>
        )
    }     
}
export default Home;
