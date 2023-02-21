import { useEffect, useState } from "react"

const useUserRole = email => {
    const [userRole, setUserRole] = useState('');
    // console.log(email);

    useEffect(() => {

        if (email) {
            fetch(`https://resale-shop-server-delta.vercel.app/users/role/${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data.role);

                    setUserRole(data.role);
                })
        }

    }, [email]);

    return [userRole];
};

export default useUserRole;