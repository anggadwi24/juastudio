import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Home from './container/Home/Home';
import importScript from './container/section/importScript';



const Demo = props =>{
  importScript("assets/js/jquery.js");
  importScript('http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js');
  importScript("assets/js/bootstrap.min.js");
  importScript("assets/plugins/revolution/js/jquery.themepunch.revolution.min.js");
  importScript("assets/plugins/revolution/js/jquery.themepunch.tools.min.js");
  importScript("assets/plugins/revolution/js/extensions/revolution.extension.actions.min.js");
  importScript("assets/plugins/revolution/js/extensions/revolution.extension.carousel.min.js");
  importScript("assets/plugins/revolution/js/extensions/revolution.extension.kenburn.min.js");
  importScript("assets/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js");
  importScript("assets/plugins/revolution/js/extensions/revolution.extension.migration.min.js");
  importScript("assets/revolution/js/extensions/revolution.extension.navigation.min.js");
  importScript("assets/plugins/revolution/js/extensions/revolution.extension.parallax.min.js");
  importScript("assets/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js");
  importScript("assets/plugins/revolution/js/extensions/revolution.extension.video.min.js");
  importScript("assets/js/main-slider-script.js");
  importScript("assets/js/jquery.fancybox.js");
  importScript("assets/js/owl.js");
  importScript("assets/js/pagenav.js");
  importScript("assets/js/validate.js");
  importScript("assets/js/jquery.easing.min.js");
  importScript("assets/js/wow.js");
  importScript("assets/js/appear.js");
  importScript("assets/js/slick.js");
  importScript("assets/js/mixitup.js");
  importScript("assets/js/isotope.js");
  importScript("assets/js/script.js");
  // importScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAV0e-lFppqNT9E_ZmGzYNQ0Qst92QODxw"); 
  // importScript("assets/js/gmaps.js");
  // importScript("assets/js/map-script.js");
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
    <Home />
   
    <Demo/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
