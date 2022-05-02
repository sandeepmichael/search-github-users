import React, {useState} from 'react'
import SyncLoader from 'react-spinners/SyncLoader'

const Spinner = () => {
    let [loading,] = useState(true);
    return (
        <div style={{marginTop:'150px'}}>
              <div className="sweet-loading text-center">
  
              <SyncLoader color='#000' loading={loading} size={30} />
              </div>
        </div>
    )
}

export default Spinner