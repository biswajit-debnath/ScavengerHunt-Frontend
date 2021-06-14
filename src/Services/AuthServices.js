
const login =async (data) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };

    try {
        const res =await fetch(
        `http://localhost:4000/api/login`,
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


export const AuthServices = {
    login
};