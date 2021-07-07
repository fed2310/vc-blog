export const places = ['Democratic', 'Transactional', 'Transformational', 'Laissez-faire', 'Coaching', 'Charismatic ', 'Servant', 'Bureaucratic', 'Autocratic'];

export const mapResult = (answer, places, setResult, setResultIndex, setFormId) => {
    if(Object.values(answer)[1] == 'b1') {
        if(Object.values(answer)[2] == 'c1'){
            setResult(`${places[3]}`) 
            setResultIndex(3)
            setFormId('c6c560fd-59e6-4029-a588-223a15630b48')
        }
        if(Object.values(answer)[2] == 'c2'){
            setResult(`${places[0]}`) 
            setResultIndex(0)
            setFormId('c66f84ab-2aaa-4683-9bc5-4abbe582f1ce')
        }
        if(Object.values(answer)[2] == 'c3'){
            setResult(`${places[2]}`) 
            setResultIndex(2)
            setFormId('6bf998e3-0429-4965-96c2-0c19c15807b7')
        }
    }
    if(Object.values(answer)[1] == 'b2') {
        if(Object.values(answer)[2] == 'c1'){
            setResult(`${places[8]}`) 
            setResultIndex(8)
            setFormId('35710644-70f5-4d2b-a492-ac474a218858')
        }
        if(Object.values(answer)[2] == 'c2'){
            setResult(`${places[7]}`) 
            setResultIndex(7)
            setFormId('4a4886c2-7b3c-4298-914a-7038762d9850')
        }
        if(Object.values(answer)[2] == 'c3'){
            setResult(`${places[1]}`) 
            setResultIndex(1)
            setFormId('3d8eca2a-015a-41c2-8be5-8cefd0c431f6')
        }
    }
    if(Object.values(answer)[1] == 'b3') {
        if(Object.values(answer)[2] == 'c1'){
            setResult(`${places[4]}`) 
            setResultIndex(4)
            setFormId('b1c047c0-6214-4128-8bea-de0531fd2826')
        }
        if(Object.values(answer)[2] == 'c2'){
            setResult(`${places[6]}`) 
            setResultIndex(6)
            setFormId('3300f0e3-2e74-4270-86be-03b615677b67')
        }
        if(Object.values(answer)[2] == 'c3'){
            setResult(`${places[5]}`) 
            setResultIndex(5)
            setFormId('e991b27a-9f6e-48a1-86f0-8431ec646676')
        }
    }
}

export const resultQuotes = (result) => {
    const randNum = Math.floor(Math.random() * 3)
    const arr = [`Bravo! You are a ${result} leader `, `Hooray! You are a ${result} leader`, `Wow! You are a ${result} leader`]
    return arr[randNum]
}

export const smoothScroll = (div, duration) => {
    var targetPosition = div.getBoundingClientRect().bottom
    var startPosition = typeof window !== `undefined` ? window.pageYOffset : null;
    var distance = targetPosition -  130 
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime
        var run = ease(timeElapsed, startPosition, distance, duration)
        window.scrollTo(0,run)
        if(timeElapsed < duration) requestAnimationFrame(animation)
    }

    function ease (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    };
    requestAnimationFrame(animation)
}


export const smoothScrollToTop = (div, duration) => {
    var targetPosition = div.current.getBoundingClientRect().top
    var startPosition = typeof window !== `undefined` ? window.pageYOffset : null;
    var distance = targetPosition - 100
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime
        var run = ease(timeElapsed, startPosition, distance, duration)
        window.scrollTo(0,run)
        if(timeElapsed < duration) requestAnimationFrame(animation)
    }

    function ease (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    };
    requestAnimationFrame(animation)
}

export const glowAnimate = (div) => {
    if(div.current == null) return

    var glowInTexts = [div.current];
    glowInTexts.forEach(glowInText => {
        let letters = glowInText.textContent.split("");
        glowInText.textContent = "";
        letters.forEach((letter, i) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.style.animationDelay = `${i * 0.1}s`;
            glowInText.append(span);
        });
})
}

export const options1 = [
    {a1: "Conflicts should be handled in a meeting so that the entire team can participate in finding a solution"},
    {a2: "Conflicts should be addressed early and usually in private with the teammates using a friendly approach"},
    {a3: "You should use your convincing power to quickly resolve the conflict and then focus on goal achievement"}
]

export const options2 = [
    {b1: "Encourage creative thinking within the workforce"},
    {b2: "Closely supervise the workforce"},
    {b3: "Get involve with the team and mentor them"}
]

export const options3a = [
    {c1: "I seek their constructive feedback/suggestions atleast once a week"},
    {c2: "I prioritize equal participation when it comes to knowledge sharing"},
    {c3: "Get involve with the team and mentor them"}
]

export const options3b = [
    {c1: "I’m organized, but I’m more comfortable at managing others than myself"},
    {c2: "Super organized. I’m very detail-oriented"},
    {c3: "I’m organized, but I can be better. My main focus is on the result"}
]

export const options3c = [
{c1: "Reframe the timeline & guide the team to deliver improved results"},
{c2: "Take responsibility for the team and start working on the loopholes"},
{c3: "Devise a solution and assign the team to execute it for optimum results"}
]
