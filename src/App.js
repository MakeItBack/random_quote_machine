import React from "react";
import "./App.css";
import Quote from "./components/Quote";
import Author from "./components/Author";
import Social from "./components/Social";
import Refresh from "./components/Refresh";

function App() {
   const defaultBackground = "saddlebrown";
   return (
      <div className="App">
         <main className="App-main">
            <Quote backgroundColour={defaultBackground} />
            <Author backgroundColour={defaultBackground} />
            <footer className="App-footer">
               <div className="App-social">
                  <Social backgroundColour={defaultBackground} />
                  <Social backgroundColour={defaultBackground} />
               </div>
               <Refresh backgroundColour={defaultBackground} />
            </footer>
         </main>
      </div>
   );
}

export default App;
