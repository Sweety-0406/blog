import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit logic here
    toast.success('Successfully submitted');
    // Clear form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='text-white mx-[5%] lg:mx-[10%]  mt-5'>
      <h1>Contact Us</h1>
      <p>You can reach us via the following methods:</p>
      <ul>
        <li>Email: example@example.com</li>
        <li>Phone: +1234567890</li>
      </ul>

      {/* Example contact form */}
      <div className='flex justify-between mt-4'>
        <form onSubmit={handleSubmit} className='border-2 w-full md:w-[60%] rounded-2xl p-4'>
          <div className='-mb-3'>
            <label className='text-blue-300'>
              Name:
              <input
                className='text-black border-[2px] w-full p-1 border-blue-300 rounded-lg'
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <br />

          <div className='-mb-3'>
            <label className='text-blue-300'>
              Email:
              <input
                className='text-black border-[2px] w-full p-1 border-blue-300 rounded-lg'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <br />

          <div className='-mb-3'>
            <label className='text-blue-300'>
              Message:
              <textarea
                className='text-black border-[2px] w-full p-1 border-blue-300 rounded-lg'
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>
          </div>
          <button className='border-[1px] p-1 px-2 rounded-full bg-blue-900 hover:bg-blue-500 mt-10' type="submit">Submit</button>
        </form>
        <div>
          <img src="/images/contact-image.png" alt="image" className='w-0 md:w-full' />
        </div>
      </div>
    </div>
  );
};

export default Contact;
