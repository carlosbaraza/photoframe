import React from "react";
import "./Slideshow.css";

const NUMBER_PHOTOS = 7;

export class Slideshow extends React.Component {
  constructor() {
    super();
    this.state = {
      photoNumber: 1
    };
    setInterval(this.changePicture, 5000);
  }

  changePicture = () => {
    if (this.state.photoNumber + 1 > NUMBER_PHOTOS) {
      this.setState({
        photoNumber: 1
      });
    } else {
      this.setState({
        photoNumber: this.state.photoNumber + 1
      });
    }
  };

  renderPictures() {
    let pictures = [];
    for (let i = 1; i <= NUMBER_PHOTOS; i++) {
      const className = i === this.state.photoNumber ? "active" : "";
      const src = `/photo${i}.jpg`;
      pictures.push(<img key={i} className={className} src={src} />);
    }
    return pictures;
  }

  render() {
    return <div className="Slideshow">{this.renderPictures()}</div>;
  }
}
