import React,{Component} from 'react';
import classes from './Ask.module.css';
import NewsController from '../../Controllers/NewsController/NewsController';

class Ask extends Component {
  state = {
    pageNumber:1,
    source:`https://api.hnpwa.com/v0/ask/1.json`
  }
  LeftArrowClickHandler = () => {
    const pageNumber = this.state.pageNumber;

    const url =`https://api.hnpwa.com/v0/ask/${pageNumber-1}.json`;

    this.setState(state=>({
      pageNumber: state.pageNumber - 1,
      source:url
    }))

  }
  RightArrowClickHandler = () => {
    const pageNumber = this.state.pageNumber;
    const url =`https://api.hnpwa.com/v0/ask/${pageNumber+1}.json`;

    this.setState(state=>({
      pageNumber: state.pageNumber + 1,
      source:url
    }))

  }

  render(){
    var sourceURL=`https://api.hnpwa.com/v0/ask/${this.state.pageNumber}.json`
    console.log(sourceURL);
    return(
      <div className={classes.Layout}>
          <NewsController 
          className={classes.NewsController} 
          LeftArrowClickHandler={this.LeftArrowClickHandler}
          RightArrowClickHandler={this.RightArrowClickHandler}
          source={sourceURL}
          pageLimit="2"
          pageNumber={this.state.pageNumber}/>
      </div>
    )  
  }
}

export default Ask;