let Footballers: string[] = ['Messi', 'Neymar', 'Iniesta', 'Zidane']

console.log("My Favorite Footballer's are:");
for (let i = 0; i <= Footballers.length; i++) {
    console.log(Footballers[i])
}

// To correct the error we will just change this line "i <= Footballers.length" by removing the '=' to "i < Footballers.length"