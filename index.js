function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(task = 'go to the office'){
    return `This Monday, I will ${task}.`
}

function wrapAdjective(begin = 'You are'){
    return function(special){
        return `You are ${begin}${special}${begin}!`
    }
}