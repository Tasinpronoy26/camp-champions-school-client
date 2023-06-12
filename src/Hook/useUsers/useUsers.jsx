import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import { useEffect } from "react";

const useUsers = () => {


    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://camp-champions-school-server-tasinpronoy56-gmailcom.vercel.app/users')
        return res.json()
    })

    return [users, refetch]




}

export default useUsers;