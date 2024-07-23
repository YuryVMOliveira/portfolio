


function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name
    

    const name = document.getElementById('profile.name')
    name.innerText=profileData.name

    const job = document.getElementById('profile.job')
    job.innerText=profileData.job

    const location = document.getElementById(' profile.location')
    location.innerText = profileData.location
    
    const phone = document.getElementById('profile.phone')
    phone.innerText=profileData.phone
    phone.href=`tel:${profileData.phone}`

    const email = document.getElementById(' profile.email')
    email.innerText = profileData.email
    email.href=`mailto:${profileData.email}`
}
function updateSofSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML=profileData.skills.softSkills.map(skill=>`<l1>${skill}</>`).join('')
}
(async ()=> {
    const profiteData = await fetchProfileData()
    updateProfileInfo(profiteData)
    updateSofSkills(profiteData)
}) ()

