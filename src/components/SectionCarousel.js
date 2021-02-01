import React from 'react';
import _ from 'lodash';
import Slider from "react-slick";
import { htmlToReact, withPrefix } from '../utils';
// if (typeof window !== 'undefined') {
//     window.jQuery = window.$ = require('jquery');
//     require('boo`t`strap');
// }
//htmlToReact(_.get(section, 'subtitle', null))
export default class SectionCarousel extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let slides = _.get(section, 'slides', null);
        let slidesToScroll =_.get(section, 'slidesToScroll', null); 
        const settings = {
            dots: true,
            infinite: true,
            speed: 800,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: slidesToScroll ===  null ? 1 : slidesToScroll ,
            slidesToScroll: slidesToScroll ===  null ? 1 : slidesToScroll
          };
        return (

            <section id={_.get(section, 'section_id', null)} className={''}>
     
           {
               slides && (
                  
                       
                <Slider {...settings}>
                          {  _.map(slides,(slide,slide_idx)=>(
                            <div class="slide-item" key={slide_idx}>
                                <h4 className="title">{htmlToReact(_.get(slide, 'content', null))}</h4>
                                <img src={_.get(slide, 'image', null)}></img>
                          </div>
                          ))}
                          
                          </Slider>
                       
                  
                
               )
           }
               
            </section>
        );
    }
}
