import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';
import {graphql} from 'gatsby';

import {Layout} from '../components/index';
import {toStyleObj, withPrefix, getPages, Link} from '../utils';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Blog extends React.Component {
    render() {
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/blog'), 'frontmatter.date', 'desc');
        return (
            <Layout {...this.props}>
              <header className="block block-hero has-gradient outer">
                {_.get(this.props, 'pageContext.frontmatter.image', null) && (
                <div className="bg-img" style={toStyleObj('background-image: url(\'' + withPrefix(_.get(this.props, 'pageContext.frontmatter.image', null)) + '\')')}/>
                )}
                <div className="inner-sm">
                  <h1 className="page-title">{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
                  {_.get(this.props, 'pageContext.frontmatter.subtitle', null) && (
                  <p className="page-subtitle">{_.get(this.props, 'pageContext.frontmatter.subtitle', null)}</p>
                  )}
                </div>
              </header>
              <div className="block block-grid container">
              <div className="block-content ">
                <div className=" grid grid-col-3">
                  {_.map(display_posts, (post, post_idx) => (
                  <article key={post_idx} className="  grid-item ">
                    <div className="grid-item-inside">
                    {_.get(post, 'frontmatter.thumb_image', null) && (
                    <Link className="grid-item-image" to={withPrefix(_.get(post, 'url', null))}><img src={withPrefix(_.get(post, 'frontmatter.thumb_image', null))} alt={_.get(this.props, 'pageContext.frontmatter.thumb_image_alt', null)} /></Link>
                    )}
                    <header className="post-header">
                      <div className="post-meta">
                        <time className="published" dateTime={moment(_.get(post, 'frontmatter.date', null)).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date', null)).strftime('%B %d, %Y')}</time>
                      </div>
                      <h2 className="grid-item-title line-left"><Link to={withPrefix(_.get(post, 'url', null))} rel="bookmark">{_.get(post, 'frontmatter.title', null)}</Link></h2>
                    </header>
                    {_.get(post, 'frontmatter.excerpt', null) && (<React.Fragment>
                        <p className="grid-item-content">{_.get(post, 'frontmatter.excerpt', null)}</p>
                        {((_.get(this.props, 'pageContext.frontmatter.has_more_link', null) === true) && _.get(this.props, 'pageContext.frontmatter.more_link_text', null)) && (
                        <p className="grid-item-buttons">
                          <Link className="read-more-link" to={withPrefix(_.get(post, 'url', null))}>{_.get(this.props, 'pageContext.frontmatter.more_link_text', null)}</Link>
                        </p>
                        )}
                    </React.Fragment>)}
                    </div>
                  </article>
                ))}
                </div>
              </div>
           
              </div>
               </Layout>
        );
    }
}
