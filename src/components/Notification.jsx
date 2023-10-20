import { ToastIcon, Toaster } from 'react-hot-toast';

function Notification() {
  return (
    <Toaster position="top-right">
      {(t) => (
        <div className={`${t.visible ? 'animate-animation_enter' : 'animate-animation_leave'} dark:bg-black bg-white text-black dark:text-white w-fit p-2 px-4 rounded-3xl flex items-center gap-3 shadow-lg`}>
          <ToastIcon toast={t} />
          <p>{t.message}</p>
        </div>
      )}
    </Toaster>
  );
}

export default Notification;
