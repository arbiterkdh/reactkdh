import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "about",
    element: <div>about</div>,
  },
  {
    path: "search",
    element: <div>search</div>,
  },
  {
    path: "home",
    element: <div>home</div>,
  },
  {
    path: "spring",
    children: [
      {
        path: "framework",
        element: <div>framework</div>,
      },
      {
        path: "doc",
        element: <div>doc</div>,
      },
      {
        path: "learn",
        element: <div>learn</div>,
      },
    ],
  },
]);
// /about
// /search
// /home
// / 위 경로에 다른 컴포넌트가 출력되도록 작성

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
