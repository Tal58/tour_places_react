function Navbar(){
    return(
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" href="#">About Us</a>
        <a className="nav-link active" href="#">For You</a>
        <a className="nav-link active" href="#">Services</a>
        <a className="nav-link active" href="#">Blog</a>
        <a className="nav-link active" href="#">Vlog</a>
        <a className="nav-link active" href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>
    )
}

export default Navbar