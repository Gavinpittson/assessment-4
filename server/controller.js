const info = require('./info.json')
module.exports = {

    getCompliment: (req, res) => {
        const compliments = info.compliment;
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
        
    },

    getFortune: (req, res) => {
        const fortunes = info.fortune

        let randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomFortuneIndex];

        res.status(200).send(randomFortune);

    },

    getAllCompliment: (req, res) => {
        res.status(200).send(info.compliment)
    },

    getAllFortunes: (req, res) => {
        res.status(200).send(info.fortune)
    },

    createCompliment: (req, res) => { 
        console.log(req.body.compliment)
        info.compliment.push(req.body.compliment);
        // compliment = '';
        res.status(200).send(info.compliment)
    },
    createFortune: (req, res) => {
        console.log(req.body.fortune)
        info.fortune.push(req.body.fortune);
        // compliment = '';
        res.status(200).send(info.fortune)
    },

    deleteCompliment: (req, res) => {
        let index = parseInt(req.params.num)
        

        info.compliment.splice(index, 1)
        res.status(200).send(info.compliment)
        
    },
    deleteFortune: (req, res) => {
        let fortIndex = parseInt(req.params.num)
        console.log(fortIndex)
        info.fortune.splice(fortIndex, 1)
        res.status(200).send(info.fortune)
        
    },

    getImage: (req, res) => {
        res.status(200).send(info.image)
    },

    changeImage: (req, res) => {
         
        console.log(req.body.image)
        info.image = req.body.image
        res.status(200)
    }
}