import React from 'react'

 const Pagination = ({countriesDataPerPage,totalCountries,paginate}) => {
  const pageNumbers=[];
 
  for(let i=1;i<=Math.ceil(totalCountries/countriesDataPerPage);i++){
    pageNumbers.push(i);
  }
  return (
    <>
      <ul>
        {pageNumbers.map(number=>(
          <li key={number}>
            <button href="!#" onClick={()=>{paginate(number)}}>{number}ola</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Pagination;