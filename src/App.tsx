import { useEffect, useState } from "react";
import { Film, Comment } from "./types/types";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./router/MyRoutes";
import { Context } from './context/context';

function App() {

  const [films, setFilms] = useState<Film[]>([
    {
      id: 1,
      name: "The Revenant",
      desc: "aaa",
      genre: ["Triller", "History", "Action"],
      year: 2020,
      author: "aaa",
      buget: 50000,
      photo: "https://hips.hearstapps.com/hmg-prod/images/best-historical-movies-the-revenant-1655931484.png?resize=480:*",
      rating: 0,
      comment: []
    }
    ,
    {
      id: 2,
      name: "Avatar",
      desc: "bbb",
      genre: ["Action", "Detective"],
      year: 2010,
      author: "bbb",
      buget: 10000,
      photo: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg",
      rating: 0,
      comment: []
    }
    ,
    {
      id: 3,
      name: "Shazam",
      desc: "ccc",
      genre: ["Drama", "Humor", "Triller"],
      year: 2000,
      author: "ccc",
      buget: 10000,
      photo: "https://hips.hearstapps.com/hmg-prod/images/best-new-comedy-movies-2023-shazam-1670021757.jpg",
      rating: 0,
      comment: []
    }
  ])

  const [genre, setGenre] = useState(["Triller", "Humor", "History", "Action", "Drama", "Bible", "Detective"])

  const addNewFilm = (obj: Film) => {
    setFilms([...films, { ...obj, id: Date.now() }])
  }

  const [clone, setClone] = useState([...films])

  useEffect(() => {
    setClone([...films])
  }, [films])

  const searchSelect = (value: string[]) => {
    if (value.includes("All")) {
      setClone([...films])
    } else {
      let x: Film[] = []
      for (let i = 0; i < films.length; i++) {
        for (let j = 0; j < value.length; j++) {
          if (films[i].genre.includes(value[j])) {
            if (!x.find(a => a.id === films[i].id)) {
              x.push(films[i])
            }
          }
        }
      }
      setClone([...x])
    }
  }

  const searchName = (value: string) => {
    setClone([...films.filter(a => a.name.includes(value))])
  }

  const remove = (id: number) => {
    setFilms([...films.filter(s => s.id !== id)])
  }

  const star = (obj: Comment, filmId: string) => {
    const x = films.find(a => a.id === Number(filmId))
    if (x) {
      x.comment.push({ ...obj, id: Date.now() })
      setFilms([...films])
    }
  }

  return <div>

    <Context.Provider value={{ genre, addNewFilm, films, searchSelect, clone, searchName, remove, star }}>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </Context.Provider>

  </div>
}

export default App;
