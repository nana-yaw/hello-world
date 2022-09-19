const nameToChange = document.getElementById('nameToChange')

window.addEventListener('DOMContentLoaded', () => {
    if (nameToChange == 'Edward') {
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