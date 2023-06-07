import { useEffect, useState } from "react"

const useSports = () => {

    const [sport, setSport] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (
        fetch('sports.json')
            .then(res => res.json())
            .then(data => {
                
                setSport(data)
                setLoading(false)
            }),
        [])

        return [sport, loading]

} 

export default useSports;