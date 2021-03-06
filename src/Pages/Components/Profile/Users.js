import React from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';

const Users = () => {

    const { data: users, isLoading,refetch } = useQuery('users', () => fetch('https://guarded-bayou-50166.herokuapp.com/users', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()));
    if (isLoading) {
        return <button className="btn btn-square loading"></button>

    }

    return (
        <div>
            <h2 className="text-2xl"> All users {users.length} </h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>


                            <th>Email</th>
                            <th> Action </th>
                            <th> Position </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;