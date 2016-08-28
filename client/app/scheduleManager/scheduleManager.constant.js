
const NAME_OF_DAYS = [
  {dayName: 'Monday'},
  {dayName: 'Tuesday'},
  {dayName: 'Wednesday'},
  {dayName: 'Thursday'},
  {dayName: 'Friday'},
  {dayName: 'Saturday'},
  {dayName: 'Sunday'}
];
const SHIFT_NAMES = {
  DAY: {workHours: 8},
  NIGHT: {workHours: 7.5},
  GRAVEYARD: {workHours: 10},
  OFF: {workHours: 24},
  LEAVE: {workHours: 24}
};

angular.module('chamAppApp.scheduleManager')
  .constant('NAME_OF_DAYS', NAME_OF_DAYS)
  .constant('SHIFT_NAMES', SHIFT_NAMES);
