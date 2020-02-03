import React, { Component } from 'react';
import classes from './Top.module.css';
import NewsController from '../../Controllers/NewsController/NewsController';

class Top extends Component {
  state = {
    pageNumber:1,
    source:`https://api.hnpwa.com/v0/news/1.json`
  }
  LeftArrowClickHandler = () => {
    const pageNumber = this.state.pageNumber;
    if(pageNumber <= 1) {
      return;
    }

    const url =`https://api.hnpwa.com/v0/news/${pageNumber-1}.json`;

    this.setState(state=>({
      pageNumber: state.pageNumber - 1,
      source:url
    }))

  }
  RightArrowClickHandler = () => {
    
    const pageNumber = this.state.pageNumber;
      if(pageNumber >= 10) {
        return;
      }
    const url =`https://api.hnpwa.com/v0/news/${pageNumber+1}.json`;

    this.setState(state=>({
      pageNumber: state.pageNumber + 1,
      source:url
    }))

  }

  render(){
    var sourceURL=`https://api.hnpwa.com/v0/news/${this.state.pageNumber}.json`
    console.log(sourceURL);
    return(
      <div className={classes.Layout}>
          <NewsController 
          className={classes.NewsController} 
          LeftArrowClickHandler={this.LeftArrowClickHandler}
          RightArrowClickHandler={this.RightArrowClickHandler}
          source={sourceURL}
          pageLimit="10"
          pageNumber={this.state.pageNumber}/>
      </div>
    )  
  }
}

export default Top;