import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  width: '300px',
  fontSize: '16px',
  position: 'right-top',
});

export const success = () => {
  Notify.success('Success');
};

export const failure = message => {
  Notify.failure(message);
};

export default Notify;
