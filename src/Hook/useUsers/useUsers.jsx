import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import { useEffect } from "react";

const useUsers = () => {


    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    return [users, refetch]




}

export default useUsers;