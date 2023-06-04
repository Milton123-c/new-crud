import '../styles/form.css';
import '../../node_modules/boxicons/css/boxicons.min.css'
import { useForm } from 'react-hook-form';
import useFetch from '../hooks/useFetch';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useRef, useState} from 'react';
import {objects} from '../utils/resetsForm'; 
import {addUser} from '../store/slice/updateUser.slice'
import alertify from 'alertifyjs';


 const FormUser = ({setShowForm, showForm, setUpdate, setSetUpdate}) => {
    

    const  {register, handleSubmit, reset} = useForm()    
    
    //getting user data
    const {updateUser} =  useSelector(state => state)
    const dispatch = useDispatch()

    const url = 'https://api-user-hew8.onrender.com/api/v1/users';

    const {state,getAllUser,createUser,updateUserId} = useFetch(url)

    const [errorEmail, setErrorEmail] = useState(false)
    const email = useRef();

    const handleShowNavbar = () => {
        setShowForm(!showForm)
        setSetUpdate(false)
        dispatch(addUser(objects))

    }

    const submit = (data) => {
        

        if(setUpdate){

            alertify.confirm('Confirm', 'Are you sure you want to update this user?',
            function () {
                const id = updateUser.id
                 updateUserId(data,id);
    
                 alertify.error("User updated");
                 setShowForm(!showForm)
            },
            function () {
                alertify.error("User not updated"); 
             })
            
        }else{
            alertify.confirm('Confirm', 'Are you sure you want to create a new user?',
            function () {
                
                createUser({...data, email: email.current.value})
    
                 alertify.error("User created");
                 setShowForm(!showForm)
            },
            function () {
                alertify.error("User not created"); 
             })
            
             
        }

       
        // reset(objects)
    }

    useEffect(()=>{

        if(updateUser){
            const {id, ...newUser} = updateUser

             reset(newUser)
        }
        
    }, [updateUser])

    useEffect(()=>{
        getAllUser()
    },[])

    

    const changeEmail = () => {
        if(state){
            const dateEmail = state.find(element => element.email == email.current.value)
            
            setErrorEmail(dateEmail ? true : false)
            
        }
    }

  return (
    <section className={showForm ? 'form open__form' : 'form'}>
        <button onClick={handleShowNavbar} className='btn__close'><i className='bx bx-x-circle'></i></button>

        <form className="form__container" onSubmit={handleSubmit(submit)}>
    
            <button onClick={handleShowNavbar} className='btn__close-width'><i className='bx bx-x-circle'></i></button>

            <h2 className="form__title">User <i className='bx bxs-user-pin' ></i></h2>

            <article className="form__group">
                <label htmlFor="">First name</label>
                <input {...register("first_name")} type="text" placeholder="First name" />
            </article>

            <article className="form__group">
                <label htmlFor="">Last name</label>
                <input {...register("last_name")}  type="text" placeholder="Last name" />
            </article>

            <article className="form__group">
                <label htmlFor="">Email</label>
                <input {...register("email")} ref={email} onChange={changeEmail}  type="email" placeholder="Email" />
            </article>

            <article className="form__group">
                <label htmlFor="">Password</label>
                <input {...register("password")}  type="password" placeholder="password" />
            </article>

            <article className="form__group">
                <label htmlFor="">Your Date</label>
                <input {...register("birthday")}  type="date" placeholder="AA/MM/DD" />
            </article>

            <input  className="form__buttom" type={errorEmail ? 'button' : 'submit'} value={setUpdate ? 'Update User' : 'Create new user'} />

            <p className={errorEmail ? 'error__email error__email-open' : 'error__email'}> Error, The email is already in use</p>

        </form>

    </section>
  )
}

export default FormUser;