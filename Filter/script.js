document.querySelector('#all').onclick = () => {
    document.querySelectorAll('.sweet-card').forEach(x=>{x.style.display = 'block'})
}
document.querySelector('#cakes').onclick = () => {
    filter('Cake Item');
}
document.querySelector('#cupcakes').onclick = () => {
    filter('Cupcake Item');
}
document.querySelector('#sweet-items').onclick = () => {
    filter('Sweet Item');
}
document.querySelector('#doughnuts').onclick = () => {
    filter('Doughnut Item');
}
document.querySelector('input').onkeyup = () => {
    filter(document.querySelector('input').value)
}
function filter (food){
    document.querySelectorAll('.sweet-card').forEach(x=>{
        if(x.querySelector('.name').innerHTML.toLowerCase().includes(food.toLowerCase())){
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }
    })
}