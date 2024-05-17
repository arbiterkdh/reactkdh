import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function ReactRoot() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          backgroundColor: "linen",
          fontSize: "2rem",
          flexDirection: "column",
          height: "800px",
        }}
      >
        <div>
          <Link to={"/react"}>HOME</Link>
        </div>
        <div>
          <Link to={"/react/doc"}>DOC</Link>
        </div>
        <div>
          <Link to={"/react/tutorial"}>TUTORIAL</Link>
        </div>
        <div>
          <Link to={"/react/sample"}>SAMPLE</Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "react",
    element: <ReactRoot />,
    children: [
      { index: true, element: <div>react main page</div> },
      { path: "doc", element: <div>react doc</div> },
      { path: "tutorial", element: <div>react tutorial</div> },
      { path: "sample", element: <div>react sample</div> },
    ],
  },
]);

// /react/doc
// /react/tutorial
// /react/sample

function App(props) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
