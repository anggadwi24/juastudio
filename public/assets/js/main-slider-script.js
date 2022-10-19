
    var tpj=jQuery;                  
    var revapi486;
    tpj(document).ready(function() {
        // if(tpj("#rev_slider_one").revolution == undefined){
        //     revslider_showDoubleJqueryError("#rev_slider_one");
        // }else{
        //     revapi486 = tpj("#rev_slider_one").show().revolution({
        //     sliderType:"standard",
        //         jsFileLocation:"assets/plugins/revolution/js/",
        //         sliderLayout:"fullwidth",
        //         dottedOverlay:"none",
        //         delay:5000,
        //         navigation: {
        //             keyboardNavigation:"off",
        //             keyboard_direction: "horizontal",
        //             mouseScrollNavigation:"off",
        //                 mouseScrollReverse:"default",
        //             onHoverStop:"off",
        //             touch:{
        //                 touchenabled:"on",
        //                 touchOnDesktop:"off",
        //                 swipe_threshold: 75,
        //                 swipe_min_touches: 1,
        //                 swipe_direction: "horizontal",
        //                 drag_block_vertical: false
        //             },
        //             arrows: {
        //                 style:"uranus",
        //                 enable:true,
        //                 hide_onmobile:true,
        //                 hide_under:600,
        //                 hide_onleave:false,
        //                 tmp:'',
        //                 left: {
        //                     h_align:"left",
        //                     v_align:"center",
        //                     h_offset:0,
        //                     v_offset:0
        //                 },
        //                 right: {
        //                     h_align:"right",
        //                     v_align:"center",
        //                     h_offset:0,
        //                     v_offset:0
        //                 }
        //             }
                    
        //         },
        //          responsiveLevels:[1200,1040,778,480],
        //          visibilityLevels:[1200,1040,778,480],
        //          gridwidth:[1200,1040,778,480],
        //          gridheight:[770,600,500,400],
        //          lazyType:"none",
        //          parallax: {
        //              type:"scroll",
        //              origo:"enterpoint",
        //              speed:400,
        //              levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
        //              type:"scroll",
        //          },
        //          shadow:0,
        //          spinner:"off",
        //          stopLoop:"off",
        //          stopAfterLoops:-1,
        //          stopAtSlide:-1,
        //          shuffle:"off",
        //          autoHeight:"off",
        //          hideThumbsOnMobile:"off",
        //          hideSliderAtLimit:0,
        //          hideCaptionAtLimit:0,
        //          hideAllCaptionAtLilmit:0,
        //          debugMode:false,
        //          fallbacks: {
        //              simplifyAll:"off",
        //              nextSlideOnWindowFocus:"off",
        //              disableFocusListener:false,
        //          }
        //      });
        //  }
         
         if(tpj("#rev_slider_two").revolution == undefined){
           
        }else{
            revapi486 = tpj("#rev_slider_two").show().revolution({
            sliderType:"standard",
                jsFileLocation:"assets/plugins/revolution/js/",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:10000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                        mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        enable:true,
                        style: 'erinyen',
                        tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div><div class="tp-arr-img-over"></div><span class="tp-arr-titleholder"></span></div>',
                        
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:20,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:20,
                            v_offset:0
                        }
                    },
                    bullets: {
 
                        enable: true,
                        style: 'hebe',
                        tmp: '<span class="tp-bullet-image"></span>',
                        direction: 'horizontal',
                        rtl: false,
                 
                        container: 'slider',
                        h_align: 'center',
                        v_align: 'bottom',
                        h_offset: 0,
                        v_offset: 30,
                        space: 10,
                 
                        hide_onleave: false,
                        hide_onmobile: false,
                        hide_under: 0,
                        hide_over: 9999,
                        hide_delay: 200,
                        hide_delay_mobile: 1200
                 
                    }
                    
                },
                 responsiveLevels:[1200,1040,778,480],
                 visibilityLevels:[1200,1040,778,480],
                 gridwidth:[1200,1040,778,480],
                 gridheight:[950,800,700,600],
                 lazyType:"none",
                 parallax: {
                     type:"scroll",
                     origo:"enterpoint",
                     speed:400,
                     levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
                     type:"scroll",
                 },
                 shadow:0,
                 spinner:"off",
                 stopLoop:"off",
                 stopAfterLoops:-1,
                 stopAtSlide:-1,
                 shuffle:"off",
                 autoHeight:"off",
                 hideThumbsOnMobile:"off",
                 hideSliderAtLimit:0,
                 hideCaptionAtLimit:0,
                 hideAllCaptionAtLilmit:0,
                 debugMode:false,
                 fallbacks: {
                     simplifyAll:"off",
                     nextSlideOnWindowFocus:"off",
                     disableFocusListener:false,
                 }
             });
         }
     }); /*ready*/