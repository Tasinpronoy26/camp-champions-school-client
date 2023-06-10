import { useEffect, useState } from "react";

const useSports = () => {

    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch('http://localhost:5000/sports')
            .then(res => res.json())
            .then(data => {

                setClasses(data);
                setLoading(false)
            })
    }, [loading])
    return [classes, loading, setClasses]
}

export default useSports;