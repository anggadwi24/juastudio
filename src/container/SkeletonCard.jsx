import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SkeletonCard = () => {
    return (
      <div className="masonry-gallery ml-25 mr-25">
        <div className="container-fluid">
        

          <div className="items-container row clearfix">
            {Array(8)
              .fill()
              .map((item, index) => (
                <div className="col-md-3 col-sm-6 col-xs-12" key={index} style={{marginBottom:20}}>
                  <Skeleton height={400} />
                
                
                    <Skeleton height={50} width={`100%`} />
                
                
                    <Skeleton height={20} width={`100%`} />
                
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  };
  export default SkeletonCard;
