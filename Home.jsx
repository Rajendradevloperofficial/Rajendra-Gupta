import React, { Component } from "react";
import NewsItem from "./NewsItem";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 0,
    };
  }
  async getAPIData() {
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${this.props.search?this.props.search:this.props.q}&language=${this.props.language}&sortBy=publishedAt&apiKey=1d454a78cb0e4afcaa942d887669363b`
    );
    response = await response.json();
    this.setState({
      articles: response.articles.filter((x) => x.title !== "[Removed]"),
      totalResults: response.totalResults,
    });
  }
  componentDidMount() {
    this.getAPIData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) this.getAPIData();
  }
  render() {
    return (
      <>
        <div className="container-fluid">
          <h5 className="backround-h text-center p-2 my-3">
            {this.props.search ? this.props.search : this.props.q} News Articles
          </h5>
          <div className="row">
            {this.state.articles.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
                >
                  <NewsItem
                    title={item.title}
                    source={item.source.name}
                    date={item.publishedAt}
                    pic={item.urlToImage}
                    description={item.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
