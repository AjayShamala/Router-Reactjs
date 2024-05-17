import {Link} from 'react-router-dom'
import './index.css'
const Header = () => (
  <nav className="nav-container">
    <div className="containersss">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="img"
        alt="wave"
      />
      <h1 className="heading">Wave</h1>
    </div>
    <ul className="wave-container">
      <li className="list1">
        <Link className="link-1" to="/">
          Home
        </Link>
      </li>
      <li className="list2">
        <Link className="link-2" to="/about">
          About
        </Link>
      </li>
      <li className="list3">
        <Link className="link-3" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
