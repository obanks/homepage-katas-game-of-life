import { setupBoard, progressGame } from "../src/game";

describe ("Board setup", () => {    
    it("should setup empty board of 3x3", () => {
        expect(setupBoard()).toEqual([[0,0,0],
                                      [0,0,0],
                                      [0,0,0]]);
    });
})

describe("Progress game", () => {
    it("should return an empty board when passed an empty board", () => { 
        const board = setupBoard();

        expect(progressGame(board)).toEqual([[0,0,0],
                                             [0,0,0],
                                             [0,0,0]]);
    });

    it("should return an empty board when passed a board with one live cell", () => {
        const board = [[0,0,0],
                       [0,1,0],
                       [0,0,0]];

        expect(progressGame(board)).toEqual([[0,0,0],
                                             [0,0,0],
                                             [0,0,0]]);
    });

    it("should return an empty board when passed a board with two neighbouring live cells", () => {
        const board = [[0,0,0],
                       [0,1,0],
                       [0,1,0]];

        expect(progressGame(board)).toEqual([[0,0,0],
                                             [0,0,0],
                                             [0,0,0]]);
    });

    it("should return a board with a single live cell when passed a board with three neighbouring live cells", () => { // fiona will be happy
        const board = [[0,1,0],
                       [0,1,0],
                       [0,1,0]];

        expect(progressGame(board)).toEqual([[0,0,0],
                                             [0,1,0],
                                             [0,0,0]]);
    });
});

