import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

function Question_1() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState([]);
    
    
    const customStyles = {
        headCells: {
            style: {
                paddingLeft: '8px',
                paddingRight: '8px',
                backgroundColor: '#f1f1f1'
            },
        },
        cells: {
            style: {
                paddingLeft: '8px',
                paddingRight: '8px',
            },
        },
    };

    useEffect(() => {
        fetch("https://api.publicapis.org/categories")
            .then((res) => res.json())
            .then((result) => {
                setData(result.categories);
                setCount(result.count); 
                setLoading(false);
            })
            .catch((error) => {
                console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
                setLoading(false); 
            });
    }, []);

    useEffect(() => {
        const filtered = data.filter(item =>
            item.toLowerCase().includes(search.toLowerCase())
        );
        setFilter(filtered);
    }, [search, data]);
    

    const columns = [
        {
            name: 'Category',
            selector: (row) => row,
            sortable: true,
        },
    ];

    return (
        <section>
            <h1>Question 1</h1>
            <h5>count: {count}</h5>
            <input type='text' placeholder='Search...' className='searchInput' value={search}
            onChange={e => setSearch(e.target.value)} />
            <div className='tableData'>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <DataTable
                        customStyles={customStyles}
                        columns={columns}
                        data={filter}
                        pagination
                    />
                )}
            </div>
        </section>
    )

}

export default Question_1;

