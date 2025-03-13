// code your solution here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}


const mondayWork = (shughli='go to the office') => {
    return `This Monday, I will ${shughli}.`
}

const wrapAdjective = function (style="*"){
    return function (adjective = 'special') {
        return `You are ${style}${adjective}${style}!`;
    };
}
