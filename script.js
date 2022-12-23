// function rand(n, m) {
//    return m + Math.floor((n - m +1)*Math.random());
// }

// function randFace () {
//     return ['crown', 'anchor', 'heart', 'spade', 'club', 'diamond']
//     [rand(0, 5)];
// }

// let funds = 50;
// let round = 0;

// while (funds > 1 && funds < 100) {
//     round++;
//     console.log(`round ${round}:`);
//     console.log(`\tstarting funds: ${funds}p`);

//     let bets = { crown: 0, anchor: 0, heart: 0,
//     spade: 0, club: 0, diamond: 0 }; 
// let totalBet = rand(1, funds);
// if(totalBet === 7) {
//     totalBet = funds;
//     bets.heart = totalBet;
// } else {
//     let remaining = totalBet;
//     do {
//         let bet = rand(1, remaining);
//         let face = randFace();
//         bets[face] = bets[face] + bet;
//         remaining = remaining - bet;
//     } while(remaining > 0);
// }

// funds = funds - totalBet;
// console.log(`\tbets:` +
// Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') + 
// ` (total: ${totalBet} pence)`);

// const hand = [];
// for( let roll = 0; roll < 3; roll++) {
//     hand.push(randFace());
// }

// console.log(`\thand: ${hand.join(', ')}`);



// let winnings = 0;
// for(let die=0; die < hand.length; die++) {
//     let face = hand[die];
//     if(bets[face] > 0) winnings = winnings + bets[face];
// }

// funds = funds + winnings;
// console.log(`\twinnings: ${winnings}`);

// }

// console.log(`\tending funs: ${funds}`);



// function myFirstApp(name, age) {
//     alert(`Hejka, mam na imie ${name} i to jest moj pierwszy program!`);

//     function showSkills() {
//         let myskill = [],
//         skills = [' html', ' css', ' js'];
//         let i = 0;
//         do {
//             myskill[i] = skills[i];
//             i++;
//         }
//         while (i < skills.length);
//         alert ('znam sie na' + myskill);
//     }
//     showSkills();

//     function checkAge() {
//          alert(`twoj wiek ${age}`);
//          if (age > 18) {
//              alert('masz wszelkie szansy stac FrontEnd dev!');
//          } else {
//              alert('jak fajnie, ze pomyslales o tym :)');
//          }
//     }
// checkAge();

// function calcPow(num) {
//     num = age * age;
//     return num;
// }
// console.log(calcPow());
// }
// myFirstApp('Nastassia', 19);




let myName = 5;

console.log(myName);