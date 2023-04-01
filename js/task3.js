const container = document.getElementById('container')
const colors = ['red', 'blue', 'green', 'orange', 'aqua']
for (let i = 0; i < 5; i++) {
    const element = document.createElement('div');
    element.className = 'element';
    element.innerText = `Element ${i + 1}`;
    for (let color = 0; color < 5; color++)
        element.style.color = colors[i]
    container.append(element);
}
console.log(container)