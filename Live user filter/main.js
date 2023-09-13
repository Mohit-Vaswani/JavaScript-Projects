const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

getData();

filter.addEventListener('input', filterData);

async function getData() {
  try {
    const res = await fetch('https://randomuser.me/api/?results=50');
    const data = await res.json();
    result.innerHTML = '';

    data.results.forEach((user) => {
      const li = document.createElement('li');
      listItems.push(li);

      li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
          <h4>${user.name.first} ${user.name.last}</h4>
          <p>${user.location.city}, ${user.location.country}</p>
        </div>
      `;

      result.appendChild(li);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


function filterData(e) {
    const searchTerm = e.target.value.toLowerCase();
    listItems.forEach((item) => {
      const itemText = item.innerText.toLowerCase();
      item.classList.toggle('hide', !itemText.includes(searchTerm));
    });
  }