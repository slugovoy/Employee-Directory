import React, { Component } from 'react'
import DataTable from './DataTable'
import Search from './Search'


class DataMain extends Component {

    state = {
        employees: [],
    }


render() {

    return (
        <>
          <Search />  
          <DataTable />
        </>
    )
}
}

export default DataMain;
