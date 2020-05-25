import React,{Component} from 'react';
import {Container,PageName,Name,WorldNumber,WorldInfoContainer,WorldContainter,WorldTitle,ListInfoContainer,ListInfo,LabelList,LabelListContainer,StateContainer} from './styles';
import{CoronaMonitor as Api} from '../../services/api.js';
import Pagination from'../../components/Pagination/index.js';
import BrazilData from '../../components/BrazilData';
import ContriesData from '../../components/CountriesData';

export default class Data extends Component {

  state = {
    worldData: [],
    listData: [],
    countriesData:[],
    loading:[],
    currentPage:1,
    countriesDataPerPage:5,
    numberChangedPage:6,
    BrazilData:[]
  };

  componentDidMount() {
    this.handleCountries();
    this.handleWorld();
  }

  componentDidUpdate(_, prevState) {
     const { currentPage } = this.state;

     if(prevState.currentPage===currentPage){
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
  this.setState({BrazilData:data[8]})
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



   //change page
   paginate =async (pageNumber)=>{
    await this.setState({currentPage:pageNumber})

     if(pageNumber>=6){
        this.setState({numberChangedPage:pageNumber})
     }
     else{
      this.setState({numberChangedPage:6})
     }
    this.handleCurrentPage();
   }

  render() {

    const {worldData,listData,numberChangedPage,currentPage}=this.state;

    return (
      <>
      <Container>
        <PageName>
          <Name>Covid-19</Name>
          <Name><span>CoronaVírus</span></Name>
        </PageName>
        <WorldInfoContainer>
          <WorldContainter>
            <WorldTitle>Confirmados</WorldTitle>
            <WorldNumber>{worldData.cases}</WorldNumber>
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
                    <ContriesData country_name={item.country_name} cases={item.cases} total_recovered={item.total_recovered} serious_critical={item.serious_critical} deaths={item.deaths} />
                  )
                })
            }

             <Pagination numberChangedPage={numberChangedPage} currentPage={currentPage} paginate={this.paginate}/>
          </ListInfo>
          <StateContainer>
            <BrazilData country_name={this.state.BrazilData.country_name} cases={this.state.BrazilData.cases} total_recovered={this.state.BrazilData.total_recovered} serious_critical={this.state.BrazilData.serious_critical} deaths={this.state.BrazilData.deaths} />
            </StateContainer>
        </ListInfoContainer>
      </Container>
    </>
   )
  }
}
