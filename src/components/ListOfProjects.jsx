import ButtonCircle from './ButtonCircle';
import Project from './Project';
import Spinner from './Spinner';
import useCarousel from '../hooks/useCarousel';

function ListOfProjects({ projects, isLoading }) {
  const {
    carousel, imgRef, setIsEnter, handleClickNext, handleClickPrev,
  } = useCarousel();

  return (
    <div className="flex items-center flex-col lg:flex-row gap-4 lg:gap-0">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="overflow-hidden">
            <ul
              className="flex items-center w-fit"
              ref={carousel}
              onMouseEnter={() => setIsEnter(true)}
              onMouseLeave={() => setIsEnter(false)}
            >
              {projects.map((project) => (
                <Project
                  key={project.id}
                  project={project}
                  imgRef={imgRef}
                />
              ))}
            </ul>
          </div>

          <div
            className="flex flex-row lg:flex-col gap-4 lg:mx-4 w-fit lg:w-auto self-end lg:self-center"
            onMouseEnter={() => setIsEnter(true)}
            onMouseLeave={() => setIsEnter(false)}
          >
            <ButtonCircle direction="left" handleClick={handleClickPrev} />
            <ButtonCircle direction="right" handleClick={handleClickNext} />
          </div>
        </>
      )}
    </div>
  );
}

export default ListOfProjects;
