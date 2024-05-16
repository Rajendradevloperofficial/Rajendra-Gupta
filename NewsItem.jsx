import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    return (
      <>
        <div className="card">
          <img
            src={this.props.pic?this.props.pic:"./image/noimage.jpeg"}
            height={150}
            className="card-img-top "
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <div className="items">
              <p>{this.props.source}</p>
              <p>{new Date(this.props.date).toDateString()}</p>
            </div>
            <hr />
            <p className="card-text">{this.props.description}</p>
            <a
              href={this.props.url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary background text-dark w-100"
            >
              Read All Articles
            </a>
          </div>
        </div>
      </>
    );
  }
}
