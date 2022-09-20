const nameToChange = document.getElementById('nameToChange')

window.addEventListener('DOMContentLoaded', () => {
    if (nameToChange == 'Alex') {
        console.log('changed already...')
        return
    } else{
        window.electronAPI.handleChangeName((event, value) => {
            setTimeout(() => {
                console.log('changing...');
                nameToChange.innerText = value
            }, 2000)
        })
    }
})
