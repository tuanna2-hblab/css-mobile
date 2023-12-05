import React from "react";
import dvhImg from "./assets/dvh.png";
import "./App.css";

function App() {
  const [isChangePage, setIsChangePage] = React.useState<boolean>(false);

  return isChangePage ? (
    <>
      <div className="box orange">20%</div>
      <div className="box white">40%</div>
      <div className="box orange">60%</div>
      <div className="box white">80%</div>
      <div className="box orange">100%</div>
    </>
  ) : (
    <div className="over-height">
      <p>Not all browsers support dvh</p>
      <img src={dvhImg} width="1500" />
      <button className="btn" onClick={() => setIsChangePage(true)}>
        Next Page
      </button>
    </div>
  );
}

export default App;
