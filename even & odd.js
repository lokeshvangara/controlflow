showNumbers(10);


  function showNumbers(limit){
    for (let i=0; i<= limit; i++) {
      if (i % 2 ===0 ) console.log(i, 'even');
      else console.log(i, 'odd');
     // or we will write like this also
     
    //  const message = ( i% 2 === 0) ? 'even' : 'odd'
    //  console.log(i, message);
    }
  }
