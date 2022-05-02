const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(reverse = true) {
    this.reverse = !reverse;
  };

  encrypt(message, key) {
    if (!message | !key) throw new Error('Incorrect arguments!');
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let messageSpace = message.split(' ').join('').toUpperCase();
    let messageLength = messageSpace.length;
    let keyMessage = key.repeat(Math.ceil(messageLength / key.length)).slice(0, messageLength).toUpperCase();
    let resStr = '';

    for (let i = 0; i < messageLength; i++) {
        if (alphabet.indexOf(messageSpace[i]) === -1) {
            resStr+= messageSpace[i];
            continue;
        }
        let alphabetInd = (alphabet.indexOf(keyMessage[i]) + alphabet.indexOf(messageSpace[i])) % alphabet.length;
        resStr += alphabet[alphabetInd];
    };
    
    let spaceInd = [];
    let place = message.indexOf(' ');
    
    while(place != -1) {
        spaceInd.push(place);
        place = message.indexOf(' ', place + 1);
    };
    
    let resArr = resStr.split('');
    spaceInd.forEach(e => resArr.splice(e, 0, ' '));

    if (this.reverse) resArr.reverse().join(''); 

    let result = resArr.join('');

    return result;
  }

  decrypt(message, key) {
    if (!message | !key) throw new Error('Incorrect arguments!');
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let messageSpace = message.split(' ').join('').toUpperCase();
    let messageLength = messageSpace.length;
    let keyMessage = key.repeat(Math.ceil(messageLength / key.length)).slice(0, messageLength).toUpperCase();
    let resStr = '';

    for (let i = 0; i < messageLength; i++) {
        if (alphabet.indexOf(messageSpace[i]) === -1) {
            resStr+= messageSpace[i];
            continue;
        };

        let alphabetInd = (alphabet.indexOf(messageSpace[i]) + alphabet.length - alphabet.indexOf(keyMessage[i])) % alphabet.length;
        resStr += alphabet[alphabetInd];
    };
    
    let spaceInd = [];
    let place = message.indexOf(' ');
    
    while(place != -1) {
        spaceInd.push(place);
        place = message.indexOf(' ', place + 1);
    };
    
    let resArr = resStr.split('');
    spaceInd.forEach(e => resArr.splice(e, 0, ' '));

    if (this.reverse) resArr.reverse().join('');  
    
    let result = resArr.join('');

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
