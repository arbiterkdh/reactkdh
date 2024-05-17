import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useNavigate,
  useSearchParams,
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
        <div>
          <Link to={"/list2"}>LIST2</Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function BoardView() {
  const [params] = useSearchParams();
  return <div>{params.get("id")}번 게시물 보기</div>;
}

function BoardList() {
  return (
    <div>
      <div>
        <Link to={"/board?id=1"}>1번 게시물</Link>
      </div>
      <div>
        <Link to={"/board?id=2"}>2번 게시물</Link>
      </div>
      <div>
        <Link to={"/board?id=3"}>3번 게시물</Link>
      </div>
    </div>
  );
}

function BoardList2() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/board?id=1")}
      >
        1번 게시물
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/board?id=2")}
      >
        2번 게시물
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/board?id=3")}
      >
        3번 게시물
      </div>
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
        path: "/board",
        element: <BoardView />,
      },
      {
        path: "/list",
        element: <BoardList />,
      },
      {
        path: "/list2",
        element: <BoardList2 />,
      },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
