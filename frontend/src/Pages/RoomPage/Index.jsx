import { useState } from "react";
import Whiteboard from "../../Components/Whiteboard/Index";
import "./Index.css";

const RoomPage = () => {

    const [tool,setTool] = useState("pencil");
    const [color,setColor] = useState("black");

  return (
    <div className="row">
        <h1 className="text-center mb-4 text-primary">CollabDraw </h1>
        <h6 className="d-flex text-primary justify-content-center align-items-center">[Users online : 0]</h6>
            <div className="col-md-9 gap-3  mb-0 px-5 d-flex align-items-center justify-content-around toolbar">
                <div className="d-flex col-md-3 justify-content-between gap-1">
                   
                   <div className="d-flex gap-1">
                        <label htmlfor="pencil">Pencil</label>
                         <input type="radio" 
                        name="tool" 
                        value="pencil" 
                        checked = {tool === "pencil"}
                        id="pencil"
                        onChange={(e) => setTool(e.target.value)} 
                        />
                         
                   </div>
                   
                   <div className="d-flex gap-1 align-items-center">
                   <label htmlfor="pencil">Line</label>
                        <input type="radio" 
                        name="tool" 
                        value="line" 
                        checked = {tool === "line"}
                        id="line"
                        onChange={(e) => setTool(e.target.value)} 
                        />
                    </div>
                    
                    <div className="d-flex gap-1 align-items-center">
                        <label htmlfor="rect">Rectangle</label>
                        <input type="radio" 
                        name="tool" 
                        value="rect" 
                        checked = {tool === "rect"}
                        id="rect"
                        onChange={(e) => setTool(e.target.value)} 
                        />
                    </div>
                </div>
                    <div className="col-md-6">
                        <div className="d-flex align-items-center">
                            <label htmlFor="color">Select Color :</label>
                            <input type="color"
                            id="color"
                            className="mt-1 ms-2"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            />
                        </div>

                    </div>

                    <div className="col-md-2 d-flex">
                        <button className="btn btn-primary mt-1">Undo</button>
                        <button className="btn btn-outline-primary mt-1 ms-1">Redo</button>
                    </div>

                    <div className="col-md-2">
                        <button className="btn btn-danger">Clear Board</button>
                    </div>
            </div>

        <div className="col-md-10 mx-auto mt-4 canvas-box ">
            <Whiteboard/>
        </div>    
    </div>  
    
  )
}

export default RoomPage
