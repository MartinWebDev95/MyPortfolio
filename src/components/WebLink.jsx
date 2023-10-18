import ItemContent from './ItemContent';

function WebLink({ text, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link relative font-bold text-lg text-black dark:text-white hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black rounded-lg border-2 dark:border-white border-black px-4 py-1 hover:scale-110 transition-all ease-in-out duration-300"
    >
      <ItemContent value={text} />
    </a>
  );
}

export default WebLink;
