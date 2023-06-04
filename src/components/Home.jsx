import { useEffect } from "react";
import useFetch from "../hooks/useFetch.js";
import Card from "./Card.jsx";
import '../styles/home.css'
import Loading from "./Loading";


const Home = ({setSetUpdate, setShowForm}) => {

    const url = 'https://api-user-hew8.onrender.com/api/v1/users';

    const { state, getAllUser } = useFetch(url)

  

    useEffect(() => {
        getAllUser();

    }, [state])
    
    
    
    return (
        <section className="home__container">

            {
                !state &&  <Loading/> 
            }

            {
                state?.map(user => (
                    <Card setShowForm={setShowForm} setSetUpdate={setSetUpdate} onUser={user} key={user.id} />
                ))
            }

         
          {
            state ? 
            state?.length == 0 &&  <p className="home__user"> There aren't users  </p> 
            :
            ''
           }
            
        
        </section>

    )
}

export default Home;