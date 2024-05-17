import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useNavigate,
  useParams,
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
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function BoardList() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Link to={"/board/1"}>1번 게시물</Link>
      </div>
      <div>
        <Link to={"/board/2"}>2번 게시물</Link>
      </div>
      <div>
        <Link to={"/board/3"}>3번 게시물</Link>
      </div>
      <div>
        <Link to={"/board2?id=1"}>2-1번 게시물</Link>
      </div>
      <div>
        <Link to={"/board2?id=2"}>2-2번 게시물</Link>
      </div>
      <div>
        <Link to={"/board2?id=3"}>2-3번 게시물</Link>
      </div>
      <div
        style={{ width: "100px", cursor: "pointer" }}
        onClick={() => navigate("/board3/1")}
      >
        3-1번 게시물
      </div>
      <div
        style={{ width: "100px", cursor: "pointer" }}
        onClick={() => navigate("/board3/2")}
      >
        3-2번 게시물
      </div>
      <div
        style={{ width: "100px", cursor: "pointer" }}
        onClick={() => navigate("/board3/3")}
      >
        3-3번 게시물
      </div>
    </div>
  );
}

function BoardView() {
  const params = useParams();
  return <div>{params.id}번 게시물 보기</div>;
}

function BoardView2() {
  const [params] = useSearchParams();
  return <div>2-{params.get("id")}번 게시물 보기</div>;
}

function BoardView3() {
  const params = useParams();
  return <div>3-{params.id}번 게시물 보기</div>;
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
        path: "board/:id",
        element: <BoardView />,
      },
      {
        path: "list",
        element: <BoardList />,
      },
      {
        path: "board2",
        element: <BoardView2 />,
      },
      {
        path: "board3/:id",
        element: <BoardView3 />,
      },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
