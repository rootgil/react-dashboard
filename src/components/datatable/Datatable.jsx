import './Datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatableSource';
import {Link} from 'react-router-dom'


const Datatable = () => {

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 270,
            renderCell: () => {
                return(
                    <div className='cellAction'>
                      <Link to='/users/test' style={{textDecoration:"none"}}>
                        <div className='viewButton'>View</div>
                      </Link>
                      <div className='deleteButton'>Delete</div>
                    </div>
                )
            }
        }
    ]

  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        Add New Users
        <Link to='/users/new' className='link'>
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={11}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable