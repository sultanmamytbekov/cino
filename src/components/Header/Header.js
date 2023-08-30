import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import img from '../../img/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
import Populardt from "../pages/Popular-dt";

function Header({ color, setColor }) {
  const [value, setValue] = useState("");
  const [input1, setInput1] = useState(false);
  // const input = document.querySelector(".input");
  const [h4, setH4] = useState(1);
  const nav = useNavigate();
  return (
    <div
      style={{
        background: color ? "black" : "",
        transition: "4s",
      }}
      id="Header"
    >
      <div className="container">
        <div className="Header">
          <div className="nav">
            <NavLink to='/'><img width={'150px'} src={img} alt="" /></NavLink>
            <NavLink to="/">
              <h4
                onClick={() => setH4(1)}
                style={{
                  transition: "0.5s",
                  color: h4 === 1 ? (color ? "red" : "black") : "",
                  fontSize: h4 === 1 ? "17" : "",
                }}
              >
                Home
              </h4>
            </NavLink>
            <NavLink to="/popular">
              <h4
                onClick={() => setH4(2)}
                style={{
                  transition: "0.5s",
                  color: h4 === 2 ? (color ? "red" : "black") : "",
                  fontSize: h4 === 1 ? "17" : "",
                }}
              >
                popular
              </h4>
            </NavLink>
            <NavLink to="/top_rated">
              <h4
                onClick={() => setH4(3)}
                style={{
                  transition: "0.5s",
                  color: h4 === 3 ? (color ? "red" : "black") : "",
                  fontSize: h4 === 2 ? "17" : "",
                }}
              >
                Top rated
              </h4>
            </NavLink>
            <NavLink to="/upcoming">
              <h4
                onClick={() => setH4(4)}
                style={{
                  transition: "0.5s",
                  color: h4 === 4 ? (color ? "red" : "black") : "",
                  fontSize: h4 === 3 ? "17" : "",
                }}
              >
                Upcoming
              </h4>
            </NavLink>
            <NavLink to="/now_playing">
              <h4
                onClick={() => setH4(5)}
                style={{
                  transition: "0.5s",
                  color: h4 === 5 ? (color ? "red" : "black") : "",
                  fontSize: h4 === 4 ? "17" : "",
                }}
              >
                Now Playing
              </h4>
            </NavLink>

            <div style={{ height: "20px" , display:'flex', alignItems:'center' }}> 
              <h2
                onClick={() => setInput1(!input1)}
                style={{ margin:' 0 -31px -11px 0' , zIndex:'100', cursor:'pointer' }}
              >
                <BsSearch width={"5px"} color={color ? 'red' : 'black'} />
              </h2>
              <input value={value}
                style={{
                  marginTop:'5px',
                  width: input1 ? "170px" : "",
                  padding: input1 ? "8px 38px" : "8px 0",
                  border: input1 ? "1px solid black" : "none",
                  transition : '2s'
                }}
                className="input"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    nav(`/movieName/movieName-info/${value}`);
                    setValue("")
                  }
                }}
                type="text"
                // placeholder="hello"  
                onChange={(e) => setValue(e.target.value)}
              />
             
            </div>
            <span
              style={{ display: color ? "none" : "block", transition: "1.5s" }}
              onClick={() => setColor(!color)}
            >
              <MdDarkMode
                style={{
                  width: "30px",
                  height: "30px",
                  transition: "1.5s",
                  cursor: "pointer",
                  color: "black",
                }}
              />
            </span>
            <span
              style={{ display: color ? "block" : "none", transition: "1.5s" }}
              onClick={() => setColor(!color)}
            >
              <BsFillSunFill
                style={{
                  width: "30px",
                  height: "30px",
                  transition: "1.5s",
                  cursor: "pointer",
                  color: "white",
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

// nav(`/movieName/movieName-info/${value}`)
