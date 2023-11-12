import React from "react";
import Photo from "./Photo";

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {/* I'm the photogrid
        <pre>{
            JSON.stringify(this.props.posts, null, "")
            }

        </pre> */}
        {this.props.posts.map((post, i) => (
          <Photo {...this.props} key={i} i={i} post={post} />
        ))}
      </div>
    );
  }
});

export default PhotoGrid;
