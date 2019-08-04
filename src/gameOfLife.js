const parseDiagram = (raw, aliveChar="1") => {
  let lines = raw.trim().split("\n");
  let world = lines.map(line => line.trim().split("").map(cell => cell === aliveChar));
  return world;
}

const newEmptyWorld = (width, height) => {
  let world = [];
  for (let row = 0; row < width; row++) {
    world[row] = [];
    for (let col = 0; col < height; col++) {
      world[row].push(false);
    }
  }
  return world;
}

const newRandomWorld = (width, height, density = .75) => {
  let world = [];
  for (let row = 0; row < width; row++) {
    world[row] = [];
    for (let col = 0; col < height; col++) {
      world[row].push(Math.random() > density);
    }
  }
  return world;
}

const getCell = (world, row, col) => {
  if (
    row < 0
    || col < 0
    || row >= world.length
    || col >= world[row].length
  ) return undefined;
  else return world[row][col];
}

const setCell = (world, row, col, alive=true) => {
  let newWorld = world.map(row => row.slice());
  newWorld[row][col] = alive;
  return newWorld;
}

const toggleCell = (world, row, col) => {
  return setCell(world, row, col, !getCell(world, row, col));
}

const getNeighbours = (world, row, col) => {
  return [
    getCell(world, row - 1, col),
    getCell(world, row - 1, col + 1),
    getCell(world, row,     col + 1),
    getCell(world, row + 1, col + 1),
    getCell(world, row + 1, col),
    getCell(world, row + 1, col - 1),
    getCell(world, row,     col - 1),
    getCell(world, row - 1, col - 1)
  ];
}

const countAliveNeighbours = (world, row, col) => {
  return getNeighbours(world, row, col).filter(cell => cell === true).length;
}

const tickCell =  (world, row, col) => {
  let alive = getCell(world, row, col);
  let aliveNeighbours = countAliveNeighbours(world, row, col);

  if (alive  && aliveNeighbours < 2)                              return false; // Death by underpopulation
  if (alive  && (aliveNeighbours === 2 || aliveNeighbours === 3)) return true; // Live on
  if (alive  && aliveNeighbours > 3)                              return false; // Death by overpopulation
  if (!alive && aliveNeighbours === 3)                            return true; // Reproduction

  return alive; // Remain dead
}

const tick = world => {
  let nextGeneration = [];
  for (let row = 0; row < world.length; row++) {
    nextGeneration[row] = [];
    for (let col = 0; col < world[row].length; col++) {
      let nextGen = tickCell(world, row, col);
      nextGeneration[row].push(nextGen);
    }
  }
  return nextGeneration;
}

export default { parseDiagram, newEmptyWorld, newRandomWorld, getCell, setCell, toggleCell, getNeighbours, countAliveNeighbours, tickCell, tick };