import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function ReactRoot() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          backgroundColor: "orange",
          height: "50px",
          fontSize: "2rem",
        }}
      >
        <div>
          <Link className={"link"} to={"/react/doc"}>
            DOC
          </Link>
        </div>
        <div>
          <Link className={"link"} to={"/react/tutorial"}>
            TUTORIAL
          </Link>
        </div>
        <div>
          <Link className={"link"} to={"/react/sample"}>
            SAMPLE
          </Link>
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
