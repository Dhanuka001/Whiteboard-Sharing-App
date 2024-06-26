import CreateRoomForm from "./CreateRoomForm/Index";
import "./Index.css";
import JoinRoomForm from "./JoinRoomForm/Index";

const Forms = ()=> {
    return (
        <div className="row h-100 pt-5">
            <div className="col-md-4 mt-5 py-3 p-4 form-box border border-2 border-primary rounded-3 mx-auto d-flex flex-column align-items-center ">
                <h1 className="text-primary fw-bold">Create Room</h1> 
                <CreateRoomForm/>
            </div>
            <div className="col-md-4 mt-5 py-3 p-4 form-box border border-2 border-primary rounded-3 mx-auto d-flex flex-column align-items-center">
                <h1 className="text-primary fw-bold">Join Room</h1>
                <JoinRoomForm/>
            </div>

        </div>
    )
}

export default Forms;