import { useContext } from 'react';
import '../../Instructor/AddClass/AddClass';
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider';




const AdminFeedBack = () => {

    const {user} = useContext(AuthContext)
    const handleAdminFeedBack = (event,id) => {

        event.preventDefault();

        const form = event.target;
        const feedback = form.feedback.value;
 

        fetch(`http://localhost:5000/feedback/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                feedback : feedback
            })
        })
            .then(res => res.json())
            .then(data => {


                console.log(data);

            })
    }



    return (
        <div className='flex items-center justify-center mt-24'>

            <form onSubmit={() => handleAdminFeedBack(user._id)} className="half right cf">
                <textarea name="feedback" type="text" id="input-message" placeholder="FEEDBACK" required />
                <input type="submit" value="Add Class" id="input-submit" />
            </form>

        </div>
    );
};

export default AdminFeedBack;