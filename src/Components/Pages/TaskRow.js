import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useHook from './Hooks';

const TaskRow = ({ item, index}) => {
    
   const [tasks, setTask] = useHook();

    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to delete');
        if (proceed) {
            const url = `http://localhost:5000/task/${id}`;

            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged === true) {
                        toast.success('Deleted Successfully')
                        const remaining = tasks?.filter(pb => pb._id !== id);
                        setTask(remaining);
                    }

                });
        }
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{item.task}</td>
            <td>{item.description}</td>
            <td><Button>complete</Button></td>
            <td><Button  onClick={()=>handleDelete(item._id)} className="btn btn-danger">Delete</Button></td>
        </tr>
    );
};

export default TaskRow;