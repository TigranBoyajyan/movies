import { useContext } from "react"
import { Context } from "../../context/context"
import st from "./style.module.css"
import { Link } from "react-router-dom"


const ShowFilms: React.FC = () => {

  const { clone, searchSelect, remove, genre } = useContext(Context)


  const ser = (value: any) => {
    const option = value
    const arr = []
    for (let i = 0; i < option.length; i++) {
      if (option[i].selected) {
        arr.push(option[i].value)
      }
    }
    if (searchSelect) {
      searchSelect([...arr])
    }
  }

  const del = (id: number) => {
    if (remove) {
      remove(id)
    }
  }

  return <div className={st.d1}>

    <div>
      <h2 className={st.h2}>Select genre</h2>
      <select className={st.sel} onChange={(a) => ser(a.target.options)} multiple>
        <option>All</option>
        {
          genre?.map((elm, ind) => {
            return <option key={ind} value={elm}>{elm}</option>
          })
        }
      </select>
    </div>

    <div className={st.d2}>
      {
        clone?.map((elm) => {
          return <div className={st.d3} key={elm.id}>
            <img src={elm.photo} className={st.img} />
            <h1 className={st.h}>{elm.name}</h1>
            <Link className={st.link} to={"details/" + elm.id}>Sea more</Link>
            <button className={st.btn} onClick={() => del(elm.id)}>Delete</button>
            <div className={st.d4}>
              {
                elm.comment.length ? <h4 className={st.linkR}>Rating</h4> : ''
              }
              {
                Array(elm?.comment?.length ? Math.round(elm?.comment?.reduce((a, b) => a + b.rating, 0) / elm?.comment?.length) : 0).fill(elm?.comment?.length ? Math.round(elm?.comment?.reduce((a, b) => a + b.rating, 0) / elm?.comment?.length) : 0).map((e, ind) => {
                  return <span className={st.star} key={ind}>&#9733;</span>
                })
              }
            </div>

          </div>
        })
      }
    </div>

  </div>
}

export default ShowFilms