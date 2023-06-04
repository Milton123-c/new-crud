
const resetObject = () => {

    let objects = {
        first_name: '',
        last_name: '',
        password: '',
        birthday: '',
        email: ''
    }

    const updateObject = (data) => {
        objects = data
    }

    return {
        objects,
        updateObject
    }

}

export const {objects, updateObject} = resetObject();

export default resetObject;
