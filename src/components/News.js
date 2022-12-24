import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Loader from "./Loader";
import PropTypes from 'prop-types';

export class News extends Component {
  articles = [];
  static defaultProps = {
    country: 'in',
    pageSize: 10,
    category: "genral"

  }

  PropTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  }

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async updateNews() {

    const url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=157f8c0ac0b64905b657ae32a944bcef&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parseddata = await data.json();

    console.log(parseddata);
    this.setState({ articles: parseddata.articles });

  }


  async componentDidMount() {
    this.updateNews();
  }

  handleNextClick = async () => {


    this.setState({ page: this.state.page + 1 })
    this.updateNews();
  }

  handlePrevClick = async () => {


    this.setState({ page: this.state.page - 1 })
    this.updateNews();

  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "40px 0px;" }}>News Safari</h1>
        {this.state.loading && <Loader />}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
