import React, {Component} from 'react'

class UserImgUpload extends Component {
  componentDidMount() {
    const script = document.createElement("script");

      const scriptText = document.createTextNode("src=https://ucarecdn.com/libs/widget/3.2.0/uploadcare.full.min.js");

      script.appendChild(scriptText);
      document.head.appendChild(script);
  }
  render() {
    return (
      <div>
        <h4>IMG UPLOAD TEST</h4>
      </div>
    )
  }
}

export default UserImgUpload
