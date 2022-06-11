




const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const imgForm = document.getElementById('imgForm')
const body = document.querySelector('body')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            
            alert(data);
            
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const fortuneData = res.data;
            alert(fortuneData);
            
        });

};

const getImage = () => {
    axios.get("http://localhost:4000/api/image/").then(res => {
        const newPhoto = res.data
        const imgDiv = document.createElement('div')
        imgDiv.innerHTML =`<img src=${newPhoto} class="image"/>`

        body.appendChild(imgDiv)
    })
}

const changeImg = (e) => {
    e.preventDefault()
    const imgInput = document.getElementById('changePic')
    axios.put(`http://localhost:4000/api/image/`, {image: `${imgInput.value}`}).then()
}
imgForm.addEventListener('submit', changeImg)

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
getImage()

