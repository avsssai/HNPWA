import React,{ Component } from "react";
import classes from "./NewsController.module.css";
import NewsItem from '../../Components/NewsItem/NewsItem';
import Pagination from '../../Components/Pagination/Pagination';
import Axios from "axios";
import Loader from '../../Components/Loader/Loader';

class NewsController extends Component {
    state = {
        articles:[],
        pageNumber:1,
        numberOfPages:0
    }
    componentDidMount(){
        var source = `${this.props.source}`;
        console.log(source);
        Axios.get(source)
        .then(data => {
            this.setState({
                articles:data
            });
        })
        .catch(err => console.log(err));

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.source !== this.props.source) {
          console.log('the props have changed.')
          var source = `${this.props.source}`;
          console.log(source);
          Axios.get(source)
          .then(data => {
              this.setState({
                  articles:data
              });
          })
          .catch(err => console.log(err));
  
        }
      }
          changePage = (num) => {
        this.setState({
            pageNumber:num
        })
        console.log(num);
    }
    commentsClicked = (item) => {
        console.log(item)
    }
    LeftArrowClickHandler = () => {
        this.props.LeftArrowClickHandler();
        console.log("clicked");
    }
    RightArrowClickHandler = () => {
        this.props.RightArrowClickHandler();
        console.log("clicked");

    }

    render(){
        let data = this.state.articles.data;
        if(data){
                        
            var itemsToDisplayInPage = (
                data.map(item => {
                    let srlNumber = data.indexOf(item)+1;
                    return <NewsItem id={item.id} key={item.id} item={item} srlNumber={srlNumber}/>
                })
            )
            var pageNumber = this.props.pageNumber;
        }else{
            itemsToDisplayInPage = <Loader />;
        }
        return (
            <div className={classes.NewsController}>
                {itemsToDisplayInPage}
                <Pagination pageLimit={this.props.pageLimit}
                click={this.changePage} 
                pageNumber={pageNumber}
                LeftArrowClickHandler={this.LeftArrowClickHandler}
                RightArrowClickHandler={this.RightArrowClickHandler}

                />
            </div>
        )
    }
}

export default NewsController;