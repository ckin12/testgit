function in_so(a, b) {
    let dem_chan = 0;
    let dem_le = 0;
    for(let i=a; i<=b;i++) {
     if(i%2 ==0) {
        dem_chan++;
     } else{
        dem_le++;
     }
    }
    console.log(dem_chan);
    console.log(dem_le);

  }
in_so(2, 10);