import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import FiveStartRendered from "../five_start_rendered/FiveStartRendered";
import StarComponentWithProps from "../star_component_with_props/StarComponentWithProps";
import StarComponentWithState from "../star_component_with_state/StarComponentWithState";
import CompletedStarComponent from "../completed_star_component/CompletedStarComponent";

const starRatingViews = [
  {
    path: "fiveStartRendered",
    title: "Five Start Rendered",
    element: (props)=><FiveStartRendered {...props}/>,
  },
  {
    path: "starComponentWithProps",
    title: "Star component with props",
    element: (props)=><StarComponentWithProps {...props}/>,
  },
  {
    path: "starComponentWithState",
    title: "Star component with state",
    element: (props)=><StarComponentWithState {...props}/>,
  },
  {
    path: "completedStarComponent",
    title: "completed star component",
    element: (props) =><CompletedStarComponent {...props}/>,
  },
  // {path : "fiveStartRendered" , title : "Five Start Rendered" , element : FiveStartRendered},
];

const StartRating = () => (
  <>
    {starRatingViews.map((e) => {
      return (
        <button>
          <Link to={e.path}>{e.title}</Link>
        </button>
      );
    })}
    <Routes>
    {starRatingViews.map((e) => {
      return <Route path={e.path} element={e.element({...e})}></Route>
      ;
    })}
      {/* <Route path="fiveStartRendered" element={<FiveStartRendered />}></Route>
      <Route
        path="starComponentWithProps"
        element={<StarComponentWithProps />}
      ></Route>
      <Route
        path="starComponentWithState"
        element={<StarComponentWithState />}
      ></Route>
      <Route
        path="completedStarComponent"
        element={<CompletedStarComponent />}
      ></Route> */}
    </Routes>
  </>
);
export default StartRating;
