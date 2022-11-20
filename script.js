const stateNames = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
const stateAbbreviations = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
let fullLinks = [];
let abbreviatedLinks = [];

function createTableData(stateName, fullLink, abbreviatedLink) {
	const table = document.querySelector('table');
	const tr = document.createElement('tr');
	const td1 = document.createElement('td');
	const td2 = document.createElement('td');
	const td3 = document.createElement('td');

	const column1 = document.createTextNode(stateName);
	const column2 = document.createTextNode(fullLink);
	const column3 = document.createTextNode(abbreviatedLink);

	td1.append(column1);
	td2.append(column2);
	td3.append(column3);
	tr.append(td1, td2, td3);
	table.append(tr);
}

for (let i = 0; i < 50; i++) {
	fullLinks.push(`https://www.${stateNames[i].toLowerCase()}.gov`);
	abbreviatedLinks.push(`https://www.${stateAbbreviations[i].toLowerCase()}.gov`);
	createTableData(stateNames[i], fullLinks[i], abbreviatedLinks[i]);
}

// function createLI(stateLink) {
// 	const li = document.createElement('li');
// 	const a = document.createElement('a');
	
// 	const node = document.createTextNode(stateLink);
// 	a.appendChild(node);
// 	a.href = stateLink;
// 	a.target = '_blank';
// 	li.appendChild(a);
	
// 	const ul = document.querySelector('ul');
// 	ul.appendChild(li);
// }

// for (let i = 0; i < stateNames.length; i++) {
// 	stateLinks.push(`https://www.${stateAbbreviations[i].toLowerCase()}.gov`);
// 	createLI(stateLinks[i]);
// }