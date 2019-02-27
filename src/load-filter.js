export function loadFilter(callback){

    const filterForm = document.getElementById('filter-form');
    
    filterForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(filterForm);
        const hornInput = formData.get('horn-input');
        const keywordInput = formData.get('keyword-input');

        let horns = 0;
        if(hornInput) {
            horns = parseInt(hornInput);
        }

        const filtered = {
            keyword: keywordInput,
            horns: horns 
        };
        callback(filtered);
    });
}