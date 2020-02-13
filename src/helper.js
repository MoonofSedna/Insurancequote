//****Get difference of years ****//

export function yearDifference (year){
    return new Date().getFullYear() - year;
}


//****Calculate the total to pay according to the brand ****//


export function calculateBrand(brand){
    let increase;

    switch(brand){

        case 'European':
            increase = 1.30;
            break;
        
        case 'American':
            increase = 1.15;
            break;
        
        case 'Asian':
            increase = 1.05;
            break;

        default:
            break;
    }

    return increase;
}


//****Calculate the type of insurance****//

export function getPlan(plan){

    return(plan === 'Basic') ? 1.20 : 1.50;

    


}