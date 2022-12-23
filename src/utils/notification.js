import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  width: '250px',
  fontSize: '14px',
  position: 'center-center',
});

export const success = () => {
  Notify.success('Success');
};

export const failure = message => {
  Notify.failure(message);
};

export default Notify;
