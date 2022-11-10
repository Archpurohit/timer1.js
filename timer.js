for(i = 0; i <= 18; i++){
  if (i.lenght = 0){
    console.log(" ")

    } else if ( i < 0){
      console.log(' ')

    } else if( i % 5 ===0){
  process.stdout.write('\x07');

// }     else if (i == 3 || 9){
//     process.stdout.write('\x07')
    }     else if (i == 3 && 9){
      process.stdout.write('\x07')

  }   else  {
  console.log(i);
  }
};
