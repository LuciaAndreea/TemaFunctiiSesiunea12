//---- functie care primeste 2 parametri si returneaza suma acestora

/**
 * Functie care primeste 2 parametri si returneaza suma acestora
 * @param {number} a 
 * @param {number} b 
 * @returns number
 */

function computeSum(a , b){
    let sum = a +b;
    return sum;
}

console.log(computeSum(10,5));


//----functie care primeste un numar si returneaza true daca numarul este par si false daca este impar


/**
 * Functie care primeste un numar si returneaza true daca numarul este par si false daca este impar
 * @param {number} a 
 * @returns boolean
 */
function isEven(a){
    let estePar = true;
    if(a %2 !==0){
        estePar=false;
    }

    if(estePar){
        return true;
    }else{
        return false;
    }
}

console.log(isEven(7));

//----functie care primeste 2 STRINGURI si le concateneaza, returnand rezultatul

/**
 * Functie care primeste 2 STRINGURI si le concateneaza, returnand rezultatul
 * @param {string} country 
 * @param {string} city 
 * @returns string
 */
function concatenateStrings(country, city){
    //let concatenare = country+" "+city;
   // return concatenare;
    let concat = country.concat(" ",city);
    return concat;
}

console.log(concatenateStrings("Romania", "Galati"));

//----functie care primeste un sir si returneaza true daca este palindrom si false in caz contrar
 
/**
 * Functie care primeste un sir si returneaza true daca este palindrom si false in caz contrar
 * @param {string} cuvant 
 * @returns string
 */
function isPalindrome(cuvant){
    let cuvantInversat = "";
    for(let i = cuvant.length-1; i>=0;i--){
        cuvantInversat = cuvantInversat+cuvant[i];
    }

    if(cuvant ==cuvantInversat){
        return true;
    }else{
        return false;
    }
}

console.log(isPalindrome("apa"));


//---functie care returneaza un numar aleatoriu intreg intre 1 si 100

function generateRandomNumber(number){
    return Math.floor(Math.random() * number);
}

console.log(generateRandomNumber(100));

//----functie care primeste doua numere(baza si exponentul) si returneaza rezultatul ridicarii la putere

/**
 * Functie care primeste doua numere(baza si exponentul) si returneaza rezultatul ridicarii la putere
 * @param {number} x 
 * @param {number} y 
 * @returns number
 */
function raiseToPower(x, y){
     let pow = Math.pow(x,y);
     return pow;
}

console.log(raiseToPower(2,3));


//----functie care primeste un array de numere si returneaza media lor

function calculateAverage(numbers){
  const sum = numbers.reduce((accumulator , current) => accumulator + current, 0);
  return sum / numbers.length;
}

const array = [10,20,30,40,50];
console.log(calculateAverage(array));


//----functie care primeste un sir si returneaza sirul cu toate literele transformate in majuscula

/**
 * Functie care primeste un sir si returneaza sirul cu toate literele transformate in majuscula
 * @param {string} departament 
 * @returns string
 */
function transformToUpperCase(departament){
    let transform = departament.toUpperCase();
    return transform;
}

console.log(transformToUpperCase("avocat"));



//----functie care primeste un numar si returneaza true daca este prim si false in caz contrar

function isPrimeNumber(number){
    let ePrim = true;
    for(let i =2;i<number;i++){
        if(number % i ==0){
           ePrim = false;
           break;
        }
    }

    if(ePrim){
        return true;
    }else{
        return false;
    }
}

console.log(isPrimeNumber(29));

