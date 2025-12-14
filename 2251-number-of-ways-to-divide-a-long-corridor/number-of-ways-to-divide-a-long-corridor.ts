enum Furniture {
  Seat = 'S',
  Plant = 'P',
}
function numberOfWays(corridor: string): number {
  let seatCounter = 0;
  let plantCounter = 0;
  let divider = 1;

  for(const furniture of corridor) {
    if(furniture === Furniture.Seat) {
        if(seatCounter % 2 === 0) {
            divider = (divider  * (plantCounter + 1)) % (1e9 + 7)
            plantCounter = 0;
        }
        seatCounter++;
    } else {
        // This make sure we only increment the plant on the edge of two seats
        if(seatCounter >= 2 && seatCounter % 2 === 0) {
            plantCounter++;
        }
    }
  }

  return seatCounter >= 2 && seatCounter % 2 === 0 ? divider : 0;  
};