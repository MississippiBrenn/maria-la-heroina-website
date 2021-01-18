export const matchTo = ['Unidentified', 'Missing']

export const matchDatabase = [
  {
  id: 1,
  title: 'Unidentified with race within 10 miles',
  type: 'Unidentified',
  csvLocation: '../../csvs/uid_possible_matches_10_miles_with_race.csv',
  range: 10,
  race: true
},
{
  id: 2,
  title: 'Unidentified without race within 10 miles',
  type:'Unidentified',
  csvLocation: '../../csvs/uid_possible_matches_10_miles_with_out_race.csv',
  range: 10,
  race: true

}, 
{
  id: 3,
  title: 'Missing with race within 10 miles',
  type:'Missing',
  csvLocation: '../../csvs/uid_possible_matches_10_miles_with_race.csv',
  range: 10,
  race: true
},
{
  id: 4,
  title: 'Unidentified without race within 10 miles',
  type:'Missing',
  csvLocation: '../../csvs/uid_possible_matches_10_miles_with_out_race.csv',
  range: 10,
  race: true
},

]
