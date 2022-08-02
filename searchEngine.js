function binarySearch(filter, arr) {
    const mid = Math.floor(arr.length / 2);
    return (arr.length === 1 && arr[0].name != filter) ? "não encontrado" :
        filter === arr[mid].name ? arr[mid] :
            filter < arr[mid].name ? binarySearch(filter, arr.slice(0, mid)) :
                binarySearch(filter, arr.slice(mid));
}

var y = [{ number: 254, name: 'Ana' }, { number: 10, name: "beatriz" }, { number: 9, name: 'julia' }, { number: 7, name: 'leonardo' }, { number: 13, name: 'michelangelo' },
{ number: -200, name: 'splinter' }, { number: 398, name: 'tartarugas ninjas' }, { number: -473, name: 'vader' }, { number: 8, name: 'x-men' }]
console.log(binarySearch('ca', y))
console.log(binarySearch('michelangelo', y))
console.log(binarySearch('splinter', y))
console.log(binarySearch('batman', y))
console.log(binarySearch('julia', y))