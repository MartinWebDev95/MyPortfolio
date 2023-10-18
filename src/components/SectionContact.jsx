import ItemContent from './ItemContent';

function SectionContact() {
  return (
    <section
      id="Contact"
      className="container mx-auto px-4 md:px-0 mb-4"
    >
      <div className="bg-white/30 dark:bg-black/30 rounded-3xl border-white/30 dark:border-black/30 backdrop-blur-lg pt-8 pb-4 border-2 px-4 sm:grid sm:place-content-center shadow-none hover:shadow-lg transition-all duration-700 ease-in-out">
        <h2
          className="text-center uppercase font-bold text-black dark:text-white text-3xl lg:text-4xl mb-6 lg:mb-8"
        >
          Contact
        </h2>

        <form action="" method="post" className="flex flex-col gap-4">
          <label className="flex flex-col gap-2" htmlFor="topic">
            <span className="text-black dark:text-white font-bold">Topic:</span>

            <input
              type="text"
              name="topic"
              id="topic"
              className="rounded-md border-2 border-white dark:border-black bg-black dark:bg-white text-white dark:text-black p-1 px-2"
            />
          </label>

          <label className="flex flex-col gap-2" htmlFor="message">
            <span className="text-black dark:text-white font-bold">Message:</span>

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="rounded-md border-2 border-white dark:border-black bg-black dark:bg-white text-white dark:text-black p-1 px-2"
            />
          </label>

          <div className="flex justify-end">
            <button
              type="submit"
              className="group/link relative font-bold text-lg text-black dark:text-white hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black rounded-lg border-2 dark:border-white border-black px-4 py-1 hover:scale-110 transition-all ease-in-out duration-300"
            >
              <ItemContent value="Send" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SectionContact;
