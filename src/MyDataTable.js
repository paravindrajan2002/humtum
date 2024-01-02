import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const MyDataTable = () => {
   
    const data = [
        { id: 1, name: 'John Doe', age: 25, location: 'New York' },
        { id: 2, name: 'Jane Smith', age: 30, location: 'San Francisco' },
        // ... other data
      ];
      
    
      const columns = [
        { name: 'ID', selector: row => row.id, sortable: true },
        { name: 'Name', selector: row => row.name, sortable: true },
        { name: 'Age', selector: row => row.age, sortable: true },
        { name: 'Location', selector: row => row.location, sortable: true },
      ];

       const [records, setRecords] = useState(data);

        function handleFilter(event)
        {
            const newDate = records.filter(row => {
                return row.name.toLowerCase().includes(event.target.value.toLowerCase())
            })
            setRecords(newDate)
        }
     

      
  return (
    <div>
    <input type="text" className="my-search" onChange={handleFilter} />
    <DataTable  columns={columns} data={records}  fixedHeader selecableRows pagination />
    </div>
    
  );
}

export default MyDataTable