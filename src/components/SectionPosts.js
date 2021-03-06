import React from 'react';
import _ from 'lodash';

import {htmlToReact, getPages, Link, withPrefix, markdownify} from '../utils';
import BlogPostFooter from './BlogPostFooter';

export default class SectionPosts extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/blog'), 'frontmatter.date', 'desc');
        let recent_posts = display_posts.slice(0, 3);
        return (
            <section id={_.get(section, 'section_id', null)} className='container'>
              <div className="block-header inner-small">
                {_.get(section, 'title', null) && (
                <h2 className="block-title">{_.get(section, 'title', null)}</h2>
                )}
                {_.get(section, 'subtitle', null) && (
                <p className="block-subtitle">
                  {htmlToReact(_.get(section, 'subtitle', null))}
                </p>
                )}
              </div>
              <div className="inner">
                <div className=" row ">
                  {_.map(recent_posts, (post, post_idx) => (
                  <article key={post_idx} className=" col-sm-4 ">
                    <div className="card p-3">
                    <div className="post-card-inside bg-white">
                      {_.get(post, 'frontmatter.thumb_image', null) && (
                      <Link className="post-card-thumbnail" to={withPrefix(_.get(post, 'url', null))}>
                        <img className="thumbnail" src={withPrefix(_.get(post, 'frontmatter.thumb_image', null))} alt={_.get(post, 'frontmatter.title', null)} />
                      </Link>
                      )}
                      <div className="post-card-content">
                        <header className="post-header">
                          <h5 className="post-title mt-2"><Link to={withPrefix(_.get(post, 'url', null))} rel="bookmark">{_.get(post, 'frontmatter.title', null)}</Link></h5>
                        </header>
                        <div className="post-excerpt">
                          {markdownify(_.get(post, 'frontmatter.excerpt', null))}
                        </div>
                        <BlogPostFooter {...this.props} page={post} date_type={'short'} />
                      </div>
                    </div>
                 
                    </div>
                  </article>
                  ))}
                </div>
              </div>
            </section>
        );
    }
}
