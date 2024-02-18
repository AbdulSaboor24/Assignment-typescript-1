function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(`The Great ${magician}`);
    }
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magicianNames: string[] = ['David Copperfield', 'Harry Houdini', 'Shin Lim', 'David Blaine'];

let greatMagicians: string[] = make_great(magicianNames);

show_magicians(greatMagicians);