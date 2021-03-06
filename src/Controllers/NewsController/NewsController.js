import React, { Component } from "react";
// import classes from "./NewsController.module.css";
import './NewsController.css';
import NewsItem from "../../Components/NewsItem/NewsItem";
import Pagination from "../../Components/Pagination/Pagination";
import Axios from "axios";
import Loader from "../../Components/Loader/Loader";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class NewsController extends Component {
  state = {
    articles: [],
    pageNumber: 1,
    numberOfPages: 0,
    isLoading: true
  };
  componentDidMount() {
    var source = `${this.props.source}`;
    console.log(source);
    Axios.get(source)
      .then(data => {
        this.setState({
          articles: data,
          isLoading: false
        });
      })
      .catch(err => console.log(err));
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.source !== this.props.source) {
      console.log("the props have changed.");
      var source = `${this.props.source}`;
      console.log(source);
      this.setState({
        isLoading: true
      });
      Axios.get(source)
        .then(data => {
          this.setState({
            articles: data,
            isLoading: false
          });
        })
        .catch(err => console.log(err));
      window.scrollTo(0, 0);
      // window.scroll({top: 0, left: 0, behavior: 'smooth' })
    }
  }
  changePage = num => {
    this.setState({
      pageNumber: num
    });
    console.log(num);
  };
  commentsClicked = item => {
    console.log(item);
  };
  LeftArrowClickHandler = () => {
    this.props.LeftArrowClickHandler();
    console.log("clicked");
  };
  RightArrowClickHandler = () => {
    this.props.RightArrowClickHandler();
    console.log("clicked");
  };

  render() {
    let data = this.state.articles.data;
    if (data) {
      var pageNumber = this.props.pageNumber;

      var pagination = (
        <Pagination
          pageLimit={this.props.pageLimit}
          click={this.changePage}
          pageNumber={pageNumber}
          LeftArrowClickHandler={this.LeftArrowClickHandler}
          RightArrowClickHandler={this.RightArrowClickHandler}
        />
      );
    } else {
      pagination = "";
    }
    if (data && !this.state.isLoading) {
      var itemsToDisplayInPage = data.map(item => {
        let srlNumber =
          (this.props.pageNumber - 1) * 30 + data.indexOf(item) + 1;
        return (
          <NewsItem
            id={item.id}
            key={item.id}
            item={item}
            srlNumber={srlNumber}
          />
        );
        // return <NewsItem id={item.id} key={item.id} item={item} />;
      });
    } else if (this.state.isLoading) {
      itemsToDisplayInPage = <Loader className="Loader" />;
      // itemsToDisplayInPage= null;
    }
    return (
      <div className="NewsController">
        <div className="Pagination">{pagination}</div>
        <div className="NewsItems">
        <TransitionGroup component={null}>
          {!this.state.isLoading && (
            <CSSTransition classNames="news" timeout={2000}>
              <div className="ItemsToDisplayInPage">
                {itemsToDisplayInPage}
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>

        </div>

        {!this.state.isLoading ? (
          <div className="Pagination2">{pagination}</div>
        ) : null}
      </div>
    );
  }
}

export default NewsController;
