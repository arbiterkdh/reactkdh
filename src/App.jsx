import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    page: "about",
    element: <div>about</div>,
  },
  {
    page: "search",
    element: <div>search</div>,
  },
  {
    page: "home",
    element: <div>home</div>,
  },
  {
    page: "spring",
    children: [
      {
        page: "framework",
        element: <div>framework</div>,
      },
      {
        page: "doc",
        element: <div>doc</div>,
      },
      {
        page: "learn",
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
