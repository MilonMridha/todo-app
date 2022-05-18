import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import TaskRow from './TaskRow';
import useHook from './Hooks'

const AllTask = () => {
    
const [tasks, setTask] = useHook()
    return (
        <div className='mt-5'>
                <h4 className='text-dark mb-3'>Your task here</h4>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Task Name</th>
                            <th>Description</th>
                            <th>Complete</th>
                            <th>Delete</th>s
                        </tr>
                    </thead>
                    <tbody>
                       {
                           tasks.map((item, index) => <TaskRow
                           key={item._id}
                           index={index}
                           item={item}
                           ></TaskRow>)
                       }
                    
                    </tbody>
                </Table>
            </div>
    );
};

export default AllTask;