import { setupBoard, progressGame } from "../src/game";

describe ("Board setup", () => {    
    it("should setup empty board of 3x3", () => {
        expect(setupBoard(3, 3)).toEqual([[0,0,0],
                                      [0,0,0],
                                      [0,0,0]]);
    });

    it("should setup empty board of 5x5", () => {
        expect(setupBoard(5, 5)).toEqual([[0,0,0,0,0],
                                      [0,0,0,0,0],
                                      [0,0,0,0,0],
                                      [0,0,0,0,0],
                                      [0,0,0,0,0]]);
    });
})

describe("Progress game", () => {
    it("should return an empty 3x3 board when passed an empty board", () => { 
        const board = setupBoard(3, 3);

        expect(progressGame(board)).toEqual([[0,0,0],
                                             [0,0,0],
                                             [0,0,0]]);
    });

    it("should return an empty 3x3 board when passed a board with one live cell", () => {
        const board = [[0,0,0],
                       [0,1,0],
                       [0,0,0]];

        expect(progressGame(board)).toEqual([[0,0,0],
                                             [0,0,0],
                                             [0,0,0]]);
    });

    it("should return an empty 3x3 board when passed a board with two neighbouring live cells in the column", () => {
        const board = [[0,0,0],
                       [0,1,0],
                       [0,1,0]];

        expect(progressGame(board)).toEqual([[0,0,0],
                                             [0,0,0],
                                             [0,0,0]]);
    });

    it("should return an empty 3x3 board when passed a board with two neighbouring live cells on the same row", () => {
        const board = [[0,0,0],
                       [0,0,0],
                       [0,1,1]];

        expect(progressGame(board)).toEqual([[0,0,0],
                                             [0,0,0],
                                             [0,0,0]]);
    });

    it("should return a 3x3 board with a single live cell when passed a board with three neighbouring live cells on the top row", () => {
        const board = [[1,1,1],
                       [0,0,0],
                       [0,0,0]];

        expect(progressGame(board)).toEqual([[0,1,0],
                                             [0,0,0],
                                             [0,0,0]]);
    });

    it("should return a 3x3 board with a single live cell when passed a board with three neighbouring live cells on the middle row", () => {
        const board = [[0,0,0],
                       [1,1,1],
                       [0,0,0]];

        expect(progressGame(board)).toEqual([[0,0,0],
                                             [0,1,0],
                                             [0,0,0]]);
    });

    it("should return a 3x3 board with a single live cell when passed a board with three neighbouring live cells in the middle column", () => {
        const board = [[0,1,0],
                       [0,1,0],
                       [0,1,0]];

        expect(progressGame(board)).toEqual([[0,0,0],
                                             [0,1,0],
                                             [0,0,0]]);
    });

    it("should return a 3x3 board with a single live cell when passed a board with three neighbouring live cells in the left column", () => {
        const board = [[1,0,0],
                       [1,0,0],
                       [1,0,0]];

        expect(progressGame(board)).toEqual([[0,0,0],
                                             [1,0,0],
                                             [0,0,0]]);
    });

    it("should return a 3x3 board with a single live cell when passed a board with three neighbouring live cells in a diagonal line", () => {
        const board = [[1,0,0],
                       [0,1,0],
                       [0,0,1]];

        expect(progressGame(board)).toEqual([[0,0,0],
                                             [0,1,0],
                                             [0,0,0]]);
    });

    it("should return a 3x3 board with a single live cell when passed a board with three neighbouring live cells in a different diagonal line", () => {
        const board = [[0,0,1],
                       [0,1,0],
                       [1,0,0]];

        expect(progressGame(board)).toEqual([[0,0,0],
                                             [0,1,0],
                                             [0,0,0]]);
    });
});

