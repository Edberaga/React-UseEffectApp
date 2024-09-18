const Navbar = () => {
  return (
    <nav className='py-5 mb-5' style={{boxShadow: "0 0 15px 2px rgba(32, 32, 32, 0.1"}}>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/dashboard">Dashboard</a>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar