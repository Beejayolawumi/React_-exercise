import Card from "./component/Card";

import { useContext } from "react";
import { HolderContext } from "./context/HolderContextProvider";
import RandomComp from "./context/RandomComp";

function App() {
  const { allContent } = useContext(HolderContext);

  return (
    <div className="App">
      <RandomComp />
      {allContent.map((value) => {
        return <Card key={value.allContent} {...value} />;
      })}
    </div>
  );
}

export default App;
