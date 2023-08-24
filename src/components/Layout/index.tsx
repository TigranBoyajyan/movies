import { NavLink, Outlet } from "react-router-dom"
import st from "./style.module.css"
import { useContext } from "react"
import { Context } from "../../context/context"


const Layout: React.FC = () => {

  const navStyle = ({ isActive }: { isActive: boolean }) => {
    return isActive ? { color: "blue", fontSize: "32px", fontWeight: "bold" } : undefined
  }

  const { searchName } = useContext(Context)

  const ser = (value: string) => {
    if (searchName) {
      searchName(value)
    }
  }

  return <div>

    <header>
      <nav>
        <ul className={st.ul}>

          <div>
            <li><NavLink style={navStyle} to={"/"}>Show Films</NavLink></li>
            <li><NavLink style={navStyle} to={"/add"}>Add Film</NavLink></li>
          </div>

          <input className={st.inp} type="text" placeholder="search..." onChange={(e) => ser(e.target.value)} />

        </ul>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
}

export default Layout