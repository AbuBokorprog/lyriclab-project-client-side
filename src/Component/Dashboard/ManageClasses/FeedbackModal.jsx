import React from "react";

const FeedbackModal = () => {
  return (
    <dialog id="my_modal_2" className="modal">
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">Reason:</h3>
        <form>
          <textarea
            className="textarea textarea-primary"
            placeholder="Reason"
          ></textarea>
          <div>
            <input type="submit" value="Feedback" />
          </div>
        </form>
        <div className="modal-action">
          <button className="btn">Close</button>
        </div>
      </form>
    </dialog>
  );
};

export default FeedbackModal;
