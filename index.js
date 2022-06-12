
// ⚠️ DEBUG ON?
const debugOn = false

// other vars
const url = './projects/structure.json'
let structureData = []
let projectList = []
let socialList = []
const libList = document.querySelector('.lib-list')
const footerSocials = document.querySelector('.foot-socials')

// 🔢 asynch function to make sure page laods properly
async function generateLists(){

    // grab projectr data from json
    // ⌚ wait for fetch to return promise before going forward
    await fetch(url)
    .then(res => res.json()).then(data => {
        structureData.push(data)
        projectList.push(...data.Projects) 
        socialList.push(...data.Socials)
        logging('grabbed listings')
    }).catch((error) => {
        console.error(error)
    })

    logging('triggered')
    // generate libraries
    const projectPanelHtml = projectList.map(project => {
        const id = project.id
        const name = project.name
        const ref = project.reference
        const desc = project.description
        const main = project.main
        const linkText = project.linktext
        return `
        <a href="${ref}${main}" class="preview">
        <li>
            <h3>
            <span class="id">#${id}</span>
            <span class="name">${name}</span>
            </h3>
            <p>${desc}</p>
            <span class="guide"><t>${linkText}</t><i class="fa-solid fa-arrow-right"></i></span>
        </li>
        </>
        `
    }).join('')
    logging('lib-list generated')

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
    logging('footer generated')
    footerSocials.innerHTML = footerSocialsHtml
    libList.innerHTML = projectPanelHtml
    logging('contentys pushed')
}

function logging(msg) { if(debugOn) return console.log(msg) }

// 👉 LAST THING TO DO!!! 👈 ❗❗❗
window.onload = (event) => { generateLists() }