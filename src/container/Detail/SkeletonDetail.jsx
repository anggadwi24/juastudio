import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SkeletonDetail = () => {
    return (
      <section className="sidebar-page-container projects-details" >
         <div className="container">
            <div className="single-item-carousel owl-carousel owl-theme owl-nav-none owl-dot-style-one mb-30">
              <Skeleton height={400} />
             
            </div>
            <h2><Skeleton height={50}/></h2>
            <div className="row">
                <div className="col-md-9">
                   <Skeleton height={400} />
                </div>
                <div className="col-md-3">
                   <Skeleton height={400} />
                </div>
            </div>
            <div className="project-pagination">    
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-4">
                    <Skeleton height={50}/>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-4">
                    <Skeleton height={50}/>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-4">
                    <Skeleton height={50}/>
                    </div>
                </div>                    
            </div>
                  
          </div>
      </section>
    );
  };
  export default SkeletonDetail;
