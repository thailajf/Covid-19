  import React,{Component,useEffect,useState,useCallback} from 'react';

import {Container,PageName,Name,WorldNumber,WorldInfoContainer,WorldContainter,WorldTitle,ListContainer,ListInfoContainer,ListInfo,LabelList,Info,LabelListContainer,StateContainer} from './styles';
import Api from '../../services/api.js';


export default  class Dados extends Component {
  const [dataWorld,setDataWorld]=useState();
  const [dataList,setDataList]=useState();
  const [change,setChange]=useState();
   

  useEffect (  ()=>{
     handleCountries();


    if(dataList){
      
      handleWorld()
    }
    // else{
    //   setChange(true)
    //   console.log(dataList.data)
    //   if(change===true){
    //     setDataList(dataList.data)
    //   }
    // }
// if(dataWorld===''){
//   handleWorld();
// }
  
  
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dataList])  // eslint-disable-next-line react-hooks/exhaustive-deps

  

    
  const handleCountries=useCallback(async ()=>{
    const response=await Api.get(`/coronavirus/cases_by_country.php`,
    {headers:{
      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
      "x-rapidapi-key": "b314a90e18msh81f1dbef60dd2c6p103f67jsnfffa49edd539"
      }
      
  })

  const data=response.data.countries_stat;
  setDataList(...dataList,data)



  },[dataList])  
  


// async function handleCountries(){

//    const response=await Api.get(`/coronavirus/cases_by_country.php`,
//   {headers:{
//     "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
//     "x-rapidapi-key": "b314a90e18msh81f1dbef60dd2c6p103f67jsnfffa49edd539"
//     }
    
// })


// //  const data=([response.data.countries_stat[1],response.data.countries_stat[2],
// //   response.data.countries_stat[3],response.data.countries_stat[4],response.data.countries_stat[5]]);
// // console.log(data);
// try {

//     //  Promise.all(response.data.countries_stat).then((data)=>{
//     const data=response.data.countries_stat;
//       setDataList({data})

//     //  });
    
//       // setTimeout(()=>{
//       //  console.log("ola");
//       //  return "ola";
//       // },[90000])
    
   
   
     
   
  
  
// } catch (error) {
//   console.log(error)
// }

// console.log(dataList);
     
// // return data;

  
 

// }

async function handleWorld(){

  const response=await Api.get(`/coronavirus/worldstat.php`,
 {headers:{
   "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
   "x-rapidapi-key": "b314a90e18msh81f1dbef60dd2c6p103f67jsnfffa49edd539"
   }
   
})
 const data= await response.data;
 setDataWorld(data);


 
}
     return(
      <>
      <Container>
        <PageName>
          <Name>Covid-19</Name>
          <Name><span>CoronaVirus</span></Name>

        </PageName>
        <WorldInfoContainer>
          <WorldContainter>
            <WorldTitle>Confirmados</WorldTitle>
            <WorldNumber>{dataWorld.total_recovered}</WorldNumber>

           </WorldContainter>
          <WorldContainter>
            <WorldTitle>Recuperados</WorldTitle>
            <WorldNumber>{dataWorld.total_recovered}</WorldNumber>
          </WorldContainter>
          <WorldContainter>
            <WorldTitle>Críticos</WorldTitle>
            <WorldNumber>{dataWorld.serious_critical}</WorldNumber>
          </WorldContainter>
          <WorldContainter>
            <WorldTitle>Mortes</WorldTitle>
            <WorldNumber>{dataWorld.total_deaths}</WorldNumber>
          </WorldContainter>
        </WorldInfoContainer>
        
        <ListInfoContainer>
          <ListInfo>
            <LabelListContainer>
              
              <LabelList>Local</LabelList>
            <LabelList>Confirmados</LabelList>
            <LabelList>Recuperados</LabelList>
            <LabelList>Críticos</LabelList>
            <LabelList>Mortes</LabelList>

            </LabelListContainer>
            <ListContainer>
              <Info>Mundo</Info>
              <Info>21020</Info>
              <Info>12000</Info>
              <Info>1254</Info>
              <Info>8987</Info>


            </ListContainer>
          </ListInfo>
          <StateContainer>
            </StateContainer>
        </ListInfoContainer>
      </Container>
      </>
    )
 }