import DataTest from './dataTest.js'


export const categories = [
    'Match to an Unidentified Case', 'Match to a Missing Case'
]

export const matches = <DataTest />

export const muscles = [
    'shoulders', 'chest', 'arms', 'back','legs', 'missing', 'unidentified'
]

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





