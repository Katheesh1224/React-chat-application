import "./addUser.css";

const AddUser = () => {
    return(
        <div className="addUser">
            <form>
                <div className="type">
                    <input type="text" placeholder="Username" />
                </div>
                <button>Search</button>
            </form>
            <div className="user">
                <img src="./avatar.jpg" alt="" />
                <h3>Vootukari</h3>
                <button>Add User</button>
            </div>
        </div>
    )
}

export default AddUser;