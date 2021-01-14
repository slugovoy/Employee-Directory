import React, { Component } from "react";
import DataTable from "./DataTable";
import Search from "./Search";
import _ from "lodash";
// Variable for url
const url = "https://randomuser.me/api/?results=10&nat=us";
// Main class component
class DataMain extends Component {
  // State that keeps the data
  state = {
    employees: [],
    searchedEmployees: [],
    order: "",
    search: "",
  };
  // Method that fires when page loads and puts data into state

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

  // Method that handles dynamic search using filter function and and string's includes method
  handleSearch = (event) => {
    event.preventDefault();

    const employees = this.state.employees;

    let charsForFilter = event.target.value.toLowerCase().trim();

    this.setState({
      search: charsForFilter,
    });

    let newEmpArray = employees.filter(
      (employee) =>
        employee.name.first.toLowerCase().includes(charsForFilter) ||
        employee.name.last.toLowerCase().includes(charsForFilter) ||
        employee.dob.date.includes(charsForFilter) ||
        employee.email.toLowerCase().includes(charsForFilter)
    );

    // Updating the input's state
    this.setState({
      searchedEmployees: newEmpArray,
    });
  };

  // Method that handles sort by ascending or descending order 
  sortByColumnName = (e) => {
    e.preventDefault();
    const sortName = e.target.className;

    if (this.state.order === "ascend") {
      const sorted = [...this.state.employees].sort((obj1, obj2) => {
        let thingToCompare1 = _.get(obj1, sortName);
        let thingToCompare2 = _.get(obj2, sortName);
        return thingToCompare2.localeCompare(thingToCompare1);
      });
      this.setState({
        employees: sorted,
        searchedEmployees: sorted,
        order: "descend",
      });
    } else {
      const sorted = [...this.state.employees].sort((obj1, obj2) => {
        let thingToCompare1 = _.get(obj1, sortName);
        let thingToCompare2 = _.get(obj2, sortName);
        return thingToCompare1.localeCompare(thingToCompare2);
      });
      this.setState({
        employees: sorted,
        searchedEmployees: sorted,
        order: "ascend",
      });
    }
  };
// Render on a page
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
