export const matchTo = ['Unidentified', 'Missing']

export const matchDatabase = [
  {
  id: 1,
  title: 'Unidentified with race within 10 miles',
  type: 'Unidentified',
  csvLocation: './csvs/uid_possible_matches_10_miles_with_race.csv',
  range: 10,
  race: true
},
{
  id: 2,
  title: 'Unidentified without race within 10 miles',
  type:'Unidentified',
  csvLocation: './csvs/uid_possible_matches_10_miles_with_out_race.csv',
  range: 10,
  race: true

}, 
{
  id: 3,
  title: 'Missing with race within 10 miles',
  type:'Missing',
  csvLocation: './csvs/uid_possible_matches_10_miles_with_race.csv',
  range: 10,
  race: true
},
{
  id: 4,
  title: 'Unidentified without race within 10 miles',
  type:'Missing',
  csvLocation: './csvs/uid_possible_matches_10_miles_with_out_race.csv',
  range: 10,
  race: true
},

]


export const muscles = ['shoulders', 'chest', 'arms', 'back', 'legs']

export const exercises = [
  {
    id: 'overhead-press',
    title: 'Overhead Press',
    description: 'Delts exercise...',
    muscles: 'shoulders'
  },
  {
    id: 'dips',
    title: 'Dips',
    description: 'Triceps exercise...',
    muscles: 'arms'
  },
  {
    id: 'barbell-curls',
    title: 'Barbell Curls',
    description: 'Biceps exercise...',
    muscles: 'arms'
  },
  {
    id: 'bench-press',
    title: 'Bench Press',
    description: 'Chest exercise...',
    muscles: 'chest'
  },
  {
    id: 'pull-ups',
    title: 'Pull Ups',
    description: 'Back and biceps exercise...',
    muscles: 'back'
  },
  {
    id: 'deadlifts',
    title: 'Deadlifts',
    description: 'Back and leg exercise...',
    muscles: 'back'
  },
  {
    id: 'squats',
    title: 'Squats',
    description: 'Legs exercise...',
    muscles: 'legs'
  }
]
