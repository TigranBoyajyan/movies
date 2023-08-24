import { useContext } from "react"
import { Context } from "../../context/context"
import { useForm } from "react-hook-form"
import { Film } from "../../types/types"
import st from "./style.module.css"
import { useNavigate } from "react-router-dom"


const AddFilm: React.FC = () => {

  const { genre, addNewFilm } = useContext(Context)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<Film>()

  const navigate = useNavigate()

  const add = (data: Film) => {
    if (addNewFilm) {
      addNewFilm(data)
      navigate("/")
    }
  }

  return <div className={st.d1}>

    <form onSubmit={handleSubmit(add)} className={st.form}>

      <div>
        <label>Name</label>
        {errors.name && <p className={st.p}>{errors.name.message}</p>}
        <input className={st.inp} type="text" {...register("name", { required: "Fill field" })} />
      </div>

      <div>
        <label>Desc</label>
        {errors.desc && <p className={st.p}>{errors.desc.message}</p>}
        <input className={st.inp} type="text" {...register("desc", { required: "Fill field" })} />
      </div>

      <div>
        <label>Genre</label>
        {errors.genre && <p className={st.p}>{errors.genre.message}</p>}
        <select className={st.sel} {...register("genre", { required: "Fill field" })} multiple>
          {genre?.map((elm, ind) => {
            return <option key={ind} value={elm}>{elm}</option>
          })
          }
        </select>
      </div>

      <div>
        <label>Year</label>
        {errors.year && <p className={st.p}>{errors.year.message}</p>}
        <input className={st.inp} type="text" {...register("year", { required: "Fill field", pattern: { value: /\d+/, message: "Only Digite" } })} />
      </div>

      <div>
        <label>Author</label>
        {errors.author && <p className={st.p}>{errors.author.message}</p>}
        <input className={st.inp} type="text" {...register("author", { required: "Fill field" })} />
      </div>

      <div>
        <label>Buget</label>
        {errors.buget && <p className={st.p}>{errors.buget.message}</p>}
        <input className={st.inp} type="text" {...register("buget", { required: "Fill field", pattern: { value: /\d+/, message: "Only Digite" } })} />
      </div>

      <div>
        <label>Photo</label>
        {errors.photo && <p className={st.p}>{errors.photo.message}</p>}
        <input className={st.inp} type="text" {...register("photo", { required: "Fill field" })} />
      </div>

      <div>
        <button className={st.btn}>Add</button>
      </div>

    </form>

  </div>
}

export default AddFilm