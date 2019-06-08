const superagent = require('superagent')

const getTatooineResidents=()=>{
    const tattoineResidents = superagent.get('https://swapi.co/api/planets/1/')
                            .then(res => console.log(res.body.residents))
                            .catch(err => console.log(err))
    return new Promise((resolve, reject) => {
        if(3 > 2) resolve([tattoineResidents])
        reject('I am broken!')
      })
}

const promiseMeAString=(argument)=>{
        return new Promise((resolve, reject) => {
            if(argument!=null) resolve('You kept the Promise!')
            reject("You have failed me!")
          })
}

module.exports = {getTatooineResidents,promiseMeAString}