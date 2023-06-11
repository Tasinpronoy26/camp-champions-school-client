import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';


const useRole = () => {

    const {user} = useContext(AuthContext);

    const {  data: isAdmin=[], refetch  } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {

            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`)
            const u = await res.json(); 
            console.log(u);  
            return u    
        }
      })

      return [isAdmin, refetch]


}

export default useRole;