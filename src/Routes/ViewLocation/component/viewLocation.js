import React, { useEffect } from "react";
import "./style.css";
import MaterialTable from 'material-table';
import NoLocation from "../../../noLocation.png"

export default function ViewLocation(props) {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Location Name', field: 'locationName' },
            { title: 'Address', field: 'address1' },
            { title: 'Phone No', field: 'phoneNumber' },
        ],
        data: []
    });

    useEffect(() => {
        getTableData();
    }, []);

    let getTableData = () => {
        let data = props.idb.getData().then(result => {
            setState({ ...state, data: result });
        });
    }

    let updateTableData = (data) => {
        let updateStatus = props.idb.updateData(data);
    }
    let delteTableData = (index) => {
        let updateStatus = props.idb.deleteData(state.data[index]);
    }

    return (
        <div className="col-md-12">
            {!state.data.length && (<div className="noLocation">
                <img src={NoLocation} className="noLocation-img"></img>
            </div>)}
            {state.data.length > 0 && (<MaterialTable
                title="Location"
                options={{
                    search: false,
                    actionsColumnIndex: -1,
                    headerStyle: {
                        fontSize: '14px',
                        fontWeight: '700'
                    },
                    tbodyStyle: {
                        backgroundColor: 'black'
                    },
                    rowStyle: {
                        backgroundColor: '#EEE',
                    }
                }}
                columns={state.columns}
                data={state.data}
                editable={{

                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                const index = oldData.tableData.id;
                                resolve();
                                if (oldData) {
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                    });
                                    updateTableData(newData);
                                }
                            }, 600);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                const index = oldData.tableData.id;
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    return { ...prevState, data };
                                });
                                delteTableData(index);
                            }, 600);
                        }),
                }}
            />)}
        </div>
    );
}
