const topics = [
  // O
  {
    title: "Over-collateralized",
    url: "/topics/over-collateralized"
  },



];

function displayTopics() {
  const container = document.getElementById('topics-container');
  
  // Group topics by first letter
  const letters = {};
  topics.forEach(topic => {
    const firstLetter = topic.title[0].toUpperCase();
    if (!letters[firstLetter]) {
      letters[firstLetter] = [];
    }
    letters[firstLetter].push(topic);
  });

  // Create sections for each letter
  Object.keys(letters).sort().forEach(letter => {
    const section = document.createElement('section');
    section.innerHTML = `
      <h2>${letter}</h2>
      <ul>
        ${letters[letter].map(topic => `
          <li>
            <a href="${topic.url}">${topic.title}</a>
          </li>
        `).join('')}
      </ul>
    `;
    container.appendChild(section);
  });
}

document.addEventListener('DOMContentLoaded', displayTopics); 
