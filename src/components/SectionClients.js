import React from 'react';
import _ from 'lodash';
import { htmlToReact, withPrefix } from '../utils';
// if (typeof window !== 'undefined') {
//     window.jQuery = window.$ = require('jquery');
//     require('boo`t`strap');
// }
//htmlToReact(_.get(section, 'subtitle', null))
export default class SectionClients extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let clients = _.get(section, 'clients', null);
        return (

            <section id={_.get(section, 'section_id', null)} className={'mt-5'}>

                {
                    clients && (
                        <div className="container client-wrap mb-5">
                            {_.get(section, 'title', null) && (
                                <h2 className="mb-3 pb-3 text-center">{_.get(section, 'title', null)}</h2>
                            )}
                            <div className="row">
                                {_.map(clients, (client, client_idx) => (
                                    <a className=" col" key={client_idx} href={_.get(client, 'url', null)}>
                                        <img src={_.get(client, 'image', null)}></img>
                                    </a>
                                ))}
                            </div>
                        </div>



                    )
                }

            </section>
        );
    }
}
