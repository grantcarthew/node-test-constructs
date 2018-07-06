module.exports = {
  url: 'https://en.wikipedia.org/wiki/Serenity_(Firefly_vessel)',
  class: 'Firefly-Class Transport Ship',
  classCode: '03-K64',
  model: 'aught three',
  designDate: 'August 2459',
  technicalSpecifications: {
    lengthInMeters: 82,
    beamInMeters: 52,
    heightInMeters: 24,
    curbWeightInKg: 128100,
    cargoCapacityInKg: 748000,
    personnelCapacity: 18,
    maxAcceleration: '4.2g',
    rangeInAstronomicalUnits: 440
  },
  interior: {
    upperDeck: [
      'Bridge',
      'Corridor',
      'Airlock',
      'Galley',
      'Engine Room'
    ],
    lowerDeck: [
      'Main Airlock',
      'Cargo Bay',
      'Common Area',
      'Infirmary',
      'Passenger Quarters'
    ]
  },
  engine: 'Standard Radion-Accelerator Core',
  armament: null,
  defense: 'Crybabies - decoy buoys used to mimic other ships',
  primaryFeature: 'Fast'
}
