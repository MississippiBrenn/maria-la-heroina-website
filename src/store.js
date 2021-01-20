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
  title: 'Unidentified with race within 50 miles',
  type:'Unidentified',
  csvLocation: '../../csvs/uid_possible_matches_50_miles_with_race.csv',
  range: 50,
  race: true
},
{
  id: 4,
  title: 'Unidentified without race within 50 miles',
  type:'Unidentified',
  csvLocation: '../../csvs/uid_possible_matches_50_miles_with_out_race.csv',
  range: 50,
  race: false
},

{id: 5,
title: 'Unidentified with race all matches',
type:'Unidentified',
csvLocation: '../../csvs/uid_possible_matches_all_with_race.csv',
range: 10000,
race: true
},
{
id: 6,
title: 'Unidentified without race within 50 miles',
type:'Missing',
csvLocation: '../../csvs/uid_possible_matches_50_miles_with_out_race.csv',
range: 50,
race: false
},


{
  id: 55,
  title: 'Missing with race within 10 miles',
  type:'Missing',
  csvLocation: '../../csvs/uid_possible_matches_10_miles_with_race.csv',
  range: 10,
  race: true
},
{
  id: 66,
  title: 'Unidentified without race within 10 miles',
  type:'Missing',
  csvLocation: '../../csvs/uid_possible_matches_10_miles_with_out_race.csv',
  range: 10,
  race: true
},

]
