import React, { useRef, useState } from "react";

export default function Box({ ele, i, setBoxes }) {
  let [display, setDisplay] = useState(false);

  const handelChange2 = (e) => {
    e.target.value != ""
      ? setBoxes((prev) => prev.toSpliced(i + 1, 0, e.target.value))
      : "";
    setDisplay(false);
  };
  return (
    <>
      <div className="box" key={i} onClick={() => setDisplay(true)}>
        <p> {ele}</p>
      </div>
      {display ? (
        <div>
          <input type="text" onBlur={handelChange2} autoFocus={display} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
