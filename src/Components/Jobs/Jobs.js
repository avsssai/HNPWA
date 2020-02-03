import React,{Component} from 'react';
import classes from './Jobs.module.css';
import NewsController from '../../Controllers/NewsController/NewsController';

class Jobs extends Component {
  state = {
    pageNumber:1,
    source:`https://api.hnpwa.com/v0/jobs/1.json`
  }
  LeftArrowClickHandler = () => {
    const pageNumber = this.state.pageNumber;
    if(pageNumber <= 1) {
      return;
    }

    const url =`https://api.hnpwa.com/v0/jobs/${pageNumber-1}.json`;

    this.setState(state=>({
      pageNumber: state.pageNumber - 1,
      source:url
    }))

  }
  RightArrowClickHandler = () => {
    const pageNumber = this.state.pageNumber;
    if(pageNumber >= 1) {
      return;
    }

    const url =`https://api.hnpwa.com/v0/jobs/${pageNumber+1}.json`;

    this.setState(state=>({
      pageNumber: state.pageNumber + 1,
      source:url
    }))

  }

  render(){
    var sourceURL=`https://api.hnpwa.com/v0/jobs/${this.state.pageNumber}.json`
    console.log(sourceURL);
    return(
      <div className={classes.Layout}>
          <NewsController 
          className={classes.NewsController} 
          LeftArrowClickHandler={this.LeftArrowClickHandler}
          RightArrowClickHandler={this.RightArrowClickHandler}
          source={sourceURL}
          pageLimit="1"
          pageNumber={this.state.pageNumber}/>
      </div>
    )  
  }
}

export default Jobs;