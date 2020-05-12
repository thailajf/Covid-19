import React,{Component} from 'react';

import {Container,PageName,Name,WorldNumber,WorldInfoContainer,WorldContainter,WorldTitle,ListContainer,ListInfoContainer,ListInfo,LabelList,Info,LabelListContainer,StateContainer} from './styles';
import Api from '../../services/api.js';
import Pagination from'../../components/Pagination/index.js';


export default class Dados extends Component {

  state = {
    worldData: [],
    listData: [],
    countriesData:[],
    loading:[],
    currentPage:1,
    countriesDataPerPage:5
    
  };

  componentDidMount() {
    // const repositories = localStorage.getItem('repositories');

    // if (repositories) {
    //  }
    this.handleCountries();
    this.handleWorld();

  }
  componentDidUpdate(_, prevState) {
     const { currentPage } = this.state;

    // if (prevState.repositories !== repositories) {
    //   localStorage.setItem('repositories', JSON.stringify(repositories));
    // }
     if(prevState.currentPage===currentPage){
          //  this.handlecurrentPage();
          console.log(currentPage+' -- '+prevState.currentList)
          

     }

  }

  handleCountries =async e => {

    
   const response=await Api.get(`/coronavirus/cases_by_country.php`,
   {headers:{
     "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
     "x-rapidapi-key": "b314a90e18msh81f1dbef60dd2c6p103f67jsnfffa49edd539"
     }
     
 })
 
 const data= await response.data.countries_stat;
  this.setState({listData:data});
  console.log(this.state.listData)

  this.handleCurrentPage();


  };

  handleCurrentPage = ()=>{
      //current List
  const {countriesDataPerPage,currentPage,listData}=this.state;
  const indexOfLastCountryData=(currentPage*countriesDataPerPage);
 
  var indexOfFirstCountryData=(indexOfLastCountryData-countriesDataPerPage) ;
  if(currentPage===1){
    indexOfFirstCountryData=indexOfFirstCountryData+1;
  }
  const currentList = listData.slice(indexOfFirstCountryData,indexOfLastCountryData)
  this.setState({countriesData:currentList});


  }

  handleWorld =async e => {
    const response=await Api.get(`/coronavirus/worldstat.php`,
    {headers:{
      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
      "x-rapidapi-key": "b314a90e18msh81f1dbef60dd2c6p103f67jsnfffa49edd539"
      }
      
   })
    const data= await response.data;
    this.setState({worldData:data});

   
   
 
   };

   handleList =e=>{
    {this.state.countriesData.map((item,i)=>{
                 
      return (
        <>
      <Info>{item.country_name}</Info>
       <Info>{item.cases}</Info>
       <Info>{item.total_recovered}</Info>
       <Info>{item.serious_critical}</Info>
       <Info>{item.deaths}</Info>
       </>
       )


       })}
   }
   //change page
   paginate =async (pageNumber)=>{
    await this.setState({currentPage:pageNumber})
     console.log(this.state.currentPage)
     this.handleCurrentPage();

   }
 

  render() {
    const {worldData,listData,countriesDataPerPage}=this.state;
 
    return (
      <>
      <Container>
        <PageName>
          <Name>Covid-19</Name>
          <Name><span>CoronaVirus</span></Name>

        </PageName>
        <WorldInfoContainer>
          <WorldContainter>
            <WorldTitle>Confirmados</WorldTitle>
            <WorldNumber>{worldData.total_recovered}</WorldNumber>

           </WorldContainter>
          <WorldContainter>
            <WorldTitle>Recuperados</WorldTitle>
            <WorldNumber>{worldData.total_recovered}</WorldNumber>
          </WorldContainter>
          <WorldContainter>
            <WorldTitle>Críticos</WorldTitle>
            <WorldNumber>{worldData.serious_critical}</WorldNumber>
          </WorldContainter>
          <WorldContainter>
            <WorldTitle>Mortes</WorldTitle>
            <WorldNumber>{worldData.total_deaths}</WorldNumber>
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
            {this.state.countriesData.map((item,i)=>{
                 
                 return (
                  <ListContainer>
                  <Info>{item.country_name}</Info>
                  <Info>{item.cases}</Info>
                  <Info>{item.total_recovered}</Info>
                  <Info>{item.serious_critical}</Info>
                  <Info>{item.deaths}</Info>
                  </ListContainer>
                  )
           
           
                  })}

                  <Pagination countriesDataPerPage={countriesDataPerPage} totalCountries={listData.length}paginate={this.paginate}/>
          </ListInfo>
          <StateContainer>
            </StateContainer>
        </ListInfoContainer>
      </Container>
        </>
   )
  }
}