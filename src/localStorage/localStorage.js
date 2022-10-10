export const loadState = ()=>{
    try{
        const data = localStorage.getItem("state")
        if(data === null){
            return undefined
        }
        return JSON.parse(data)
    } catch (error){
        return undefined
    }
}

export const saveData = (state)=>{
    try{
        const data = JSON.stringify(state)
        localStorage.setItem("state",data)
    } catch(error){
        console.log(error)
    }

}