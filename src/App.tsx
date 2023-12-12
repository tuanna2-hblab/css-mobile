import React from "react";
import dvhImg from "./assets/dvh.png";
import "./App.css";
import { debounce } from "lodash";

function App() {
  const [isChangePage, setIsChangePage] = React.useState<boolean>(false);
  const [vh, setVh] = React.useState<number>(() => window.innerHeight * 0.01);

  React.useEffect(() => {
    const handleResizeWindowInnerHeight = () => {
      setVh(window.innerHeight * 0.01);
    };
    const debounceHandleResizeWindowInnerHeight = debounce(
      handleResizeWindowInnerHeight,
      200
    );

    window.addEventListener("resize", debounceHandleResizeWindowInnerHeight);

    return () => {
      window.removeEventListener(
        "resize",
        debounceHandleResizeWindowInnerHeight
      );
    };
  }, []);

  return isChangePage ? (
    <div
      style={
        {
          "--vh": `${vh}px`,
        } as React.CSSProperties
      }
      className="container"
    >
      <div className="box orange">20%</div>
      <div className="box white">40%</div>
      <div className="box orange">60%</div>
      <div className="box white">80%</div>
      <div className="box orange">100%</div>
    </div>
  ) : (
    <div className="over-height">
      <p>Not all browsers support dvh</p>
      <img src={dvhImg} className="img" />
      <button className="btn" onClick={() => setIsChangePage(true)}>
        Next Page
      </button>
    </div>
  );
}

export default App;
