import { useEffect, useState } from 'react';

function StudentTable() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/v2/students')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setStudents(data);
            })
    }, [])

    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Loves Class</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => {
                    return (
                        <tr key={student.id}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.lovesClass ? 'Yes' : 'No'}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}


export default StudentTable;