import { useEffect, useState } from "react";
import './styles.css';

function StudentForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [lovesClass, setLovesClass] = useState(false);

    useEffect(() => {
        console.log(lovesClass)
    }, [lovesClass])


    function handleSubmit(e) {
        e.preventDefault()

        const data = {
            firstName,
            lastName,
            lovesClass,
        }

        fetch('http://localhost:8080/api/v2/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => console.log(response))
        // .then((data) => {
        //     console.log("Success:", data)
        // })
        // .catch((error) => {
        //     console.error("Error:", error)
        // })
    }


    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <label className="form-label">
                First Name:
                <input
                    className="form-input"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label className="form-label">
                Last Name:
                <input
                    className="form-input"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <label className="form-label">
                Loves Class:
                <input
                    className="form-checkbox"

                    type="checkbox"
                    value={lovesClass}
                    onChange={(e) => setLovesClass(e.target.checked)}
                />
            </label>
            <button className="form-submit-button" type="submit">Submit</button>
        </form>
    )
}


export default StudentForm;