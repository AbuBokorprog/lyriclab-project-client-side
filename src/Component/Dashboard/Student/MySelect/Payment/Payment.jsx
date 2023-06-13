import React from "react";

const Payment = () => {
  return (
    <div>
      {/* You can open the modal using ID.showModal() method */}
      <button className="btn" onClick={() => window.my_modal_3.showModal()}>
        open modal
      </button>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box py-32">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
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
        </form>
      </dialog>
    </div>
  );
};

export default Payment;
