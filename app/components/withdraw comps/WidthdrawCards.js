import React from 'react'
function WidthdrawCards(data) {
  return (

   <div className="withdraw-cards">

    <div className="card-top">
      <p>{data.requisitions}</p>
      <div className="persontage">
        <img src={data.img} alt="" />
        <p>{data.persontage}</p>
      </div>
    </div>
    <p className="nums">{data.numbers}</p>
    <p>{data.month}</p>
  </div>
  )
}
export default WidthdrawCards
