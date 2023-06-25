import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center my-16'>
            <h3 className='text-6xl font-bold'>404 Not Found</h3>
            <Link to="/">
            <button className='btn btn-outline mt-10'>Go to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;