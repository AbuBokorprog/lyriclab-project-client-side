import React, { useState } from "react";
import Swal from "sweetalert2";

const ManageClassCard = ({ classes, index }) => {
  const [isAcceptClicked, setIsAcceptClicked] = useState(false);
  const [isDeniedClicked, setIsDeniedClicked] = useState(false);
  const {
    Class_Name,
    Instructor_Email,
    Instructor_Name,
    available_seats,
    price,
    Class_Image,
    status,
  } = classes;

  const acceptHandler = (classes) => {
    const { email, displayName, _id } = classes;
    fetch(`http://localhost:5000/classes/accepted/${_id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.matchedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `ACCEPTED`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const deniedtHandler = (classes) => {
    const { email, displayName, _id } = classes;
    fetch(`http://localhost:5000/classes/denied/${_id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.matchedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `DENIED`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <tr>
      <th>{index}</th>
      <td>
        <img src={Class_Image} alt="" />
      </td>
      <td>{Class_Name}</td>
      <td>{Instructor_Name}</td>
      <td>{Instructor_Email}</td>
      <td>{available_seats}</td>
      <td>{price}</td>
      {status === "Accepted" ? (
        <td>Accepted</td>
      ) : status === "Denied" ? (
        <td>Declined</td>
      ) : (
        <td>Pending</td>
      )}
      <td>
        <button
          onClick={() => acceptHandler(classes)}
          className="btn btn-primary"
          disabled={isDeniedClicked}
        >
          Accept
        </button>
      </td>
      <td>
        <button
          onClick={() => deniedtHandler(classes)}
          disabled={isAcceptClicked}
          className="btn"
        >
          Deny
        </button>
      </td>
      <td>
        <button className="btn" data-toggle="modal" data-target="#my_modal_3">
          open modal
        </button>
        <div
          className="modal"
          id="my_modal_3"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="modal_title"
          aria-hidden="true"
        >
          <div className="modal-box py-32">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              data-dismiss="modal"
              aria-label="Close"
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Reason!</h3>
            <textarea
              className="textarea my-5 textarea-primary w-full"
              placeholder="Describe"
            ></textarea>
            <input
              className="btn mx-auto text-center"
              type="submit"
              value="Feedback"
            />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ManageClassCard;
