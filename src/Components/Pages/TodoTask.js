import { Button, Table } from 'react-bootstrap';
import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import TaskRow from './TaskRow';
const TodoTask = () => {
    const navigate = useNavigate();
    const taskRef = useRef('');
    const desRef = useRef('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const task = taskRef.current.value;
        const description = desRef.current.value;
        
        const newTask = {task, description};

        fetch('http://localhost:5000/task', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ newTask })
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged === true){
                    toast.success('your task added successfully')
                    event.target.reset();

                    
                }
            });


    }
    return (
        <div>
            <h2 className='text-dark mt-5'>Add Your Task</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={taskRef} className=' w-50 mx-auto shadow pb-2' type="text" placeholder="Task Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={desRef} className='w-50 mx-auto shadow pb-2' type="text" placeholder="Description" required />
                </Form.Group>




                <Button className='w-25 d-block rounded-pill mx-auto' variant="dark" type="submit">
                    Add
                </Button>
            </Form>

            <Link to='/alltask' className='mt-5 w-50 text-decoration-none btn btn-dark rounded-pill mb-5 '>See your task</Link>
        </div>
    );
};

export default TodoTask;