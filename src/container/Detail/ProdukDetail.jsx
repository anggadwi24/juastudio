import React, {Fragment, useEffect,useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonDetail from './SkeletonDetail';
import Notfound from './Notfound';
import DOMPurify from 'dompurify';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ProdukDetail = () =>{
    const [pro, setPro] = useState([]);
    const [image, setImage] = useState([]);

    const [status, setStatus] = useState(true);

    const [loading, setLoading] = useState(false);
    const { slug } = useParams();
    useEffect(() => {
      
        axios.get('https://api.juastudio.com/api/product/detail/'+slug)
        
        .then((result)=>{
          
            setPro(result.data.data[0]);
            setImage(result.data.data[0].detail);
            
            setStatus(true);
           setLoading(false);
        }).catch(error => { 
           
            
            setStatus(false);

        })
      }, [slug]);
   
    return (
        
        <Fragment>
            {loading && <SkeletonDetail/>}
            {!loading && status &&
          
             <section className="sidebar-page-container projects-details" key={pro.slug}>
                     <div className="container">
                        <OwlCarousel className='owl-theme owl-nav-none owl-dot-style-one mb-30' items={1} loop={true} margin={0} animateOut={'fadeout'} smartSpeed={1000} autoplay={5000} navText={ [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ]} responsive={[]}>

                       
                       
                             {  image.map((img,index) => {
                                 return (
                                
                                     <div className="image" key={index}><img src={img.image}  alt=""/></div>
                                
                                 );
                             })
                         }
                          </OwlCarousel>
                         <h2>{pro.name}</h2>
                         <div className="row">
                             <div className="col-md-9">
                                
                                 <div className="text" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize([pro.description])}}>
                   
                                 </div>
                                
                    
                             </div>
                             <div className="info-column col-md-3">
                                 <div className="inner-column">
                                     <ul>
                                         <li><span>Kategori :</span>{pro.category}</li>
                                         <li><span>Stok :</span>{pro.qty} pcs</li>
                                         <li>
                                             <span>Harga :</span>
                                             {pro.discount > 0 && pro.disc_percent > 0 &&
                                                 pro.price
                                             } {pro.discount <= 0 && pro.disc_percent <= 0 && pro.price}
                                         </li>
                                    
                                     </ul>
                                 </div>
                             </div>
                         </div>
                         <div className="project-pagination">    
                             <div className="row">
                                 <div className="col-md-4 col-sm-4 col-xs-4">
                                     <div className="button prev pull-left">
                                         <a href="/#"><i className="fa fa-angle-left" aria-hidden="true"></i>&nbsp;&nbsp;Prev</a>    
                                     </div>
                                 </div>
                                 <div className="col-md-4 col-sm-4 col-xs-4">
                                     <div className="icon-box text-center">
                                         <a href="/shop">
                                             <i className="fa fa-th" aria-hidden="true"></i>
                                         </a>
                                     </div>
                                 </div>
                                 <div className="col-md-4 col-sm-4 col-xs-4">
                                     <div className="button next pull-right">
                                         <a href="/#">Next &nbsp;&nbsp;<i className="fa fa-angle-right" aria-hidden="true"></i></a>    
                                     </div>
                                 </div>
                             </div>                    
                         </div>
                     </div>
                 </section>
         
             }
             {!loading && !status && 
                 <Notfound/>
             }
            
        </Fragment>
       
    )
}

export default ProdukDetail;