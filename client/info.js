







const complimentContainer = document.getElementById("complimentCont")
const fortuneContainer = document.getElementById("fortuneCont")
const allCompBtn = document.getElementById("getAllComps")
const allFortBtn = document.getElementById("getAllFort")
const compForm = document.getElementById("compForm")
const fortForm = document.getElementById("fortForm")
const errCallback = err => console.log(err)
let baseURL = `http://localhost:4000/api/lists`



// gets and displays all compliments in object
const complimentList = () => {
    axios.get("http://localhost:4000/api/list/")
        .then(res => {
            const allCompliments = res.data;
            complimentContainer.innerHTML = allCompliments
                .map(function (compliment) {
                    return '<li class="compliment">' + compliment  + '</li>';
                    
                    
                })
                .join("");
                //attaches a delete request via a click event to newly created <li> tag
                let info = document.querySelectorAll('.compliment')
                let infoArray = Array.from(info)
                for (const deleteComp of info) {
                    deleteComp.addEventListener('click', (event)=> {
                        let num = infoArray.indexOf(event.target)
                        axios.delete(`http://localhost:4000/api/list/${num}`).then(complimentList).catch
                    })
                }
                
            

        })
        .catch(err => {
            complimentContainer.innerHTML = '<li>' + err.message + '</li>'
        })
}
// gets and displays all fortunes in object
const fortuneList = () => {
    axios.get("http://localhost:4000/api/fortList/")
        .then(res => {
            const allFortunes = res.data;
            fortuneContainer.innerHTML = allFortunes
                .map(function (fortune) {
                    return '<li class="fortune">' + fortune + '</li>';
                })
                .join("");
                //attaches a delete request via a click event to newly created <li> tag
                let fortInfo = document.querySelectorAll('.fortune')
                let fortInfoArray = Array.from(fortInfo)
                for (const deleteFort of fortInfo) {
                    deleteFort.addEventListener('click', (event)=> {
                        let fortNum = fortInfoArray.indexOf(event.target)
                        axios.delete(`http://localhost:4000/api/fortList/${fortNum}`).then(fortuneList).catch
                    })
                
                }

        })
        .catch(err => {
            fortuneContainer.innerHTML = '<li>' + err.message + '</li>'
        })
}
// takes an input ( in this case a new compliment ) and pushes it to the compliment endpoint of the object
const addCompliment = (e) => {
    e.preventDefault()

    let compInput = document.getElementById('addCompliment')

    axios.post("http://localhost:4000/api/list/", {compliment: `${compInput.value}`})
        .then(complimentList).catch(errCallback)


}
// takes an input ( in this case a new fortune ) and pushes it to the fortune endpoint of the object
const addFortune = (e) => {
    e.preventDefault()

    let fortInput = document.getElementById('addFortune')

    axios.post("http://localhost:4000/api/fortList/", {fortune: `${fortInput.value}`})
        .then(fortuneList).catch(errCallback)


}






allCompBtn.addEventListener('click', complimentList)
allFortBtn.addEventListener('click', fortuneList)
compForm.addEventListener('submit', addCompliment)
fortForm.addEventListener('submit', addFortune)








