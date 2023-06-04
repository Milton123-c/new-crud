import '../../node_modules/boxicons/css/boxicons.min.css'
import '../styles/navbar.css'

const Navbar = ({setShowForm, showForm}) => {

    const handleShow = () => {
        setShowForm(!showForm)
     
    }

  return (

    <section className='navbar__container'>

        <article className="navbar">

            <article className='navbar__brand'>
            <i className='bx bxl-nodejs'></i>
            <span>CRUD</span>
            </article>

            <button onClick={handleShow} className='navbar__button'>
            <i className='bx bx-user-plus'></i>
                <span>Create Users</span>
            </button>

        </article>

    </section>


  )
}

export default Navbar