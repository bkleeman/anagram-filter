function AnagramFilter() {

    let map = new Map();
    let values = ['code', 'anagrams', 'smraaang', 'odce']
    
    values.reverse()

    for (let string of values) {
        let sorted = string.split('').sort().join()
        map.set(sorted, string)
    }

    let filteredValues = Array.from(map.values())

    function mapListItem(arr) {
        return <ul>{arr.map((x => {
            return <li key={x.toString()}>{x}</li>
        }))}</ul>
    }

    return (
        <>
            <h2>Tested Array:</h2>
            {mapListItem(values.reverse())}

            <h2>Filtered Anagram Array:</h2>
            {mapListItem(filteredValues)}
        </>
    )

}

export default AnagramFilter;