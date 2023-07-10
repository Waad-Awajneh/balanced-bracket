import { useState } from "react";

import "./App.css";
import Box from "./box";

function App() {
  let [boxes, setBoxes] = useState(["a", "b", "c", "d"]);

  return (
    <>
      {boxes.map((e, i) => (
        <>
          <Box ele={e} i={i} key={i} setBoxes={setBoxes} />
        </>
      ))}
    </>
  );
}

export default App;
