import react from 'react';
import UserService from '../service/UserService';

class UserComponent extends react.Component{

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response)=>{
           this.setState({users: response.data})
        });
    }

    render(){
        return (
            <div>
               <h1 className="text-center">User Lists</h1>
               <table className="table table-striped">
                   <thead>
                       <tr>
                           <td>User Id</td>
                           <td>User Name</td>
                           <td>User Address</td>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.users.map(
                               user =>
                               <tr key={user.id}>
                                   <td>{user.id}</td>
                                   <td>{user.name}</td>
                                   <td>{user.address}</td>
                                </tr>
                           )
                       }
                   </tbody>
                   
                   
                   </table>

            </div>
        )
    }
}

export default UserComponent;