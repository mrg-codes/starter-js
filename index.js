// vars
const url = '/projects/structure.json'
let structureData = []
let projectList = []
const libList = document.querySelector('.lib-list')

window.onload = setTimeout(generateList, 500)
// grab projectr data from json
fetch(url)
    .then(res => res.json())
    .then(data => {
        structureData.push(data)
        projectList.push(...data.Projects) 
    })
    .catch((error) => {
        console.error(error)
    })

function generateList(){
    if(!projectList) return console.log(`no list`)
    const projectPanelHtml = projectList.map(project => {
        const id = project.id
        const name = project.name
        const ref = project.reference
        const desc = project.description
        const main = project.main
        const linkText = project.linktext
        return `
        <li>
            <h3>
            <span class="id">#${id}</span>
            <span class="name">${name}</span>
            </h3>
            <p>${desc}</p>
            <a href=".${ref}${main}" class="preview"><i class="fas fa-tv"></i>${linkText}</a>
        </li>
        `
    }).join('')
    console.log(libList)
    libList.innerHTML = projectPanelHtml
    console.log(projectPanelHtml)
}