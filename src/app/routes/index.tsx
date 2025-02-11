import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { Home } from "../../pages/Home/ui/Home";
import { OneCharacterItem } from "../../pages/Character/ui/Character";

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
    element: <div>Ошибка</div>,
  },
]);
