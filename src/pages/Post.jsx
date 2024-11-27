import React from "react";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }
  componentDidMount() {
    fetch(
      `https://gist.githubusercontent.com/mahsa-shm/0550a91d5f73e28e098f51eafaa004f5/raw/2b51112c032dd2d5cf926c89b2eb5df2b76e04e8/myData.json`
    )
      .then((response) => response.json())
      .then((result) => {
        const post = result.datas.find((p) => p["id"] === this.props.postId);
        this.setState({
          post: post,
        });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.postId !== this.props.postId) {
      fetch(
        `https://gist.githubusercontent.com/mahsa-shm/0550a91d5f73e28e098f51eafaa004f5/raw/33e8aceee471c21db1ceb0e08b0c2d8ae41a83a3/myData.json`
      )
        .then((response) => response.json())
        .then((result) => {
          const post = result.datas.find((p) => p["id"] === this.props.postId);
          this.setState({
            post: post,
          });
        });
    }
  }
  render() {
    return (
      <>
        {this.state.post && (
          <div className="comment-post">
            <img src={this.state.post.imgSrc} />
            <h2>{this.state.post.title}</h2>
            <p>{this.state.post.description}</p>
            <div className="Comment-sec">
              <div className="comment-sec-little">
                {this.state.post.comments.map((a) => (
                  <section key={Math.random(100000)}>{a.text}</section>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
