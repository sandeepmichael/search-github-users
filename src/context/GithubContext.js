import { createContext, useReducer } from "react";
import axios from "axios";
import githubReducer from "./reducers/GithubReducer";

const GithubContext = createContext();




const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
    baseURL:GITHUB_URL,
    headers:{
        Authorization : `token ${GITHUB_TOKEN}`
    }
})



export const GithubProvider = ({children}) => {
   const initialstate = {
       users:[],
       user:{},
       repos:[],
       loading :false
   }

  const [state, dispatch] = useReducer(githubReducer, initialstate)

    

   // search users
    const searchUsers = async (text) => {
        
            const params = new URLSearchParams({
                q: text,
            })
            const response = await github.get(`/search/users?${params}`)
            console.log(response.data.items)
        
            dispatch({
                type:'GET_USERS',
                payload:response.data.items
            })
        
     
    }

    // get single user
    const getUser = async (login) => {
        
        const response = await github.get(`/users/${login}`)
        //console.log(response.data.items)
    
        dispatch({
            type:'GET_USER',
            payload:response.data
        })
    }

    // getuser repos
    const getUserRepo = async (login) => {
        
        const response = await github.get(`/users/${login}/repos`)
        //console.log(response.data.items)
    
        dispatch({
            type:'GET_REPOS',
            payload:response.data
        })
    }




    //clear results
    const Clearresults = () => {
        dispatch({
            type:'CLEAR_USERS',
            payload:[]
        })
    }
      
    return <GithubContext.Provider value={{users:state.users, loading:state.loading,user:state.user,repos:state.repos, getUser, searchUsers, Clearresults,getUserRepo}}>{children}</GithubContext.Provider>

}

export default GithubContext