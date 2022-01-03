import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const getTitle = (pathname) => {
    switch (pathname) {
        case '/useref-1':
            return 'useRef Example 1'
        case '/useref-2':
            return 'useRef Example 2'
        case '/useref-3':
            return 'useRef Example 3'
        case '/usememo':
            return 'useMemo Example'
        case '/usecallback':
            return 'useCallback Example'
        case '/custom-hook-1':
            return 'Custom Hook Example 1'
        case '/custom-hook-2':
            return 'Custom Hook Example 2'
        default:
            return ''
    }
}

const PageTitle = () => {

    const location = useLocation()
    const [title, setTitle] = useState('')

    useEffect(() => setTitle(getTitle(location.pathname)), [location])

    return (
        !title ? '' :
            <div className='border-bottom pb-2 mb-4'>
                <h6 className='text-uppercase text-muted'>{title}</h6>
            </div>
    )
}

export default PageTitle
