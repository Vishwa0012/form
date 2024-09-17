import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";

const AddUser = ({ user, setUser }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    navigate("/home");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!firstname) newErrors.firstname = "First Name is required";
    if (!lastname) newErrors.lastname = "Last Name is required";
    if (!number) newErrors.number = "Mobile number is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!dropdown) newErrors.dropdown = "Status is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setUser([...user, { firstname, lastname, email, number, dropdown }]);
      setFirstname("");
      setLastname("");
      setNumber("");
      setEmail("");
      setDropdown("");
      setErrors({});
      setIsSubmitted(true);
      showModal();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500">
      <div className="w-[600px] p-6 shadow-lg bg-white rounded-md">
        <form onSubmit={handleSubmit}>
          <h1 className="font-bold text-2xl">Add User</h1>
          <hr className="mt-4" />
          <div className="mt-3">
            <label
              htmlFor="firstname"
              className="block text-xl mb-2 font-semibold"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Enter Your Firstname"
              className="border w-full text-base px-2 py-1"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm">{errors.firstname}</p>
            )}
          </div>

          <div className="mt-3">
            <label
              htmlFor="lastname"
              className="block text-xl mb-2 font-semibold"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Enter Your Lastname"
              className="border w-full text-base px-2 py-1"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm">{errors.lastname}</p>
            )}
          </div>

          <div className="mt-3">
            <label
              htmlFor="number"
              className="block text-xl mb-2 font-semibold"
            >
              Mobile Number
            </label>
            <input
              type="text"
              id="number"
              placeholder="Enter your phone number"
              className="border w-full text-base px-2 py-1"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            {errors.number && (
              <p className="text-red-500 text-sm">{errors.number}</p>
            )}
          </div>

          <div className="mt-3">
            <label htmlFor="email" className="block text-xl mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              className="border w-full text-base px-2 py-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mt-3">
            <label className="block text-xl mb-2 font-semibold">Status</label>
            <select
              className="border w-full text-base px-2 py-1"
              value={dropdown}
              onChange={(e) => setDropdown(e.target.value)}
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            {errors.dropdown && (
              <p className="text-red-500 text-sm">{errors.dropdown}</p>
            )}
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Modal
        title="Congratulations"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h1 className="text-3xl font-semibold text-green-500">
          Successfully Submitted
        </h1>
      </Modal>
    </div>
  );
};

export default AddUser;
