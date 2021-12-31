import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {

    const [storeValue, setStoreValue] = useState(() => getLocalStorageItem(key, initialValue))

    const setStoreValueWrapper = (value) => {
        const valueStorage = value instanceof Function ? value(storeValue) : value
        setStoreValue(valueStorage)
        setLocalStorageItem(key, value)
    }

    return [storeValue, setStoreValueWrapper]
}

const getLocalStorageItem = (key, initialValue) => {
    try {
        const storeItem = localStorage.getItem(key)
        return storeItem ? JSON.parse(storeItem) : initialValue
    } catch {
        return null
    }
}
const setLocalStorageItem = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch {
        throw Error('Invalid data')
    }
}

export default useLocalStorage