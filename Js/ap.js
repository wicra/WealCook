/* RECHERCHE*/

/*
const persons = [
    
    {name:'danil'},
    {name:'marie'},
    {name:'papa'},
    {name:'mama'},
    {name:'dior'}
    
];

		
const searchinput = document.getElementById('searchInput');

searchinput.addEventListener('keyup' , function(){
    const input = searchinput.value ;
    

    const result = persons.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));

    let suggestion = '' ;

    if(input !=''){
    
    result.forEach(resultItem => 
            suggestion += `
                <div class ="suggestion">${resultItem.name}</div>
            `
        )

    }
    document.getElementById('suggestions').innerHTML = suggestion ;

})
*/

/*HALLOWEN*/
/*
const switchThemeBtn = document.querySelector('.changeTheme')
let toggleTheme = 0;


switchThemeBtn.addEventListener('click', () => {

    if(toggleTheme === 0) {

        document.documentElement.style.setProperty('--ecriture', '#262626');
        document.documentElement.style.setProperty('--background', '#f1f1f1');
        document.documentElement.style.setProperty('--police', 'Rancho')
        toggleTheme++;

    } else {

        document.documentElement.style.setProperty('--ecriture', '#f1f1f1');
        document.documentElement.style.setProperty('--background', '#262626');
        document.documentElement.style.setProperty('--police', 'Bangers')
        toggleTheme--;

    }


})

*/

