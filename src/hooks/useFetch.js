import axios from 'axios';
import {useState}  from 'react'

const useFetch = url => {
    const [state, setState] = useState()
    const [showError, setShowError] = useState(false)

 
    

    //geting users
    function getAllUser() {
        axios.get(url)
            .then(res => setState(res.data))
            .catch(error => console.log(error));
    }

    

    //Creating users
    const createUser = (body) => {
         axios.post(url, body)
            .then(() => {
                getAllUser();
                setShowError(false)
            })
            .catch((error) =>{
                console.log(error);
                
                setShowError(true) 
            })
    }

    //Delete user
    const deleteUser = (id) => {
        const idUrl = `${url}/${id}`;

        axios.delete(idUrl)
        .then(() => {
            getAllUser()
            setShowError(false)
        })
        .catch(()=> setShowError(true))

    }

    //Update user
    const updateUserId = (body, id) => {

        const urlUpdate  = `${url}/${id}`;

        axios.put(urlUpdate, body)
            .then(()=> {
                getAllUser();
                setShowError(false)
            })
            .catch((error) =>{ 
                setShowError(true); console.log(error)
            })
    }


    return {state ,getAllUser, createUser, deleteUser, updateUserId, showError, setShowError}
}

export default  useFetch;