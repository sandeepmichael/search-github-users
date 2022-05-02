import React, {useState, useContext} from 'react'
import GithubContext from '../context/GithubContext'
import Swal from 'sweetalert'

const UserSearch = () => {
    const [text, setText] = useState('')
    const {users, searchUsers, Clearresults} = useContext(GithubContext)

    const submitHandler = (e) => {
        e.preventDefault()

        if(text===''){
            Swal('please enter something...!')
        } else {
               searchUsers(text)
            setText('')
        }
    }

    const ClearHandler = () => {
      Clearresults()
    }
 

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={submitHandler}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search'
              
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
         {users.length > 0 && (  <div>
          <button
             onClick={ClearHandler}
            className='btn btn-ghost btn-lg'
          >
            Clear
          </button>
        </div>)}
      
      
    </div>
    )
}

export default UserSearch

