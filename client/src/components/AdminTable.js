import React, { useState } from 'react';
import { TablePanel } from "./TablePanel";

// SpreadJS imports
import '@grapecity/spread-sheets-react';
import GC from '@grapecity/spread-sheets';
/* eslint-disable */
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css";
import Excel from "@grapecity/spread-excelio";
import { extractSheetData } from "../utils/util";
import { saveAs } from 'file-saver';
import { SpreadSheets, Worksheet, Column } from '@grapecity/spread-sheets-react';

export const AdminTable = ({ tableData, valueChangedCallback } ) => {

    console.log(tableData);

    const config = {
        sheetName: 'Nurse Data',
        hostClass: ' spreadsheet',
        autoGenerateColumns: true,
        width: 200,
        visible: true,
        resizable: true,
        chartKey: 1
    }

    const [_spread, setSpread] = useState({});

    function workbookInit(spread) {
        setSpread(spread)
    }

    function fileChange(e) {
        if (_spread) {
            const fileDom = e.target || e.srcElement;
            const excelIO = new Excel.IO();
            const spread = _spread;

            const deserializationOptions = {
                frozenRowsAsColumnHeaders: true
            };

            excelIO.open(fileDom.files[0], (data) => {
                const newSalesData = extractSheetData(data);
                fileImportedCallback(newSalesData);
            });
        }
    }


    function exportSheet() {
        const spread = _spread;
        const fileName = "NurseData.xlsx";

        const sheet = spread.getSheet(0);
        const excelIO = new Excel.IO();
        const json = JSON.stringify(spread.toJSON({ 
            includeBindingSource: true,
            columnHeadersAsFrozenRows: true,
        }))

        excelIO.save(json, (blob) => {
            saveAs(blob, fileName);
        }, function (e) {  
            alert(e);  
        });     
    }

    function handleValueChanged(e, obj) {
        valueChangedCallback(obj.sheet.getDataSource());
    }

    handleValueChanged.bind(this);

    return (
        <TablePanel key={config.chartKey} title="Nurse Data">
            <SpreadSheets hostClass={config.hostClass} workbookInitialized={workbookInit} valueChanged={handleValueChanged}>
                <Worksheet name={config.sheetName} dataSource={tableData} autoGenerateColumns={config.autoGenerateColumns}>
                    <Column width={50} dataField='day' headerText="User Created At"></Column>
                    <Column width={50} dataField='info' headerText="Info"></Column>
                    <Column width={50} dataField='_id' headerText="DB ID"></Column>
                    <Column width={200} dataField='firstname' headerText="FirstName"></Column>
                    <Column width={320} dataField='lastname' headerText="LastName"></Column>
                    <Column width={50} dataField='hospital' headerText="Hospital"></Column>
                    <Column width={50} dataField='employeeId' headerText="EmployeeID"></Column>
                    <Column width={50} dataField='unit' headerText="Unit"></Column>
                    <Column width={50} dataField='subId' headerText="Auth0 ID"></Column>
                    <Column width={50} dataField='email' headerText="Email"></Column>
                    <Column width={50} dataField='__v' headerText="__v"></Column>
                    <Column width={50} dataField='email' headerText="Email"></Column>
                    <Column width={100} dataField='assignedhours' headerText="AssignedHours" resizable="resizable"></Column>
                    <Column width={100} dataField='totalhours' headerText="TotalHours" resizable="resizable"></Column>
                    <Column width={100} dataField='totalburnhours' headerText="TotalBurnHours" resizable="resizable"></Column>   
                    <Column width={50} dataField='id' headerText="UID"></Column>               
                </Worksheet>
            </SpreadSheets>
            <div className="dashboardRow">
                <button className="btn btn-primary dashboardButton" onClick={exportSheet}>Export to Excel</button>
            </div>
        </TablePanel>
    );
}



/*

<Column width={100} dataField='itemCount' headerText="Quantity"></Column>
                    <Column width={100} dataField='soldBy' headerText="Sold By"></Column>
                    <Column width={100} dataField='country' headerText="Country"></Column> 


*/