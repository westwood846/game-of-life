import Game from './gameOfLife';


const world = [
  [true,  true,  false],
  [false, true,  false],
  [true,  false, true ]
];


it('parses diagrams', () => {
  let raw = `
    110
    010
    101
  `;
  expect(Game.parseDiagram(raw)).toStrictEqual(world);
});


it('creates an empty new world', () => {
  let empty3x3 = Game.parseDiagram(`
    000
    000
    000
  `);
  expect(Game.newEmptyWorld(3, 3)).toStrictEqual(empty3x3);
});


it('gets a live cell', () => {
  expect(Game.getCell(world, 1, 1)).toBe(true);
});

it('gets a dead cell', () => {
  expect(Game.getCell(world, 1, 0)).toBe(false);
});

it('returns undefined when getting cell over x bounds', () => {
  expect(Game.getCell(world, 4, 0)).toBe(undefined);
});

it('returns undefined when getting cell under x bounds', () => {
  expect(Game.getCell(world, -1, 0)).toBe(undefined);
});

it('returns undefined when getting cell over y bounds', () => {
  expect(Game.getCell(world, 0, 4)).toBe(undefined);
});

it('returns undefined when getting cell under y bounds', () => {
  expect(Game.getCell(world, 0, -1)).toBe(undefined);
});


it('flips a live cell to a dead cell', () => {
  let oldCellState = Game.getCell(world, 1, 1);
  let newWorld = Game.setCell(world, 1, 1, !oldCellState);
  expect(Game.getCell(newWorld, 1, 1)).toBe(false);
});

it('flips a dead cell to a live cell', () => {
  let oldCellState = Game.getCell(world, 0, 2);
  let newWorld = Game.setCell(world, 0, 2, !oldCellState);
  expect(Game.getCell(newWorld, 0, 2)).toBe(true);
});


it('toggles a live cell to a dead cell', () => {
  expect(Game.getCell(Game.toggleCell(world, 1, 1), 1, 1)).toBe(false);
});

it('toggles a dead cell to a live cell', () => {
  expect(Game.getCell(Game.toggleCell(world, 0, 2), 0, 2)).toBe(true);
});


it('retrieves all Neighbours', () => {
  expect(Game.getNeighbours(world, 1, 1).sort()).toStrictEqual([false, false, false, false, true, true, true, true]);
});

it('retrieves all neighbours at lower bounds', () => {
  expect(Game.getNeighbours(world, 0, 0).sort()).toStrictEqual([false, true, true, undefined, undefined, undefined, undefined, undefined]);
});

it('retrieves all neighbours at upper bounds', () => {
  expect(Game.getNeighbours(world, 2, 2).sort()).toStrictEqual([false, false, true, undefined, undefined, undefined, undefined, undefined]);
});


it('counts live neighbours', () => {
  expect(Game.countAliveNeighbours(world, 1, 1)).toBe(4);
});

it('does not count neighbours outside lower bounds', () => {
  expect(Game.countAliveNeighbours(world, 0, 0)).toBe(2);
});

it('does not count neighbours outside upper bounds', () => {
  expect(Game.countAliveNeighbours(world, 2, 2)).toBe(1);
});


// TODO: Tick Cell Tests


it('keeps blocks alive', () => {
  let world = Game.parseDiagram(`
    0000
    0110
    0110
    0000
  `);
  expect(Game.tick(world)).toStrictEqual(world);
});

it('keeps beehives alive', () => {
  let world = Game.parseDiagram(`
    000000
    001100
    010010
    001100
    000000
  `);
  expect(Game.tick(world)).toStrictEqual(world);
});

it('keeps loafs alive', () => {
  let world = Game.parseDiagram(`
    000000
    001100
    010010
    001010
    000100
    000000
  `);
  expect(Game.tick(world)).toStrictEqual(world);
});

it('oscillates blinkers', () => {
  let period0 = Game.parseDiagram(`
    00000
    00000
    01110
    00000
    00000
  `);
  let period1 = Game.parseDiagram(`
    00000
    00100
    00100
    00100
    00000
  `);
  expect(Game.tick(period0)).toStrictEqual(period1);
  expect(Game.tick(period1)).toStrictEqual(period0);
});

it('oscillates toads', () => {
  let period0 = Game.parseDiagram(`
    000000
    000100
    010010
    010010
    001000
    000000
  `);
  let period1 = Game.parseDiagram(`
    000000
    000000
    001110
    011100
    000000
    000000
  `);
  expect(Game.tick(period0)).toStrictEqual(period1);
  expect(Game.tick(period1)).toStrictEqual(period0);
});

it('oscillates beacons', () => {
  let period0 = Game.parseDiagram(`
    000000
    011000
    011000
    000110
    000110
    000000
  `);
  let period1 = Game.parseDiagram(`
    000000
    011000
    010000
    000010
    000110
    000000
  `);
  expect(Game.tick(period0)).toStrictEqual(period1);
  expect(Game.tick(period1)).toStrictEqual(period0);
});