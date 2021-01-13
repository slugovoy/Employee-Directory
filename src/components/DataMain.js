import React, { Component } from "react";
import DataTable from "./DataTable";
import Search from "./Search";

const url = "https://randomuser.me/api/?results=10&nat=us";

class DataMain extends Component {
  state = {
    employees: [],
    searchedEmployees: [],
    order: "descend"
  };

  async componentDidMount() {
    const data = await fetch(url);
    const { results: employees } = await data.json();
    this.setState({ employees: employees,
      searchedEmployees: employees
     });
    console.log(this.state.employees)
  }

  // handleSearch = event => {

  //   const { employees } = this.state.employees
    
  //   let charsFoFilter= event.target.value.trim();
  //   // let newEmpArray = employees.filter(employee => )

  //   // Updating the input's state
  //   this.setState({
  //     [searchedEmployees]: newEmpArray
  //   });
  // }

  // compareBy(key) {
  //   return function (a, b) {
  //     if (""+a[key]<(""+b[key])) return -1;
  //     if (""+a[key]>(""+b[key])) return 1;
  //     return 0;
  //   };}
    
  //   sortBy(key) {
  //   let arrayCopy = [...this.state.data];
  //   arrayCopy.sort(this.compareBy(key));
  //   //arrayCopy.reverse(); for descending
  //   this.setState({data: arrayCopy});
  //   } 
    
  //   //write this in th
  //   onClick={() => this.sortBy('column name')}

  render() {
    return (
      <>
        <Search search={this.handleSearch} />
        <DataTable employees={this.state.searchedEmployees} />
      </>
    );
  }
}

export default DataMain;
