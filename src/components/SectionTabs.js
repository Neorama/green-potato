import React from 'react';
import _ from 'lodash';

import { htmlToReact, withPrefix } from '../utils';
// if (typeof window !== 'undefined') {
//     window.jQuery = window.$ = require('jquery');
//     require('boo`t`strap');
// }
//htmlToReact(_.get(section, 'subtitle', null))
export default class SectionTabs extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let tabs = _.get(section, 'tabs', null);
        return (

            <section id={_.get(section, 'section_id', null)} className={'container mt-3 mb-3'}>
     
                {
                    
                    <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
                        {
                            tabs && (
                                _.map(tabs,(tab,tab_idx)=>(
                                    
                                    <li class="nav-item">
                                        <a class={"nav-link "+ (tab_idx ==0? "active":"")} id={_.get(tab, 'tabId', null) + "-tab"} data-toggle="tab" href={`#${_.get(tab, 'tabId', null)}desc`} role="tab" aria-controls={_.get(tab, 'tabId', null)+"desc"} aria-selected={ (tab_idx ==0? "true":"false")}>{_.get(tab, 'tabName', null)}</a>
                                      </li>  
                            ))
                                
                            )
                        }
                    </ul>
                    
                    
                }
                {
                    <div class="tab-content" id="myTabContent">
                        {
                            tabs && (
                                _.map(tabs,(tab,tab_idx)=>(
                                    <div class={"tab-pane fade " + (tab_idx ==0? "show active":"")} id={_.get(tab, 'tabId', null) +"desc"} role="tabpanel" aria-labelledby={_.get(tab, 'tabId', null) + "-tab"}>
                                        <div className="row">
                                        <div className="col-md-6">
                                        {htmlToReact(_.get(tab, 'content', null))}
                                            </div>
                                            <div className="col-md-6">
                                                <img src={_.get(tab,"image",null)}/>
                                            </div> 
                                        
                                        </div>
                                    </div>
  
                                ))
                            )
                        }
                    </div>
                    }
               
            </section>
        );
    }
}
