var dayOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemeber', 'December'];

var d = new Date;
var dd = d.getDate();
var mm = d.getMonth()+1; 
var yyyy = d.getFullYear();




var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
			return '' + (Math.floor(Date.now()/1000));
		},
		UnixMillisecond: function(){
			return Date.now();
		}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){},
	   	    WithOutSeconds: function() {}
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){},
			Name: function(){}
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){
				var sec = new Date;
				return ''+ sec.getSeconds();
			},
			DblDigit: function(){
				var sec = new Date;
				if(sec.getSeconds() < 10){
					return'0'+ sec.getSeconds();
				} else {
					return '' + (sec.getSeconds());
				}
			}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
				return ''+ d.getMinutes();
			},
			DblDigit: function(){
				if(d.getMinutes() < 10){
					return '0'+d.getMinutes();
				}else {
					return ''+d.getMinutes();
				}
			}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {
				return ''+ d.getHours();
			},
			TwelveHour: function() {
				if (d.getHours() >= 13){
					return '' + (d.getHours() - 12);
				} else {
					return '' + (d.getHours());
				}
			},
			AMPM: (function() {
				return {
					UpperCase: function(){
						if(d.getHours() > 12){
							return 'PM';
						} else {
							return 'AM';
						}
					},
					LowerCase: function(){
						if(d.getHours() > 12){
							return 'pm';
						} else {
							return 'am';
						}
					}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
				return '' + (dayOfTheWeek[d.getDay()]);

			},
			AbrDayOfWeek: function(){
				var dayTwoAbbr = (dayOfTheWeek[d.getDay()]);
				return dayTwoAbbr.substring(0,3);
			},
			FirstTwoOfWeek: function(){
				var dayTwoAbbr = (dayOfTheWeek[d.getDay()]);
				return dayTwoAbbr.substring(0,2);
			},
			WeekOfYear: function(){}
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
						return '' + (d.getDate());
					},
					Ordinal: function(){
						if (d.getDate() === 1){
							return d.getDate() + 'st';
						} else if(d.getDate() === 2){
							return d.getDate() + 'nd';
						} else if(d.getDate() === 3){
							return d.getDate() + 'rd';
						} else if (d.getDate() > 3){
							return d.getDate() + 'th';
						}

					},
					DateDblDigit: function(){
						if (d.getDate() < 10){
							return '0' + d.getDate();
						} else {
							return '' + (d.getDate());
						}
					}
				}
			})(),
			MonthNumber: function(){
				return ''+(d.getMonth() + 1);
			},
			MonthNumberDblDigit: function(){
				if(d.getMonth() < 10)
				return '0' +(d.getMonth() + 1 );
				else {
					return ''+(d.getMonth()+1);
				}
			},
			AbrOfCurrentMonth: function(){
				var monthAbbr = month[d.getMonth()];
				return monthAbbr.substring (0,3);

			},
			CurrentMonth: function(){
				var currentMonth = month[d.getMonth()];
				return currentMonth
			}
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
				},
					Ordinal: function(){}
				}
			})(),
			YearFull: function(){
				return '' + (d.getFullYear());
			},
			YearAbr: function(){
				return '' + (d.getFullYear() % 100);
			}
		}
	})(),
	Defaults: function(){
		return Date.now()
	}
  }
})();