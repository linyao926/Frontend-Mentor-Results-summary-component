import data from './data.json' with { type: 'json' };

const summaryBox = document.querySelector(".summary-box");

const scoreTags = data.map(element => {
    return `
        <div class="score-tag">
            <div class="score-tag-bkg" style="background: ${element.bgColor}"></div>
            <div class="score-tag-title">
                <img src=${element.icon} alt="${element.category} icon" class="title-icon" />
                <span class="title-text" style="color: ${element.color}">${element.category}</span>
            </div>
            <div>
                <span class="score">${element.score}</span>
                <span> / 100</span>
            </div>
        </div>
    `;
});

const htmls = `
    <span class="summary-title">Summary</span>
    ${scoreTags.join('')}
    <button class="btn">Continue</button>
`;

summaryBox.innerHTML = htmls;