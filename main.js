const btn = document.getElementById('clickBtn')



function backgroundColor() {
    let hexNum = Math.floor(Math.random() * 1000000)
    hexNum = '#' + hexNum
    console.log(hexNum)
    document.body.style.backgroundColor = hexNum
    btn.textContent = hexNum
}