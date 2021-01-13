import React, { Component } from "react";
import DataTable from "./DataTable";
import Search from "./Search";

const url = "https://randomuser.me/api/?results=10&nat=us";

class DataMain extends Component {
  state = {
    employees: [],
    searchedEmployees: [],
    order: ""
  };

  async componentDidMount() {
    const data = await fetch(url);
    const { results: employees } = await data.json();
    let ascSort = employees.sort((a, b) => {
      return a.name.last.localeCompare(b.name.last);
    });

    this.setState({ 
      employees: ascSort,
      searchedEmployees: ascSort,
      order: "ascend"
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

  
    sortByName = () => {
      if(this.state.order === "ascend"){

        const sorted = [...this.state.employees]
        .sort((a, b) => {
          return b.name.last.localeCompare(a.name.last);
        });
        this.setState({employees: sorted,
          searchedEmployees: sorted,
          order: "descend"
        });
      } else {
        const sorted = [...this.state.employees]
        .sort((a, b) => {
          return a.name.last.localeCompare(b.name.last);
        });
        this.setState({employees: sorted,
          searchedEmployees: sorted,
          order: "ascend"
        });
      }
      
    };

  render() {
    return (
      <>
        <Search search={this.handleSearch} />
        <DataTable employees={this.state.searchedEmployees} onClick={this.sortByName}/>
      </>
    );
  }
}

export default DataMain;
