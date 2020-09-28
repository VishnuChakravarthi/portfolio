import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./css/index.css";

ReactDOM.render(<App />, document.querySelector("#root"));

// import React from "react";
// import ReactDOM from "react-dom";
// import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

// // import "./demo/index.css";
// import FullPage from "./demo/FullPage";
// import PageContain from "./demo/PageContain";

// // import "./index.css";

// class Demo extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1 className="title">React Page Scroller Demo</h1>
//         <div className="links">
//           <div className="link">
//             <Link to="/fullpage">Full page demo</Link>
//           </div>
//           <div className="link">
//             <Link to="/contain">Page contain demo</Link>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Router basename="/demos">
//     <div>
//       <Switch>
//         <Route exact path="/" component={Demo} />
//         <Route path="/fullpage" component={FullPage} />
//         <Route path="/contain" component={PageContain} />
//       </Switch>
//     </div>
//   </Router>,
//   document.getElementById("root")
// );
