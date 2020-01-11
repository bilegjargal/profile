import React, { Component } from "react";
import styles from "../styles/terminal.module.css";

class Terminal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.menuBar}>
          <div className={`${styles.menuBtn} ${styles.closeBtn}`}></div>
          <div className={`${styles.menuBtn} ${styles.minimizeBtn}`}></div>
          <div className={`${styles.menuBtn} ${styles.maximizeBtn}`}></div>
        </div>
        <div className={`${styles.terminal}`}></div>
      </React.Fragment>
    );
  }
}

export default Terminal;
