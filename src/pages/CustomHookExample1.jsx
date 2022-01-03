import React from 'react'
import useFetch from '../hooks/useFetch'

const CustomHookExample1 = () => {

    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts', {})

    if (loading) {
        return <h3>Loading...</h3>
    }

    return (
        <>
            <h4>Posts</h4>
            <ul className='list-group'>
                {data.map(post => (
                    <li className='list-group-item' key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    )
}

export default CustomHookExample1
