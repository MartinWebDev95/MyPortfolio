function ListOfTopics({ topics }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {topics.map((topic) => (
        <li
          key={topic}
          className="dark:bg-white bg-black text-white dark:text-black rounded-full w-fit px-2 font-bold hidden md:block"
        >
          {topic}
        </li>
      ))}
    </ul>
  );
}

export default ListOfTopics;
