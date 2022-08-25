import React from "react";

const UserDetailsModal = ({ email, setOpenModal, userInfo }: any) => {
  const firstLetter = userInfo?.name?.slice(0, 1);

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => setOpenModal("")}
          >
            ✕
          </label>
          <div className="w-3/5 mx-auto">
            <div className="">
              {userInfo?.imageURL ? (
                <img
                  className="w-[120px] h-[120px] object-cover rounded-full border border-primary"
                  src={userInfo?.imageURL as string}
                  alt=""
                />
              ) : (
                <p className="w-[120px] h-[120px] rounded-full border border-primary p-1 flex justify-center items-center bg-gray-200">
                  <span className="text-8xl font-semibold">{firstLetter}</span>
                </p>
              )}
            </div>
            <p className="font-bold mt-3">Name</p>
            <p className="">{userInfo?.name}</p>
            <p className="font-bold mt-3">Email</p>
            <p className="">{email}</p>
            {userInfo?.mobile && (
              <>
                <p className="font-bold mt-3">Phone Number</p>
                <p className="">{userInfo?.mobile}</p>
              </>
            )}
            <p className="font-bold mt-3">Member Status</p>
            {userInfo?.paymentStatus ? (
              <p>Premium Member</p>
            ) : (
              <p>Regular Member</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
