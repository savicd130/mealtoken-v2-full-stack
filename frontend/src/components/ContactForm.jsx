import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-item">
        <input
          autoComplete="off"
          placeholder="Your Name"
          {...register('firstName', { required: true, maxLength: 20 })}
        />
      </div>
      <div className="form-item">
        <input
          autoComplete="off"
          placeholder="Your email"
          type="email"
          {...register('email', { required: true })}
        />
      </div>
      <div className="form-item">
        <textarea
          spellCheck="false"
          autoComplete="off"
          placeholder="Your Message"
          rows="5"
          type="number"
          {...register('message', { required: true })}
        />
      </div>
      <div className="form-item">
        <button type="submit">Send message</button>
      </div>
    </form>
  );
}
