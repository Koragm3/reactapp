import React, { useState } from 'react';

const MyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (name.trim() === '') {
      newErrors.name = 'Name is required';
    }
    if (email.trim() === '') {
      newErrors.email = 'Email is required';
    }
    if (message.trim() === '') {
      newErrors.message = 'Message is required';
    }

    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

   
    console.log('Form submitted:', { name, email, message });

    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} name="FirstName" placeholder="Name*"/><br/>

        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div>
        
        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} name="Email" placeholder="Email*"/><br/>

        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        
        <textarea  name="YourMessage" onChange={(e) => setMessage(e.target.value)} value={message}  placeholder="Your Message*"/> <br/>

        {errors.password && <p className="error">{errors.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
