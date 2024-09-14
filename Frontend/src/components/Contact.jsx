import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset, // Import reset function to clear the form
    formState: { errors },
  } = useForm();

  const navigate = useNavigate(); // Initialize useNavigate

  const onSubmit = (data) => {
    console.log(data);
    alert('Message sent successfully!');
    reset(); // Reset the form after submission
    navigate('/'); // Redirect to the homepage after submission
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-400 to-blue-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl rounded-lg transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-700">Contact Us</h2>
        <p className="text-center text-gray-500">We'd love to hear from you!</p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">{errors.name.message}</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Enter a valid email address',
                },
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Message</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              {...register('message', { required: 'Message is required' })}
            ></textarea>
            {errors.message && (
              <span className="text-sm text-red-500">{errors.message.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:bg-gradient-to-l hover:from-purple-500 hover:to-blue-500 duration-300 shadow-md transform transition hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
