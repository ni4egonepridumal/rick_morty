import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { Home } from "../../pages/Home/ui/Home";
import { OneCharacterItem } from "../../pages/Character/ui/Character";
import { ErrorPage } from "../../pages/ErrorPage/ui/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/character/:id",
    element: (
      <Suspense fallback={<>Загрузка...</>}>
        <OneCharacterItem />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
