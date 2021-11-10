import axios from "axios";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import style from "./style.css"

const Home =() => {
  const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3005/users")
        setUser(result.data);
    };
    const deleteUser = async (id) =>{
        await axios.delete(`http://localhost:3005/users/${id}`);
        loadUsers();
    }


    return(
        <div className="container">
        <div className="py-4">
            <h1>Student database</h1>


            <Link className="btn btn-k" id="button" to="/add/user">Add Student</Link>
            <table className="table table-custom  mt-4">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">FIRST NAME</th>
                    <th scope="col">LAST NAME</th>
                    <th scope="col">DATE OF BIRTH</th>
                    <th scope="col">COURSE</th>
                    <th scope="col">Hours</th>
                    <th scope="col">Price(€)</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user,index)=>(
                        <tr>
                            <td scope="row">{index +1}</td>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.dob}</td>
                            <td>{user.course_name}</td>
                            <td>{user.hours}</td>
                            <td>{user.price}</td>

                            <td>
                                <Link class="btn btn-d me-2" to={`/user/edit/${user.id}`}>Edit</Link>
                                <Link class="btn btn-d" onClick={()=>deleteUser(user.id)}>Delete</Link>

                            </td>

                    </tr>

                    ))}
                </tbody>
            </table>


        </div>
        </div>
    )
}
export default Home;
