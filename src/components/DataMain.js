import React, { Component } from "react";
import DataTable from "./DataTable";
import Search from "./Search";
import _ from "lodash"

const url = "https://randomuser.me/api/?results=10&nat=us";

class DataMain extends Component {
  state = {
    employees: [],
    searchedEmployees: [],
    order: "",
    search: "",
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
      order: "ascend",
    });
  }

  handleSearch = (event) => {
    event.preventDefault();

    const employees = this.state.employees;

    let charsForFilter = event.target.value.toLowerCase().trim();

    this.setState({
      search: charsForFilter,
    });

    let newEmpArray = employees.filter((employee) => employee.name.first.toLowerCase().includes(charsForFilter) || employee.name.last.toLowerCase().includes(charsForFilter) || employee.dob.date.includes(charsForFilter) || employee.email.toLowerCase().includes(charsForFilter)
      );

    // Updating the input's state
    this.setState({
      searchedEmployees: newEmpArray,
    });
  };

  // sortByName = () => {
  //   if (this.state.order === "ascend") {
  //     const sorted = [...this.state.employees].sort((obj1, obj2) => {
  //       return obj2.name.last.localeCompare(obj1.name.last);
  //     });
  //     this.setState({
  //       employees: sorted,
  //       searchedEmployees: sorted,
  //       order: "descend",
  //     });
  //   } else {
  //     const sorted = [...this.state.employees].sort((obj1, obj2) => {
  //       return obj1.name.last.localeCompare(obj2.name.last);
  //     });
  //     this.setState({
  //       employees: sorted,
  //       searchedEmployees: sorted,
  //       order: "ascend",
  //     });
  //   }
  // };


  sortByColumnName = (e) => {
    e.preventDefault();
      const sortName = e.target.className
      
    if (this.state.order === "ascend") {
      const sorted = [...this.state.employees].sort((obj1, obj2) => {
        
        let thingToCompare1 = _.get(obj1, sortName)
        let thingToCompare2 = _.get(obj2, sortName)
        return thingToCompare2.localeCompare(thingToCompare1);
      });
      this.setState({
        employees: sorted,
        searchedEmployees: sorted,
        order: "descend",
      });
    } else {
      const sorted = [...this.state.employees].sort((obj1, obj2) => {
        let thingToCompare1 = _.get(obj1, sortName)
        let thingToCompare2 = _.get(obj2, sortName)
        return thingToCompare1.localeCompare(thingToCompare2);
      });
      this.setState({
        employees: sorted,
        searchedEmployees: sorted,
        order: "ascend",
      });
    }
  };

  render() {
    return (
      <>
        <Search search={this.handleSearch} />
        <DataTable
          employees={this.state.searchedEmployees}
          onClick={this.sortByColumnName}
        />
      </>
    );
  }
}

export default DataMain;
