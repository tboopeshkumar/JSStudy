import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import { connect } from "react-redux";
import * as BrowseActions from './../actions/browseactions';
import { bindActionCreators } from "redux";
 
import "./../../node_modules/ag-grid/dist/styles/ag-grid.css";
import "./../../node_modules/ag-grid/dist/styles/theme-dark.css";


export class BrowserView extends Component {

    constructor(props) {
        super(props);
        console.log(props);
       // this.props.dispatch({ type : 'LOAD'})
        
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridApi.domLayout = 'autoHeight';
        this.gridApi.sizeColumnsToFit();
    }

    getSymbolFilterText = function (e) {
       return this.refs.filterTextSymbol.value;
    }.bind(this);

    handleFilterClick = function () {
        console.log(this.getSymbolFilterText());
        this.props.filterBySymbol(this.getSymbolFilterText());
    }.bind(this);


    render() {
        let containerStyle = {
            height: '600px',
            width: '500px'
        };

        return (
            <div style={containerStyle} className="ag-dark">

                <h1> Browse View </h1>

                <div className="form-group">
                    <label htmlFor="filterTextSymbol">Symbol:</label>
                    <input name="filterTextSymbol" ref="filterTextSymbol" />
                    <input type="button" value="Filter" onClick={this.handleFilterClick} />
                </div>
                <AgGridReact className="ag-dark"
                    columnDefs={this.props.columns}
                    rowData={this.props.data}
                    onGridReady={this.onGridReady}>
                    ></AgGridReact>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        columns: state.columns,
        data: state.data
      }
    }
function mapDispatchToProps(dispatch){
    return bindActionCreators(BrowseActions, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(BrowserView);