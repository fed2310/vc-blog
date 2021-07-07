import {useEffect, useRef, useState} from 'react'

//hook to is an element is visible in the viewport
export function useElementOnScreen(options) {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const useCallbackFunction = (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(useCallbackFunction, options)
        if(containerRef.current) observer.observe(containerRef.current)

        return () => {
            if(containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [containerRef, options])

    return [containerRef, isVisible]
}

