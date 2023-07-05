document.addEventListener('DOMContentLoaded', () => {
    const dialogBox = document.getElementById('dialog-box');
    const query = { active: true, currentWindow: true };

    chrome.tabs.query(query, (tabs) => {
        dialogBox.innerHTML = getBarkedTitle(tabs[0].title);
    });
});

const getBarkedTitle = (tabTitle) => {
    const barkTitle = `${getRandomBark()} Ahem.. I mean, we are at: ${tabTitle}`
    return barkTitle;
}

const barks = [
    'Barf barf!',
    'Birf birf!',
    'Woof woof!',
    'Arf arf!',
    'Yip yip!',
    'Biiiirf!'
]

const getRandomBark = () => {
    const bark = barks[Math.floor(Math.random() * barks.length)];
    return bark;
}
