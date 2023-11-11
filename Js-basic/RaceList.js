class RaceList {

    
  constructor() {
    this.raceService = new RaceService();
    // let's say that list() returns a promise
    this.raceService
      .list()
      // we store the races returned into a member of `RaceList`
      .then((races) => (this.races = races));
    // arrow functions, FTW!
  }
}

// in a test
const fakeService = {
  list: () => {
    // returns a fake promise
  },
};
const raceList = new RaceList(fakeService);
// now we are sure that the race list
// is the one we want for the test
