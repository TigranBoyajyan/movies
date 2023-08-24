import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Context } from "../../context/context"
import st from "./style.module.css"
import { Rating } from "react-simple-star-rating"
import { Comment } from "../../types/types"

const FilmDetals: React.FC = () => {


  const [comment, setCommrent] = useState<Comment>({ rating: 0, text: '' })

  const { clone, star } = useContext(Context)

  const { id } = useParams()

  const navigate = useNavigate()

  const handleRating = (star: number) => {
    setCommrent({ ...comment, rating: star })
  }

  const seaMore = clone?.find(a => a.id === Number(id))

  const add = (e: React.FormEvent) => {
    e.preventDefault()
    setCommrent({ ...comment })
    if (star) {
      star(comment, id)
      setCommrent({ text: "", rating: 0 })
    }
    navigate("/")
  }

  return <div className={st.d1}>

    <div className={st.d2}>
      <div className={st.d4}>
        <img className={st.img} src={seaMore?.photo} />
      </div>
      <h2 className={st.h}>Name` <span className={st.span}>{seaMore?.name}</span></h2>
      <h2 className={st.h}>Genre` <span className={st.span}>{seaMore?.genre.join(" | ")}</span></h2>
      <h3 className={st.h}>Author` <span className={st.span}>{seaMore?.author}</span></h3>
      <h4 className={st.h}>Year` <span className={st.span}>{seaMore?.year}</span></h4>
      <h4 className={st.h}>Description` <span className={st.span}>{seaMore?.desc}</span></h4>
      <h4 className={st.h}>Buget` <span className={st.span}>{seaMore?.buget} $</span></h4>

      <div>
        <h4 className={st.h}>Rating` {
          Array(seaMore?.comment?.length ? Math.round(seaMore?.comment?.reduce((a, b) => a + b.rating, 0) / seaMore?.comment?.length) : 0).fill(seaMore?.comment?.length ? Math.round(seaMore?.comment?.reduce((a, b) => a + b.rating, 0) / seaMore?.comment?.length) : 0).map((e, ind) => { return <span className={st.star} key={ind}>&#9733;</span> })}
        </h4>
      </div>

      <h4 className={st.h}>Comments` </h4>

      <div className={st.dComm}>
        {
          seaMore?.comment?.map((elm) => {
            return (
              elm.text?.length ? <span className={st.spanComm} key={elm.id}>{elm.text}</span> : "")
          })
        }
      </div>

    </div>

    <div className={st.dForm}>

      <h3 className={st.h}>Add comment</h3>

      <form onSubmit={add}>

        <textarea value={comment.text} placeholder="Commnet..." className={st.comm} onChange={(e) => setCommrent({ ...comment, text: e.target.value })}>
        </textarea>

        <div>
          <Rating onClick={handleRating} initialValue={comment.rating} />
        </div>

        <div>
          <button className={st.btn}>Add</button>
        </div>

      </form>

    </div>

  </div>
}

export default FilmDetals