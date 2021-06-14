const authHeader = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (currentUser && currentUser.authToken)
      return { Authorization: `Bearer ${currentUser.authToken}` };
    else return {};
  };

  
const getAllNotificationsById =async (id) => {
    const requestOptions = {
        method: "GET",
        headers: authHeader() 
      };

    try {
        const res =await fetch(
        `http://localhost:4000/api/notifications/${id}`,
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

const readAllNewNotification= async(id)=> {
    const requestOptions = {
        method: "GET",
        headers: authHeader() 
      };

    try {
        const res =await fetch(
        `http://localhost:4000/api/notifications/read/${id}`,
        requestOptions
        )
        if(res.status != 200)
            throw {status:res.status}
        
        return {status:200, message:"Updated Successfully"}
    }catch(err){
        return err
    }
}

export const NotificationService = {
    getAllNotificationsById,
    readAllNewNotification
};