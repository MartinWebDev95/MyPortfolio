import { useRef } from 'react';
import ItemContent from './ItemContent';
import useNearElement from '../hooks/useNearElement';
import useForm from '../hooks/useForm';

function SectionContact() {
  const form = useRef();

  const {
    formValues,
    formErrors,
    handleSubmit,
    handleChangeInput,
    handleFocusInput,
    handleBlurInput,
  } = useForm({ form });

  const { visorRef, isVisible } = useNearElement();

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

          <label className="flex flex-col gap-2" htmlFor="username">
            <p className={`${formErrors.username !== '' ? 'text-red-600' : 'text-black dark:text-white'} font-bold flex items-center justify-between text-sm sm:text-base`}>
              <span>
                Name:
              </span>

              {(formErrors.username !== '')
                && (
                <span>{formErrors.username}</span>
                )}
            </p>

            <input
              type="text"
              name="username"
              id="username"
              value={formValues.username}
              className="rounded-md border-2 border-white dark:border-black bg-black dark:bg-white text-white dark:text-black p-1 px-2 placeholder:dark:text-black/70"
              placeholder="Your name"
              onFocus={handleFocusInput}
              onBlur={handleBlurInput}
              onChange={handleChangeInput}
            />
          </label>

          <label className="flex flex-col gap-2" htmlFor="email">
            <p className={`${formErrors.email !== '' ? 'text-red-600' : 'text-black dark:text-white'} font-bold flex items-center justify-between text-sm sm:text-base`}>
              <span>
                Email:
              </span>

              {(formErrors.email !== '')
                && (
                <span>{formErrors.email}</span>
                )}
            </p>

            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              className="rounded-md border-2 border-white dark:border-black bg-black dark:bg-white text-white dark:text-black p-1 px-2 placeholder:dark:text-black/70"
              placeholder="Your email"
              onFocus={handleFocusInput}
              onBlur={handleBlurInput}
              onChange={handleChangeInput}
            />
          </label>

          <label className="flex flex-col gap-2" htmlFor="topic">
            <p className={`${formErrors.topic !== '' ? 'text-red-600' : 'text-black dark:text-white'} font-bold flex items-center justify-between text-sm sm:text-base`}>
              <span>
                Topic:
              </span>

              {(formErrors.topic !== '')
                && (
                <span>{formErrors.topic}</span>
                )}
            </p>

            <input
              type="text"
              name="topic"
              id="topic"
              value={formValues.topic}
              className="rounded-md border-2 border-white dark:border-black bg-black dark:bg-white text-white dark:text-black p-1 px-2 placeholder:dark:text-black/70"
              placeholder="Your topic"
              onFocus={handleFocusInput}
              onBlur={handleBlurInput}
              onChange={handleChangeInput}
            />
          </label>

          <label className="flex flex-col gap-2" htmlFor="message">
            <p className={`${formErrors.message !== '' ? 'text-red-600' : 'text-black dark:text-white'} font-bold flex items-center justify-between text-sm sm:text-base`}>
              <span>
                Message:
              </span>

              {(formErrors.message !== '')
                && (
                <span>{formErrors.message}</span>
                )}
            </p>

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={formValues.message}
              className="rounded-md border-2 border-white dark:border-black bg-black dark:bg-white text-white dark:text-black p-1 px-2 placeholder:dark:text-black/70"
              placeholder="Write your message"
              onFocus={handleFocusInput}
              onBlur={handleBlurInput}
              onChange={handleChangeInput}
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
