const authHeader = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (currentUser && currentUser.authToken)
      return { Authorization: `Bearer ${currentUser.authToken}` };
    else return {};
  };


const getUserDetailById =async (id) => {
    const requestOptions = {
        method: "GET"
      };

    try {
        const res =await fetch(
        `http://localhost:4000/api/user/${id}`,
        requestOptions
        )
        if(res.status != 200)
            throw {status:res.status}
        const data =await res.json()

        return {status:200, data}
    }catch(err){
        return err
    }
}

const getAllUsers =async (adminId) => {
    const requestOptions = {
        method: "GET",
        headers: authHeader() 
      };
    try {
        const res =await fetch(
        `http://localhost:4000/api/users/${adminId}`,
        requestOptions
        )
        if(res.status != 200)
            throw {status:res.status}
        const data =await res.json()


        return {status:200, data}
    }catch(err){
        return err
    }
}

const getUsersByPincode =async (pin) => {
    const requestOptions = {
        method: "GET",
      };

    try {
        const res =await fetch(
        `http://localhost:4000/api/usersbypin/${pin}`,
        requestOptions
        )
        if(res.status != 200)
            throw {status:res.status}
        const data =await res.json()

        return {status:200, data}
    }catch(err){
        return err
    }
}


export const UserService = {
    getUserDetailById,
    getAllUsers,
    getUsersByPincode
};