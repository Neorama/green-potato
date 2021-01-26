import React from 'react';
import _ from 'lodash';

import { withPrefix, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionHero1 extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let internalLinks =  _.get(section,'internalLinks',null);
        return (
            <section id={_.get(section, 'section_id', null)} className="container-fluid">
              <div className ="row">
                 
              <div className="col-sm-6 p-5">
                {_.get(section, 'title', null) && (
                <div className="block-header">
                  <h1 className="block-title">{_.get(section, 'title', null)}</h1>
                </div>
                )}
                {_.get(section, 'content', null) && (
                <div className="block-content">
                  {markdownify(_.get(section, 'content', null))}
                </div>
                )}
                  {_.get(section, 'actions', null) && (
                <div className="row mt-3">
                    <div className="col-12">
                  <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />
                  </div>
                </div>
                )}
                {
                    internalLinks && (
                        <ul class="nav nav-pills">
                       { _.map(internalLinks, (link, link_idx) => (
                            <li class="nav-item">
                          <a class="nav-link " data-scroll="" href={`#${_.get(link,'linkId',null)}`}>{_.get(link,'label',null)}</a>
                        </li>
                        ))}
                      </ul>    
                        
                       
                        
                    )
                }
            
              </div>
              {_.get(section, 'image', null) && (

              <div className="col-sm-6" >
             <img src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} />

                  </div>
              )}
               </div>   
            </section>
        );
    }
}
