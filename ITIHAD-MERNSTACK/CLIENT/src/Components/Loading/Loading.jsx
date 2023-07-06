import React from 'react'

function Loading() {

    return (
        <div className='text-center text-primary'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading