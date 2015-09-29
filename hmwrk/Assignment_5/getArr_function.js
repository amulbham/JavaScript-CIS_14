
	/*
		Amul Bham
		Sept 29st, 2015
		Purpose: Create a function that creates an array, calculates its values,
		and then display the arrays in table format
	*/
	
	function calcArr(nHours,payChk,payHr,tax,netPy,payRate){
			//Initialize Variables using separate for loops for each array
				/*Use a forloop to intialize the number of hours, in addition
			used to intialize the payrate depending on which time segment it is*/
				/*Intialize the paycheck arrays, utilized
				if statements to guide program to compute
			double and triple time given the circumstances are met*/	
			for(var count = 0; count<73; count++){
				nHours[count] = count;
				if (count<20){
					var regTim = payRate * count;
					payChk[count] = regTim;
						//Nested if used to distinguish between 0 and the 1-19
						if(count ==0){
							payHr[count] = 0;
						}else{
							payHr[count] = payRate;}
				}else if(count>=20 & count<40 ){
					var dblTim=20*payRate+(count-20)*2*payRate;
					payChk[count] = dblTim;
					payHr[count] = (payRate *2).toFixed(2);
				}else{
					var trpTim=20*payRate+(20)*2*payRate+(count-40)*3*payRate;
					payChk[count] = trpTim;
					payHr[count] = (payRate*3).toFixed(2);
					}	
				//In the same, loop, intialize taxes and net pay AFTER
				//the pay check has been determined. 	
				tax[count] = (.1 * payChk[count]).toFixed(2);
				netPy[count] = (payChk[count] - tax[count]).toFixed(2);
				}
		
		}
	
	function getArr(nHours,payChk,payHr,tax,netPy) {
			//Use 1 for loop to display the arrays and format data	
			for(var hours=0;hours<73;hours++){
				document.write("<tr>");
				
				  document.write("<td align = 'center'>"+nHours[hours]+"</td>");
				  document.write("<td colspan='8' align ='center'>" + "$"+payChk[hours].toFixed(2)+"</td>");
				  document.write("<td align = 'center'>"+"$ "+payHr[hours]+"</td>");
				  document.write("<td colspan='10'>" + "$" +tax[hours]+ "</td>");
				  document.write("<td colspan='12'>" + "$" +netPy[hours]+ "</td>");
				  
				document.write("</tr>");
			}
		
	}
	
	
	
	