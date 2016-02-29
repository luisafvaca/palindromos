var palindromos = 'Amo la pacifica paloma';

function palVerify(str){
  str = str.replace(/\s/g, '').toLowerCase();
  var b = str.split('');
      b = b.reverse().join('');
  return str === b;
};

palVerify(palindromos);
