import React, { useState } from 'react';
import { json } from 'react-router-dom';

const MyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (name.trim() === '') {
      newErrors.name = 'Name is required';
    }
    if (email.trim() === '') {
      newErrors.email = 'Email is required';

    }
    if (message.trim() === '') {
      newErrors.message = 'Message can not be empty';
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
    const user = {name, email, message}
    const json = JSON.stringify(user)

    const result = await fetch ("https://win23-assignment.azurewebsites.net/api/contactform", {
        method: 'post',
        headers:{ 'content-type': 'application/json'},
        body: json
    })

    switch (result.status){
        case 201:
            console.log('Message deliverd')
            setSuccess('data sent');
            break;
        case 400:
            console.log('Something went wrong.' + await result.text())
        
    }


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

        {errors.message && <p className="error">{errors.message}</p>}
         
        {success && <p className="error">{success}</p>}
      </div>
        <div></div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
