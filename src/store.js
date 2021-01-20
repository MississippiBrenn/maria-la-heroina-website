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
    type: 'Unidentified',
    csvLocation: '../../csvs/uid_possible_matches_10_miles_with_out_race.csv',
    range: 10,
    race: true

  },
  {
    id: 3,
    title: 'Unidentified with race within 50 miles',
    type: 'Unidentified',
    csvLocation: '../../csvs/uid_possible_matches_50_miles_with_race.csv',
    range: 50,
    race: true
  },
  {
    id: 4,
    title: 'Unidentified without race within 50 miles',
    type: 'Unidentified',
    csvLocation: '../../csvs/uid_possible_matches_50_miles_with_out_race.csv',
    range: 50,
    race: false
  },

  {
    id: 5,
    title: 'Unidentified with race all matches',
    type: 'Unidentified',
    csvLocation: '../../csvs/uid_possible_matches_all_with_race.csv',
    range: 10000,
    race: true
  },
  {
    id: 6,
    title: 'Unidentified without race all matches part 1',
    type: 'Unidentified',
    csvLocation: '../../csvs/uid_possible_matches_all_with_out_race_part_1',
    range: 10000,
    race: false
  },
  {
    id: 7,
    title: 'Unidentified without race all matches part 2',
    type: 'Unidentified',
    csvLocation: '../../csvs/uid_possible_matches_all_with_out_race_part_2',
    range: 10000,
    race: false
  },
]
