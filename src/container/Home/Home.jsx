import React, {Fragment} from 'react';


import Main from '../section/Main';
import Menu from '../section/Menu';
import About from '../section/About';
import Services from '../section/Services';
import Shop from '../section/Shop';
import Team from '../section/Team';
import Pricing from '../section/Pricing';
import Contact from '../section/Contact';
import Script from '../../component/Script';




  const Home = () => {
   
    
   
  
    
        return (
        <Fragment>
          
           
            <div className="page-wrapper">
                
                    <Main/>
                    <Menu/>
                    <About/>
                    <Services/>
                    <Shop></Shop>
                    <Team></Team>
                    <Pricing></Pricing>
                    <Contact></Contact>
                </div>
                <Script></Script>
        </Fragment>
                
          
           
        )
    
}

export default Home;