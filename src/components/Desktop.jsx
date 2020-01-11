import React, { Component } from "react";
import styles from "../styles/desktop.module.css";

class Desktop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickIcon(event) {
    event.target.focus();
  }

  onDoubleClickIcon(event) {
    console.log("double clicked");
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.screen}>
          <div className={styles.toolBar}></div>
          <div className={styles.menuBar}>menu</div>
          <div
            className={styles.icon}
            onClick={this.onClickIcon}
            onDoubleClick={this.onDoubleClickIcon}
            id="profileIcon"
            tabIndex="0"
          >
            <div className={styles.iconImage}></div>
            <div className={styles.iconTxt}>Profile.txt</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Desktop;
