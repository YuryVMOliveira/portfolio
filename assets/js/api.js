
async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/YuryVMOliveira/portifolio/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}