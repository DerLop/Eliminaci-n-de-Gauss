function gauss(){
		var a, b, c, d, e, f, g, h, i, j, k, l;
		
		a =	Math.floor(document.getElementById('a').value);	
		b = Math.floor(document.getElementById('b').value);	
		c = Math.floor(document.getElementById('c').value)
		d = Math.floor(document.getElementById('d').value);
		e = Math.floor(document.getElementById('e').value);	
		f = Math.floor(document.getElementById('f').value); 
		g = Math.floor(document.getElementById('g').value);	
		h = Math.floor(document.getElementById('h').value);
		i = Math.floor(document.getElementById('i').value);	
		j = Math.floor(document.getElementById('j').value);	
		k = Math.floor(document.getElementById('k').value);	
		l = Math.floor(document.getElementById('l').value);
		
		var x;	
		var y;	
		var z;
		
		var mii= parseFloat(e/a);
		var miii= parseFloat(i/a);
		
		e=parseFloat(e-(mii*a));	
		f=parseFloat(f-(mii*b));	
		g=parseFloat(g-(mii*c));	
		h=parseFloat(h-(mii*d));
		i=parseFloat(i-(miii*a));	
		j=parseFloat(j-(miii*b));	
		k=parseFloat(k-(miii*c));	
		l=parseFloat(l-(miii*d));

		miii=parseFloat(j/f);

		j= parseFloat(j-(miii*f));	
		k=parseFloat(k-(miii*g));	
		l= parseFloat(l-(miii*h));

		z= parseFloat((l/k));
		y= parseFloat((h-(g*z))/f);
		x= parseFloat((d-(b*y)-(c*z))/a);
		
		document.getElementById('respuesta').innerHTML="El resultado es :"+" " +"X =" + " " + x + " "+ "," + " " + "Y =" +" " + y +" " + "," + " " +"Z=" +" " + z

}






