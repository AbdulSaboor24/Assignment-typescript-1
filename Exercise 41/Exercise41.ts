let magicianNames: string[] = ['David Copperfield', 'Harry Houdini', 'Shin lim', 'David Blaine'];

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

show_magicians(magicianNames);