import React, { Component } from "react";
import Axios from "axios";
import Loader from "../../Components/Loader/Loader";
import Comment from "../../Components/Comment/Comment";
import classes from "./CommentsPage.module.css";


class CommentsPage extends Component {
  state = {
    itemData: [],
    item: null
  };

  componentDidMount() {
    let ItemCommentClicked = this.props.match.params.id;
    let URL = `https://api.hnpwa.com/v0/item/${ItemCommentClicked}.json`;
    Axios.get(URL)
      .then(response => {
        this.setState({
          itemData: response,
          item: ItemCommentClicked
        });
        console.log(response);
      })
      .catch(err => console.log(err));
  }
  render() {
    if (this.state.itemData && this.state.itemData.data) {
      var item = this.state.itemData.data;
      const commentsToPass = [...item.comments];

      var comments = commentsToPass.map(comment => {
        return <Comment comment={comment} key={comment.id} />;
      });
      var profileURL = `/name/${item.user}`

      var display = (
        <div className={classes.CommentsPage}>
          <div className={classes.NewsItem}>
            <div className={classes.Title}>
              <a href={item.url}>
                {item.title}
                <span className={classes.Domain}> ({item.domain})</span>
              </a>
            </div>
            <div className={classes.Details}>
              <div className={classes.Score}>{item.points} points</div>

              <div className={classes.By}>
                by <a className={classes.Name} href={profileURL}>{item.user}</a>
              </div>
              <div className={classes.Comments}>
                comments({item.comments_count})
              </div>
            </div>
          </div>
          <div className={classes.CommentsSection}>
            <h4>Comments</h4>
            <hr />
            {comments}
          </div>
        </div>
      );
    } else {
      display = <Loader className={classes.Loader} />;
    }
    return <div className={classes.Display}>{display}</div>;
  }
}

export default CommentsPage;
