import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useParams,
} from "react-router-dom";

function Root() {
  return (
    <div>
      <div>
        <div>
          <Link to={"/"}>MAIN</Link>
        </div>
        <div>
          <Link to={"/list"}>LIST</Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function BoardList() {
  const params = useParams();
  return (
    <div>
      <div>1번 게시물</div>
      <div>2번 게시물</div>
      <div>3번 게시물</div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <div>main page</div>,
      },
      {
        path: "board",
        element: <BoardView />,
      },
      {
        path: "list",
        element: <BoardList />,
      },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
