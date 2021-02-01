import React from 'react';
import _ from 'lodash';
import CtaButtons from './CtaButtons';

import { htmlToReact, withPrefix } from '../utils';

//htmlToReact(_.get(section, 'subtitle', null))
export default class SectionPosts extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let features = _.get(section, 'features', null);
        return (

            <section id={_.get(section, 'section_id', null)} className={' featureSection container mt-3 mb-3'}>
                { features && (
                    <div class="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-7 mb-3 mt-3">
                                    <h3>{_.get(section, 'title', null)}</h3>
                                </div>
                            </div>
                        </div>
                        { _.map(features, (feature, feature_idx) => (
                            <div class="col-md-3 mt-3">
                                <div className="col pl-0 border-bottom border-warning pb-2">
                                <img  width="30%" className="" alt="" src={`${withPrefix(_.get(feature, 'image', null))}`}></img>
                                    </div>
                                <h5>{htmlToReact(_.get(feature, 'heading', null))}</h5>
                                <p> {htmlToReact(_.get(feature, 'description', null))}</p>
                                {_.get(feature, 'actions', null) && (
                                <div className="block-buttons">
                                <CtaButtons {...this.props} actions={_.get(feature, 'actions', null)} />
                                </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </section>
        );
    }
}
