export interface PoemPuzzle {
    id: string;
    title: string;
    text: string;
}

export interface NavbarTitles {
    title: string;
    id: string;
}

export interface sortableItem { // for Puzzle.tsx, following Brenna's lead here...
    id: number;
    name: string;
}