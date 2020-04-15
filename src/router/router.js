import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import movieApp from "../components/movieApp.js"
import readMore from "../components/readMore.js"

const AppRouter = () => {
   return (
       <div>
        <Router>
<Switch>

<Route path="/" exact component={movieApp}  />
<Route path="/readMore/:id" exact component={readMore}  />

</Switch>

        </Router>
        </div>
        )
    
}

export default AppRouter;
