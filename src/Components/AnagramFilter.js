function AnagramFilter() {
    let unfiltered = ['code', 'anagrams', 'smraaang', 'odce']
    let filtered = []

    for (let i = 0; i < unfiltered.length; i++) {

        unfiltered[i] = unfiltered[i].split('').sort().join('');

    }

    unfiltered.sort()

    for (let i = 0; i < unfiltered.length; i++) {
        if (unfiltered[i] === unfiltered[i + 1]) {
            filtered.push(unfiltered[i])
        }
    }

    return (
        <>
            <h1>Tested Array:</h1>
            <p>['code', 'anagrams', 'smraaang', 'odce']</p>

            <h1>Filtered Anagram Array:</h1>

            <ul>
                {filtered.map((x) => {
                    return <li>{x}</li>
                })}
            </ul>
        </>
    )

}

export default AnagramFilter;