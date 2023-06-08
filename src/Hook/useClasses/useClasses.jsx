import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';


const useClasses = () => {

    const {user} = useContext(AuthContext);

    const {  data: selectC=[], refetch } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {

            const res = await fetch('http://localhost:5000/classes')
            return res.json();
        }
      })

      return [selectC, refetch]


}

export default useClasses;