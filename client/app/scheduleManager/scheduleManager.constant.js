
const NAME_OF_DAYS = [
  {dayName: 'Sunday'},
  {dayName: 'Monday'},
  {dayName: 'Tuesday'},
  {dayName: 'Wednesday'},
  {dayName: 'Thursday'},
  {dayName: 'Friday'},
  {dayName: 'Saturday'}
];
const SHIFT_NAMES = {
  MORNING: {
    title: 'Day Shift',
    shortcut: 'D',
    workHours: 8
  },
  NIGHT: {
    title: 'Night Shift',
    shortcut: 'N',
    workHours: 7.5
  },
  GRAVEYARD: {
    title: 'Graveyard Shift',
    shortcut: 'G',
    workHours: 10
  },
  OFF: {
    title: 'Off',
    shortcut: 'O',
    workHours: 24
  },
  LEAVE: {
    title: 'Leave',
    shortcut: 'L',
    workHours: 24}
};

angular.module('chamAppApp.scheduleManager')
  .constant('NAME_OF_DAYS', NAME_OF_DAYS)
  .constant('SHIFT_NAMES', SHIFT_NAMES);
