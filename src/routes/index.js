import Pages from "../containers"

import { Routes as Switch,Route } from 'react-router-dom'
const {Home, About, Contact, Portfolio}=Pages
export default function Routes(){
    return(
       

    <Switch>
                <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={< Contact/>}/>
        <Route path="/portfolio" element={<Portfolio />}/>

    
    </Switch>

   
    )
} 