var dayOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemeber', 'December'];

var d = new Date;

function amPM() {
	if (d.getHours() > 12) {
		return "PM";
	} else {
		return "AM"
	}
}

function dblDgtHours() {
	if (d.getHours() > 9) {
		return '' + (d.getHours());
	}
	else {
		return '0' + (d.getHours());
	}
}

function dblDgtMinutes() {
	if (d.getMinutes() > 9) {
		return '' + (d.getMinutes());
	} else {
		return '0' + (d.getMinutes());
	}
}

function dblDigitSeconds() {
	if (d.getSeconds() > 9) {
		return '' + (d.getSeconds());
	} else {
		return '0' + (d.getSeconds());
	}
}

function dblDigitMonth() {
	if (d.getMonth() > 10) {
		return (d.getMonth() + 1).toString();
	} else {
		return '0' + (d.getMonth() + 1).toString();
	}
}


var library = (function () {
	return {
		TimeStamp: (function () {
			return {
				UnixTimestamp: function () {
					return '' + (Math.floor(Date.now() / 1000));
				},
				UnixMillisecond: function () {
					return Date.now();
				}
			}
		})(),
		Local: (function () {
			return {
				Time: (function () {
					return {
						WithSeconds: function () {


							if (d.getHours() > 12) {
								return '' + (d.getHours() - 12 + ':' + dblDgtMinutes() + ':' + dblDigitSeconds() + ' ' + amPM());
							} else {
								return '' + (d.getHours() + ':' + dblDgtMinutes() + ':' + dblDigitSeconds() + ' ' + amPM());
							}

						},
						WithOutSeconds: function () {
							if (d.getHours() > 12) {
								return '' + (d.getHours() - 12 + ':' + dblDgtMinutes() + ' ' + amPM());
							} else {
								return '' + (d.getHours() + ':' + dblDgtMinutes() + ' ' + amPM());
							}

						}
					}
				})(),
				MDY: (function () {
					return {
						Numeral: function () {
							return d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();
						},
						Name: function () {
							return month[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
						}
					}
				})(),
			}
		})(),
		Second: (function () {
			return {
				Second: function () {
					var sec = new Date;
					return '' + sec.getSeconds();
				},
				DblDigit: function () {
					var sec = new Date;
					if (sec.getSeconds() < 10) {
						return '0' + sec.getSeconds();
					} else {
						return '' + (sec.getSeconds());
					}
				}
			}
		})(),
		Minute: (function () {
			return {
				Minute: function () {
					return '' + d.getMinutes();
				},
				DblDigit: function () {
					if (d.getMinutes() < 10) {
						return '0' + d.getMinutes();
					} else {
						return '' + d.getMinutes();
					}
				}
			}
		})(),
		Hour: (function () {
			return {
				TwentyFourHour: function () {
					return '' + d.getHours();
				},
				TwelveHour: function () {
					let hours = new Date().getHours();
					hours %= 12
					if (hours === 0) {
						hours = 12;
					}
					return hours.toString();
				},
				AMPM: (function () {
					return {
						UpperCase: function () {
							if (d.getHours() > 11) {
								return 'PM';
							} else {
								return 'AM';
							}
						},
						LowerCase: function () {
							if (d.getHours() > 11) {
								return 'pm';
							} else {
								return 'am';
							}
						}
					}
				})()
			}
		})(),
		Week: (function () {
			return {
				DayOfWeek: function () {
					return '' + (dayOfTheWeek[d.getDay()]);

				},
				AbrDayOfWeek: function () {
					var dayTwoAbbr = (dayOfTheWeek[d.getDay()]);
					return dayTwoAbbr.substring(0, 3);
				},
				FirstTwoOfWeek: function () {
					var dayTwoAbbr = (dayOfTheWeek[d.getDay()]);
					return dayTwoAbbr.substring(0, 2);
				},
				WeekOfYear: function () {
					var first = new Date(d.getFullYear(), 0, 1);
					var theDay = Math.round(((d - first) / 1000 / 60 / 60 / 24) + .5, 0).toString();
					return Math.ceil(theDay / 7).toString();
				}
			}
		})(),
		Month: (function () {
			return {
				DateOfMonth: (function () {
					return {
						Numeral: function () {
							return '' + (d.getDate());
						},
						Ordinal: function () {
							if (d.getDate() === 1) {
								return d.getDate() + 'st';
							} else if (d.getDate() === 2) {
								return d.getDate() + 'nd';
							} else if (d.getDate() === 3) {
								return d.getDate() + 'rd';
							} else if (d.getDate() > 3) {
								return d.getDate() + 'th';
							}

						},
						DateDblDigit: function () {
							if (d.getDate() < 10) {
								return '0' + d.getDate();
							} else {
								return '' + (d.getDate());
							}
						}
					}
				})(),
				MonthNumber: function () {
					return '' + (d.getMonth() + 1);
				},
				MonthNumberDblDigit: function () {
					if (d.getMonth() < 10)
						return '0' + (d.getMonth() + 1);
					else {
						return '' + (d.getMonth() + 1);
					}
				},
				AbrOfCurrentMonth: function () {
					var monthAbbr = month[d.getMonth()];
					return monthAbbr.substring(0, 3);

				},
				CurrentMonth: function () {
					var currentMonth = month[d.getMonth()];
					return currentMonth
				}
			}
		})(),
		Year: (function () {
			return {
				DayOfYear: (function () {
					return {
						Numeral: function () {
							var first = new Date(d.getFullYear(), 0, 1);
							var theDay = Math.round(((d - first) / 1000 / 60 / 60 / 24) + .5, 0).toString();
							return theDay;
						},
						Ordinal: function () {
							var first = new Date(d.getFullYear(), 0, 1);
							var theDay = Math.round(((d - first) / 1000 / 60 / 60 / 24) + .5, 0).toString();
							function nth(d) {
								if (theDay > 3 && theDay < 21) return  theDay +'th';
								switch (theDay % 10) {
									case 1: return theDay +"st";
									case 2: return theDay +"nd";
									case 3: return theDay + "rd";
									default: return theDay +"th";
								}
							}
							 return nth(d);
						}
					}
				})(),
				YearFull: function () {
					return '' + (d.getFullYear());
				},
				YearAbr: function () {
					return '' + (d.getFullYear() % 100);
				}
			}
		})(),
		Defaults: function () {
			return '' + (d.getFullYear() + "-" + dblDigitMonth() + "-" + d.getDate() + "T" + dblDgtHours() + ":" + dblDgtMinutes() + ":" + dblDigitSeconds());
		}
	}
})();