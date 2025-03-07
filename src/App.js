import React from "react";
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import {fetchData} from './api'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import coronaImage from './images/covid19_teaser2.webp';
import About from './components/About/About';



class App extends React.Component{

  state = {
    data:{},
    country: ' ',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();

    
    this.setState({data: fetchedData});
  }

  handleCountryChange = async(country) =>{
    
    const fetchedData = await fetchData(country);

    this.setState({data:fetchedData, country: country});
  }

  render(){

    const {data,country} = this.state;
    return(
      <>
      <div><Navbar /></div>

      <div className={styles.container}>
        <img className={styles.image} src = {coronaImage} alt="covidImg"/><h1>COVID-19</h1>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
        <About/>
      </div>
      </>
    )
  }
}

export default App;