import React, { Component } from "react";
import DataTable from "./DataTable";
import Search from "./Search";

const url = "https://randomuser.me/api/?results=200&nat=us";

class DataMain extends Component {
  state = {
    employees: [],
  };

  async componentDidMount() {
    const data = await fetch(url);
    const { results: employees } = await data.json();
    this.setState({ employees });
    console.log(this.state.employees)
  }

  render() {
    return (
      <>
        <Search />
        <DataTable employees={this.state.employees} />
      </>
    );
  }
}

export default DataMain;
