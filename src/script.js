async function loadResources() {
    const response = await fetch('../data/resources.json');
    const data = await response.json();
    displayResources(data);

    document.getElementById('search').addEventListener('input', function () {
        const query = this.value.toLowerCase();
        const filtered = data.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.title.toLowerCase().startsWith(query)
        );
        displayResources(filtered);
    });
    document.getElementById('category').addEventListener('change', function () {
        const selected = this.value;

        const filtered = selected === "all"
            ? data
            : data.filter(item => item.category === selected);

        displayResources(filtered);
    });
}

function displayResources(resources) {
    const list = document.getElementById('resourceList');
    list.innerHTML = '';

    resources.forEach(resource => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${resource.link}" target="_blank">${resource.title}</a>`;
        list.appendChild(li);
    });
}
function setLanguage(lang) {
    const title = document.querySelector('h1');

    if (lang === 'lg') {
        title.innerText = "Ekitabo ky'Obusomi";
    } else {
        title.innerText = "BOSC Community Library";
    }
}
loadResources();
