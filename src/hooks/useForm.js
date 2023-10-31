import emailjs from '@emailjs/browser';
import { useState } from 'react';
import toast from 'react-hot-toast';

const useForm = ({ form }) => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    topic: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    topic: '',
    message: '',
  });

  // Regular expressions for validate inputs
  const regexName = /^([a-zA-ZùÙüÜäàáëèéïìíöòóüùúÄÀÁËÈÉÏÌÍÖÒÓÜÚñÑ]{2,}[\s]?){1,5}$/;
  const regexEmail = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$';
  const regexText = /^([a-zA-ZùÙüÜäàáëèéïìíöòóüùúÄÀÁËÈÉÏÌÍÖÒÓÜÚñÑ]{2,}[\s]?)+$/;

  const handleChangeInput = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // When the input has the focus
  const handleFocusInput = (e) => {
    setFormErrors({
      ...formErrors,
      [e.target.name]: '',
    });
  };

  // When the input loses the focus
  const handleBlurInput = (e) => {
    if (e.target.value === '') {
      setFormErrors({
        ...formErrors,
        [e.target.name]: 'Field cannot be empty',
      });
    } else if ((e.target.name === 'username') && (!e.target.value.match(regexName))) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: 'This is not a correct name',
      });
    } else if ((e.target.name === 'email') && (!e.target.value.match(regexEmail))) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: 'This is not a correct email',
      });
    } else if ((e.target.name === 'topic') && (!e.target.value.match(regexText))) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: 'This is not a correct topic',
      });
    } else if ((e.target.name === 'message') && (!e.target.value.match(regexText))) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: 'This is not a correct message',
      });
    } else {
      setFormErrors({
        ...formErrors,
        [e.target.name]: '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Checks if an input is empty when it has never had focus
    if (Object.values(formValues).includes('')) {
      let newObject = {};

      Object.entries(formValues).forEach((item) => {
        if (item[1] === '') {
          newObject = { ...newObject, [item[0]]: 'Field cannot be empty' };
        } else {
          newObject = { ...newObject, [item[0]]: formErrors[item[0]] };
        }
      });

      // Update the form errors state
      setFormErrors(newObject);

      return;
    }

    // If there are errors, the email is not sent
    if (Object.values(formErrors).some((item) => item !== '')) return;

    // Send the email
    const sendEmail = emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY,
    );

    // Execute the notification
    toast.promise(
      sendEmail,
      {
        loading: 'Sending email...',
        success: 'Email sent',
        error: 'The email couldn&apos;t be sent',
      },
    );
  };

  return {
    formValues,
    setFormValues,
    formErrors,
    setFormErrors,
    handleSubmit,
    handleBlurInput,
    handleChangeInput,
    handleFocusInput,
  };
};

export default useForm;
