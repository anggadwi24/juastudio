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

import { Helmet } from 'react-helmet';




  const Home = () => {
   
    
        
  
    
        return (
        <Fragment>
          
          <Helmet>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>

        

          <meta name="description" content="Creative company yang berjalan dibidang IT"/> 
          <meta name="keywords" content="website murah, jasa pembuatan website dibali, jual totebag denpasar,jual totebag bali,jasa design graphics dibali "/>
          <meta name="revisit-after" content="2 days"/>
          <meta name="robots" content="all,index,follow"/>
          <meta name="MSSmartTagsPreventParsing" content="TRUE"/>
          <meta name="author" content="Jua Studio"/>
          <meta name="copyright" content="Jua Studio"/>
          <meta property="og:title" content="Digital company yang berjalan dibidang IT"/>
          <meta property="og:description" content="Digital company yang berjalan dibidang IT"/>
          <meta property="og:image" content="https://pusat.juastudio.com/src/assets/img/jua.png"/>
          <meta property="og:url" content="https://www.juastudio.com/"/>
          <meta property="og:site_name" content="juastudio.com"/>
          <meta property="og:see_also" content="https://www.juastudio.com"/>
        </Helmet>
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