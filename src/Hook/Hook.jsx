import { useEffect, useState } from "react";

const useSports = () => {

    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch('sports.json')
            .then(res => res.json())
            .then(data => {

                setClasses(data);
                setLoading(false)
            })
    }, [])
    return [classes, loading]
}

export default useSports;