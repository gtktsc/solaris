for(var i =1;i<7;i++){
    poziomy[i]= new Planeta(5,i*50,30,30,0.1,0.01);
	if(Number(i)<=statekGracza.odblokowanePoziomy){
		poziomy[i].widocznosc=true;
				console.log("aAsdads")
	} else {
		poziomy[i].widocznosc=false;

	}
};

function menu() {

	if(ekran.menu){
		c.fillStyle = "black";
		ekran.pauza=false;
		fizyka.odswiezEkranMenu();
		if(fizyka.klikniecie(mysz,S) && (ekran.mysz=="tlo" ||ekran.mysz=="budowanie"  )){
			ekran.mysz="budowanie";
			c.font = "30px Arial";
			c.fillText("Ulepszenie",S.x-70,S.y-35);
			console.log("aasdasd",i);
		} else {
			ekran.mysz="tlo";
		}

			for (i in poziomy) {
				
				if(ekran.mysz==="tlo" || ekran.mysz==="poziomy"){
					if(fizyka.klikniecie(mysz,poziomy[i]) && poziomy[i].r<30){
						poziomy[i].r=poziomy[i].r+1;
						console.log("poziom",i);
					} else if(fizyka.klikniecie(mysz,poziomy[i]) && poziomy[i].r===30){
						c.font = "30px Arial";
						c.fillText("Poziom"+" "+i,poziomy[i].x-60,poziomy[i].y-35);
						console.log("aasdasd",i);
					}
				}
				if(!fizyka.klikniecie(mysz,poziomy[i]) && poziomy[i].r!==poziomy[i].rOld){
					poziomy[i].r=poziomy[i].r-1;
				}
			};
	};
};
var animacjaMenu = setInterval(menu, 33);