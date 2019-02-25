import React, { PureComponent } from "react";
import styles from "./index.css";
import TreeView from "../components/TreeView";
import Ticker from "../components/Ticker";
import ClickTime from "../components/Counter";

export default function() {
  let data = {
    a: {
      b: "bbb",
      c: {
        d: "d",
      },
    },
  };
  console.log("render time 1");
  return (
    <div className={styles.normal}>
      <TreeView data={data} name="data" />
      <Ticker times={5} interval={1000} />
      <ClickTime />
    </div>
  );
}
