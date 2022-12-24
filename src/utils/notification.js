import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

Notify.init({
  width: '250px',
  fontSize: '14px',
  position: 'center-center',
});

Confirm.init({
  buttonsFontSize: '15px',
  titleColor: 'red',
  okButtonBackground: 'red',
  cancelButtonBackground: '#32c682',
});

export const success = () => {
  Notify.success('Success');
};

export const failure = message => {
  Notify.failure(message);
};

export const confirmDeleteAll = deleteCallback => {
  Confirm.show(
    'Delete confirmation',
    'Are you sure you want to delete all contacts?',
    'Yes',
    'No',
    deleteCallback,
    () => {
      return false;
    },
    {}
  );
};

export default Notify;
