import '../../node_modules/boxicons/css/boxicons.min.css'
import useFetch from '../hooks/useFetch'
import '../styles/cars.css'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/slice/updateUser.slice';
import alertify from 'alertifyjs';

import { useEffect, useState } from 'react';
import Loading from './Loading';


const backgroud = {
    backgroundImage: 'url(/card.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'contains',
    backgroundSize: 'cover'
}

const Card = ({ onUser, setShowForm, setSetUpdate }) => {

    const url = 'https://api-user-hew8.onrender.com/api/v1/users';
    const { deleteUser, showError } = useFetch(url)
    const dispatch = useDispatch()
    const [removeUser, setRemoveUser] = useState(false)
    const [showLoading, setShowLoading] = useState(false)

    //Delete user
    const handleDelete = () => {

        alertify.confirm('Confirm', 'Are you sure you want to delete this user?',
            function () {
                setShowLoading(true)
                setRemoveUser(true)
                const id = onUser.id;
                deleteUser(id);
            },
            function () {
                alertify.error("User not deleted");
            }
        );


    }

    const handleUpdate = () => {
        setSetUpdate(true)
        setShowForm(true)
        dispatch(addUser(onUser))
    }

    useEffect(() => {

        if(removeUser){


            if(showError == false){
               
                    setShowLoading(false)
               
                alertify.error("User deleted");
            }

            setRemoveUser(false)
        }

    }, [removeUser])

    return (
        <section className='card__container' style={backgroud} >

        {
            showLoading ? <Loading /> : ''
        }

            <article className='card'>
                <h3 className='card__title'>
                    <p  className='card__name'> 
                    
                        {onUser.first_name} 

                    </p  >
                   
                    <p className='card__last-name'>
                    {onUser.last_name}
                    </p>
                </h3>

           
                <article>
                    <p>Email</p>
                <p className='card__email'> {onUser.email}</p>

                </article>

                
                <article>

                <p>Birthday</p>
                <p className='card__date'>{onUser.birthday} <i className='bx bx-party'></i></p>

                </article>
                <article className='card__button'>
                    <button onClick={handleDelete} className='card__button-delete'><i className='bx bxs-trash'></i></button>
                    <button onClick={handleUpdate} className='card__button-update'><i className='bx bx-edit'></i></button>
                </article>

            </article>

        </section>
    )
}

export default Card