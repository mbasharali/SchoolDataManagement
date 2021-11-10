import {useState,useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";const EditUser = () => {
    let history= useHistory();
    const {id} = useParams();

    const [user,setUser] = useState({
        fname : "",
        lname:"",
        dob:"",
        course_name:"",
        hours:"",
        price:"",
    });
    const {fname,lname,dob,course_name,hours,price}=user;
    const onInputChange = e => {
        setUser({...user,[e.target.name]:e.target.value})
    };

    const onSubmit= async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:3005/users/${id}`, user);
        history.push("/");
    };
    const loadUser= async ()=>{
        const result=await axios.get(`http://localhost:3005/users/${id}`, user);
        setUser(result.data);

    };

    useEffect(()=>{
        loadUser();
    },[]);

    return(
        <div className="container-fluid">
            <div className="w-80 shadow p-5 mt-3 rounded-top">
                <h3 className="mt-3">Edit Student Details</h3>

                <form onSubmit={e=>onSubmit(e)}>
                    <div className="row">
                        <div className="col">
                            <label className="mb-1 mt-1 title">First Name</label>
                            <input type="text" className="form-control "  placeholder="First name"  name="fname" value={fname} onChange={e => onInputChange(e)}/>
                        </div>
                        <div className="col">
                            <label className="mb-1 mt-1 lbl">Last Name</label>
                            <input type="text" className="form-control " placeholder="Last name" name="lname" value={lname} onChange={e => onInputChange(e)} />
                        </div>
                        <div className="col">
                            <label className="mb-1 mt-1 lbl">Date of Birth</label>
                            <input type="date" className="form-control " placeholder="Date of Birth" name="dob" value={dob} onChange={e => onInputChange(e)}/>
                        </div>
                        <div className="col-md-4">
                            <label className="mb-1 mt-1 lbl">Course Name</label>
                            <input type="text" className="form-control " placeholder="Course Name" name="course_name" value={course_name} onChange={e => onInputChange(e)}/>
                        </div>
                        <div className="col">
                            <label className="mb-1 mt-1 lbl">Hours</label>
                            <input type="number" className="form-control " placeholder="Hours" name="hours" value={hours} onChange={e => onInputChange(e)}/>
                        </div>
                        <div className="col">
                            <label className="mb-1 mt-1 lbl">Price €</label>
                            <input type="number" className="form-control " placeholder="price"  name="price" value={price} onChange={e => onInputChange(e)}/>
                        </div>
                    </div>
                    <div className=" mt-5 p-2 boxy">
                        <button className="btn btn-cus  me-4" type="onSubmit">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
};
export default EditUser;
