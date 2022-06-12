// vars
const url = '/projects/structure.json'
let structureData = []
let projectList = []
let socialList = []
const libList = document.querySelector('.lib-list')
const footerSocials = document.querySelector('.foot-socials')

// grab projectr data from json
fetch(url)
    .then(res => res.json()).then(data => {
        structureData.push(data)
        projectList.push(...data.Projects) 
        socialList.push(...data.Socials) 
    }).catch((error) => {
        console.error(error)
})

function generateLists(){
    // check fi project lsit is not empty
    if(!projectList) return console.log(`no list`)

    // generate libraries
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
            <a href=".${ref}${main}" target="_blank" class="preview"><i class="fas fa-tv"></i>${linkText}</a>
        </li>
        `
    }).join('')

    // generate footer stuff
    const footerSocialsHtml = socialList.map(social => {
        const name = social.name
        const link = social.link
        const customlink = social.customlink
        const username = social.username
        return `
        <a href="${link}${customlink}" target="_blank" class="foot-social foot-${name}">
            <i class="fa-brands fa-${name}"></i></a>
        `
    }).join('')
    footerSocials.innerHTML = footerSocialsHtml
    libList.innerHTML = projectPanelHtml
}

// 👉 LAST THING TO DO!!! 👈 ❗❗❗
window.onload = generateLists