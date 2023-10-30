import React from 'react'

const Walpaper = ({image}) => {
    return (
    <div className='background'>
        <img src={image?.hits[0].webformatURL} alt={image?.hits[0].tags} />
    </div>
    )
}

export default Walpaper