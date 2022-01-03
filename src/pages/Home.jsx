import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className='p-5 rounded bg-light mb-4'>
                <h1 className='display-4'>React Sandbox</h1>
                <p className='lead'>Understanding react hooks: useRef, useMemo, useCallback, custom hooks.</p>
            </div>

            <div className="row">
                <div className="col-sm-4">
                    <ListGroup>
                        <ListGroup.Item action onClick={() => navigate('/useref-1')}>useRef Example 1</ListGroup.Item>
                        <ListGroup.Item action onClick={() => navigate('/useref-2')}>useRef Example 2</ListGroup.Item>
                        <ListGroup.Item action onClick={() => navigate('/useref-3')}>useRef Example 3</ListGroup.Item>
                    </ListGroup>
                </div>
                <div className="col-sm-4">
                    <ListGroup>
                        <ListGroup.Item action onClick={() => navigate('/usememo')}>useMemo Example</ListGroup.Item>
                        <ListGroup.Item action onClick={() => navigate('/usecallback')}>useCallback Example</ListGroup.Item>
                    </ListGroup>
                </div>
                <div className="col-sm-4">
                    <ListGroup>
                        <ListGroup.Item action onClick={() => navigate('/custom-hook-1')}>Custom Hook Example 1</ListGroup.Item>
                        <ListGroup.Item action onClick={() => navigate('/custom-hook-2')}>Custom Hook Example 2</ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </>
    )
}

export default Home
