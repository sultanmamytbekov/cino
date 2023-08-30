import React from "react";
import { NavLink } from "react-router-dom";

const ActorsDetail = ({ hello }) => {
  return (
    <div id="actors">
      <div className="container">
        <div className="actors">
          <NavLink to={`/person/person-info/${hello.id}`}>
            <div>
              <div>
                {hello.profile_path ? (
                  <img
                    src={`https://www.themoviedb.org/t/p/w138_and_h175_face${hello.profile_path}`}
                    alt=""
                  />
                ) : (
                  <img
                    width={150}
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    alt=""
                  />
                )}

                <h5>{hello.name}</h5>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ActorsDetail;
