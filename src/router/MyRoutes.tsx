import { useRoutes } from "react-router-dom"
import Layout from "../components/Layout"
import ShowFilms from "../components/ShowFilms"
import AddFilm from "../components/AddFilm"
import FilmDetals from "../components/FilmDetals"

const MyRoutes = () => {
  return useRoutes([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <ShowFilms />
        },
        {
          path: "add",
          element: <AddFilm />
        },
        {
          path: "details/:id",
          element: <FilmDetals />
        }
      ]
    },
    {
      path: "*",
      element: <h1>Page not found</h1>
    }
  ])
}

export default MyRoutes