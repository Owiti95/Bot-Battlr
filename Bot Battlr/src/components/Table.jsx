import React from 'react';

const Table = ({ headers, rows }) => (

    <table className='table'>
        <thead>
            <tr>
                {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
            </tr>
        </thead>
        <tbody>
                {rows.length > 0 ? rows : <tr><td colSpan={headers.length}>No data</td></tr>}
        </tbody>
    </table>
);

export default Table;