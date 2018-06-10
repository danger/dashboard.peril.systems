import * as React from "react"
import { Link } from "react-router-dom"

export default () => (
  <div>
    <Link to="/">
      <button>home</button>
    </Link>
    <Link to="/installation">
      <button>Installation</button>
    </Link>
  </div>
)
