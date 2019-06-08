const groupAdultsByAgeRange = (people) =>{
    const ageGroups={}
    const adults=people.filter(person=>person.age>=18)
    const ageRange1=[]
    const ageRange2=[]
    const ageRange3=[]
    const ageRange4=[]
    const ageRange5=[]
    adults.map(person=>{
        if(person.age<21){
            return ageRange1.push(person)
        }
        if(person.age<31){
            return ageRange2.push(person)
        }
        if(person.age<41){
            return ageRange3.push(person)
        }
        if(person.age<51){
            return ageRange4.push(person)
        }
        if(person.age>50){
            return ageRange5.push(person)
        }
    })
    if(ageRange1.length>0){
        ageGroups["20 and younger"]=ageRange1
    }
    if(ageRange2.length>0){
        ageGroups["21-30"]=ageRange2
    }
    if(ageRange3.length>0){
        ageGroups["31-40"]=ageRange3
    }
    if(ageRange4.length>0){
        ageGroups["41-50"]=ageRange4
    }
    if(ageRange5.length>0){
        ageGroups["51 and older"]=ageRange5
    }
    return ageGroups
}

module.exports = {groupAdultsByAgeRange}