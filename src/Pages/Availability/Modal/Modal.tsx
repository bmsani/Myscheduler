import React from 'react';

const Modal = () => {
    return (
      <div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">
              Add new working schedule
            </h3>
            <input
              type="text"
              name="scheduling"
              className="border-b-2 text-center border-primary rounded-full shadow px-2 w-full my-2 p-1"
              placeholder="Schedule name"
            />
            <div className="modal-action justify-center">
              <label htmlFor="my-modal" className="btn w-full">
                Create now
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Modal;