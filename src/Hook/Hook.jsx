import { useEffect, useState } from "react";

const useSports = () => {

    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch('https://camp-champions-school-server-tasinpronoy56-gmailcom.vercel.app/sports')
            .then(res => res.json())
            .then(data => {

                setClasses(data);
                setLoading(false)
            })
    }, [loading])
    return [classes, loading]
}

export default useSports;