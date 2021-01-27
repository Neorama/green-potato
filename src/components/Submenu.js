import React from 'react';
import _ from 'lodash';

import {classNames} from '../utils';
import ActionLink from './ActionLink';

export default class Submenu extends React.Component {
    render() {
        let page = _.get(this.props, 'page', null);
        return (
          <div className={_.get(this.props, 'menu_class', null)}>
            <div className="container">

            <ul className="row ">
              
            {_.map(_.get(this.props, 'submenu', null), (action, action_idx) => {
                let page_url = _.trim(_.get(page, 'url', null), '/');
                let action_url = _.trim(_.get(action, 'url', null), '/');
                return (
                  <li key={action_idx} className={classNames('menu-item',"col-sm-4", {'current': page_url === action_url, 'menu-button': _.get(action, 'style', null) !== 'link'})}>
                    <a className="row cardlink" href={_.get(action, 'url', null)}>
                   {_.get(action, 'icon', null) && 
                      (<div className="col-md-3 p-0 pl-2 linkIcon">
                      <img src={_.get(action, 'icon', null)}/>
                    </div>)
                   } 
                    <div className="col-md-9 textwrap">
                      <h6>{_.get(action, 'label', null)}</h6>
                      {_.get(action, 'content', null) && 
                      ( <p>{_.get(action, 'content', null)}</p>)
                   } 
                     
                      
                    </div>
                    </a>
                    {/* <ActionLink {...this.props} action={action} /> */}
                  </li>
                )
            })}
            </ul>
            </div>
            </div>
        );
    }
}
