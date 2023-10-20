import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast from 'react-hot-toast';
import ItemContent from './ItemContent';
import useNearElement from '../hooks/useNearElement';

function SectionContact() {
  const form = useRef();
  const { visorRef, isVisible } = useNearElement();

  const handleSubmit = (e) => {
    e.preventDefault();

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
        success: <b>Email sent</b>,
        error: <b>The email couldn&apos;t be sent</b>,
      },
    );
  };

  return (
    <section
      id="Contact"
      className="container mx-auto px-4 md:px-0 mb-4"
    >
      <div className={`${isVisible ? 'bg-white/30 dark:bg-black/30 rounded-3xl border-white/30 dark:border-black/30 backdrop-blur-lg shadow-lg' : 'bg-transparent rounded-none border-transparent backdrop-blur-none shadow-none'} pt-8 pb-4 border-2 px-4 sm:grid sm:place-content-center transition-all duration-700 ease-in-out`}>
        <h2
          className="text-center uppercase font-bold text-black dark:text-white text-3xl lg:text-4xl mb-6 lg:mb-8"
        >
          Contact
        </h2>

        <form ref={form} className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2" htmlFor="email">
            <span className="text-black dark:text-white font-bold">Name:</span>

            <input
              type="text"
              name="username"
              id="username"
              className="rounded-md border-2 border-white dark:border-black bg-black dark:bg-white text-white dark:text-black p-1 px-2 placeholder:dark:text-black/70"
              placeholder="Your name"
            />
          </label>

          <label className="flex flex-col gap-2" htmlFor="topic">
            <span className="text-black dark:text-white font-bold">Topic:</span>

            <input
              type="text"
              name="topic"
              id="topic"
              className="rounded-md border-2 border-white dark:border-black bg-black dark:bg-white text-white dark:text-black p-1 px-2 placeholder:dark:text-black/70"
              placeholder="Topic of the email"
            />
          </label>

          <label className="flex flex-col gap-2" htmlFor="email">
            <span className="text-black dark:text-white font-bold">Email:</span>

            <input
              type="email"
              name="email"
              id="email"
              className="rounded-md border-2 border-white dark:border-black bg-black dark:bg-white text-white dark:text-black p-1 px-2 placeholder:dark:text-black/70"
              placeholder="Your email"
            />
          </label>

          <label className="flex flex-col gap-2" htmlFor="message">
            <span className="text-black dark:text-white font-bold">Message:</span>

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="rounded-md border-2 border-white dark:border-black bg-black dark:bg-white text-white dark:text-black p-1 px-2 placeholder:dark:text-black/70"
              placeholder="Write your message"
            />
          </label>

          <div className="flex justify-end">
            <button
              type="submit"
              className="group/link relative font-bold text-lg text-black dark:text-white hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black rounded-lg border-2 dark:border-white border-black px-4 py-1 transition-all ease-in-out duration-300"
            >
              <ItemContent value="Send" />
            </button>
          </div>
        </form>
      </div>
      <div ref={visorRef} />
    </section>
  );
}

export default SectionContact;
