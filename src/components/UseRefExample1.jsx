import { useRef } from 'react'

const UseRefExample = () => {

    const inputRef = useRef()
    const paraRef = useRef()

    const handleOnSubmit = (e) => {
        e.preventDefault()

        paraRef.current.textContent = `Message: ${inputRef.current.value}`
    }

    return (
        <div>
            <form className='mb-3' onSubmit={handleOnSubmit}>
                <div className="mb-3">
                    <label htmlFor='name' className="form-label">Name</label>
                    <input ref={inputRef} type="text" className="form-control" id='name' />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
            <p ref={paraRef}></p>
        </div>
    )
}

export default UseRefExample
