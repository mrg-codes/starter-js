// vars
const url = '/projects/structure.json'
let list = []

// grab projectr data from json
fetch(url)
    .then(res => res.json())
    .then(data => list.push(...data.Projects))
    .catch((error) => {
        console.error(error)
    })
console.log(list)