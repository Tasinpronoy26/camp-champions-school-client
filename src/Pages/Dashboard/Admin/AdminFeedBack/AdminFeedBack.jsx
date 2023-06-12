import { useContext, useState } from 'react';
import '../../Instructor/AddClass/AddClass';
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider';

const AdminFeedBack = () => {

    // console.log(item);
    const { user } = useContext(AuthContext);
    const [feedback, setFeedback] = useState('');

    const handleAdminFeedBack = (event) => {
        event.preventDefault();

        fetch(`https://camp-champions-school-server-tasinpronoy56-gmailcom.vercel.app/classes/${item._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                feedback: feedback
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
    }

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    }

    return (
        <>
            <form onSubmit={handleAdminFeedBack} className="half right cf">
                <textarea
                    name="feedback"
                    type="text"
                    id="input-message"
                    placeholder="FEEDBACK"
                    value={feedback}
                    onChange={handleFeedbackChange}
                    required
                />
                <input type="submit" value="FEEDBACK" id="input-submit" />
            </form>
        </>
    );
};

export default AdminFeedBack;
