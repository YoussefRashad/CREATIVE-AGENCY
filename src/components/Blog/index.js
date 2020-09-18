import React from 'react';
import './style.css';
const Blog = () => {
  return (
    <div>

      <div className="blog pd-y bg-gray" id="blog">
        <div className="section-header">
          <h2 className="section-title">recent news</h2>
          <span className="line" />
        </div>

        <div className="container">
          <div className="blog-items">

            <div className="blog-item">
              <div className="blog-item-img">
                <img src="./images/blog/blog1.webp" alt="blog1" />
              </div>
              <div className="blog-content">
                <ul>
                  <li>
                    <span><i className="fa fa-user" /></span>
                    <p>John doe</p>
                  </li>
                  <li>
                    <span><i className="fa fa-clock-o" /></span>
                    <p>18 Oct</p>
                  </li>
                  <li>
                    <span><i className="fa fa-comments" /></span>
                    <p>57</p>
                  </li>
                </ul>
                <h4 className="blog-item-title">
                  Molestie at elementum eu facilisis sed odio
                </h4>
                <p className="blog-item-desc">
                  Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus
                  in
                  mollis nunc sed. Nunc non blandit massa enim nec.
                </p>
                <a href="#" className="blog-item-link">Read more</a>
              </div>
            </div>

            <div className="blog-item mg-lr">
              <div className="blog-item-img">
                <img src="./images/blog/blog2.webp" alt="blog2" />
              </div>
              <div className="blog-content">
                <ul>
                  <li>
                    <span><i className="fa fa-user" /></span>
                    <p>John doe</p>
                  </li>
                  <li>
                    <span><i className="fa fa-clock-o" /></span>
                    <p>18 Oct</p>
                  </li>
                  <li>
                    <span><i className="fa fa-comments" /></span>
                    <p>57</p>
                  </li>
                </ul>
                <h4 className="blog-item-title">
                  Molestie at elementum eu facilisis sed odio
                </h4>
                <p className="blog-item-desc">
                  Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus
                  in
                  mollis nunc sed. Nunc non blandit massa enim nec.
                </p>
                <a href="#" className="blog-item-link">Read more</a>
              </div>
            </div>

            <div className="blog-item">
              <div className="blog-item-img">
                <img src="./images/blog/blog3.webp" alt="blog3" />
              </div>
              <div className="blog-content">
                <ul>
                  <li>
                    <span><i className="fa fa-user" /></span>
                    <p>John doe</p>
                  </li>
                  <li>
                    <span><i className="fa fa-clock-o" /></span>
                    <p>18 Oct</p>
                  </li>
                  <li>
                    <span><i className="fa fa-comments" /></span>
                    <p>57</p>
                  </li>
                </ul>
                <h4 className="blog-item-title">
                  Molestie at elementum eu facilisis sed odio
                </h4>
                <p className="blog-item-desc">
                  Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus
                  in
                  mollis nunc sed. Nunc non blandit massa enim nec.
                </p>
                <a href="#" className="blog-item-link">Read more</a>
              </div>
            </div>

          </div>
          <div className="clear" />
        </div>
      </div>

    </div>
  );
};

export default Blog;
