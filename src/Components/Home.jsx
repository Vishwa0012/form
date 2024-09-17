import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";

const Home = ({ user }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState(user); 
  const [selectedUserIndex, setSelectedUserIndex] = useState(null); 

  const showModal = (index) => {
    setSelectedUserIndex(index);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (selectedUserIndex !== null) {
      const newUsers = [...users];
      newUsers.splice(selectedUserIndex, 1);
      setUsers(newUsers);
      setSelectedUserIndex(null);
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setSelectedUserIndex(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between px-32">
        <div className="py-10 underline underline-offset-8 text-blue-500">
          <h1 className="text-4xl font-bold text-blue-600">LIST USER</h1>
        </div>
        <div className="bg-red-400 text-3xl text-black py-1 px-3 rounded-lg">
          <button onClick={handleClick}>ADD</button>
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-2xl">
              <th scope="col" className=" py-3 px-6">
                First Name
              </th>
              <th scope="col" className=" py-3 px-6">
                Last Name
              </th>
              <th scope="col" className=" py-3 px-6">
                E-mail
              </th>
              <th scope="col" className=" py-3 px-6">
                Phone
              </th>
              <th scope="col" className=" py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6 ">
                MODIFY
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((userData, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-2xl font-bold">
                  {userData.firstname}
                </td>
                <td className="px-6 py-4 text-2xl font-bold">
                  {userData.lastname}
                </td>
                <td className="px-6 py-4 text-2xl font-bold">
                  {userData.email}
                </td>
                <td className="px-6 py-4 text-2xl font-bold">
                  {userData.number}
                </td>
                <td className="px-6 py-4 text-2xl font-bold">
                  {userData.dropdown}
                </td>
                <td className="pl-8 ">
                  <button
                    onClick={handleClick}
                    className="text-2xl text-green-500 pr-7"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => showModal(index)}
                    className="text-2xl text-red-600"
                  >
                    <MdDelete />
                  </button>
                  <Modal
                    title="DELETE DATA"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <h1 className="text-red-600 font-semibold text-3xl">
                      Are you sure you want to delete
                    </h1>
                  </Modal>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
