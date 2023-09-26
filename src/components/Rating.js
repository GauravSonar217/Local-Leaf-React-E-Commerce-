import React from 'react'

function Rating(props) {

  const ratingStar = Array.from({ length: 5 }, (curEle, index) => {
    let number = index + 0.5;

    return <span key={index}>
      {
        props.stars >= index + 1 ? <i class="fa-solid fa-star"></i> : props.stars >= number ? <i class="fa-solid fa-star-half-stroke"></i> : <i class="fa-regular fa-star"></i>
      }
    </span>

  })
  return (
    <React.Fragment>
      <div className={props.class}>
        <h4>{ratingStar}</h4>
        <p>({props.reviews})</p>
      </div>
    </React.Fragment>
  )
}

export default Rating
