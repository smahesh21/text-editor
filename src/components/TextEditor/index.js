import {Component} from 'react'

import './index.css'

class TextEditor extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="responsive-container">
          <div className="left-container">
            <h1 className="heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="text-editor-image"
            />
          </div>
          <div className="right-container">
            <div className="header">
              <button onClick={this.onClickBoldIcon} className="bold-button">
                B
              </button>
              <button
                onClick={this.onClickItalicIcon}
                className="italic-button"
              >
                i
              </button>
              <button
                onClick={this.onClickUnderLineIcon}
                className="underline-button"
              >
                U
              </button>
            </div>
            <hr className="horizontal-line" />
            <input onChange={this.onChangeTextArea} />
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
