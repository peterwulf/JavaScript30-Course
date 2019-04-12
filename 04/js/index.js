 // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1
    // Some data we can work with
    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
	// Loop over each inventor in the array and check what year they were born in. 
	const dateOfBirth = inventors.filter(function(inventor) {
		if(inventor.year >= 1500 && inventor.year < 1600) {
			return true;
		}
	})
	//console.log(dateOfBirth);
	// This works fine. However console.table provides a much nicer and cleaner layout.
	console.table(dateOfBirth);

    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
	const names = inventors.map(function(inventor) {
		return inventor.first + ' ' + inventor.last
		// Map will always return the same number of items you feed it	
	});
	console.table(names);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
	const orderdByBirthDate = inventors.sort(function(firstPerson, secondPerson) {
		// Sort returns 2 items, one being 1 and the other -1, thus all inventors get sorted. 
		if (firstPerson.year > secondPerson.year) {
			return 1;
		} else {
			return -1;
		}
	});
	console.table(orderdByBirthDate);

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
	const howOldDidTheyGetTogther = inventors.reduce(function(total, inventors) {
		return total + (inventors.passed - inventors.year);
	},0);
	console.log('All inventors got ' + howOldDidTheyGetTogther + ' years old.');

    // 5. Sort the inventors by years lived
	const oldestInventor = inventors.sort(function(a,b) {
		
		const lastguy = a.passed - a.year;
		const nextguy = b.passed - b.year;
		
		if (lastguy > nextguy) {
			return -1;	
		} else {
			return 1;
		}
	});
console.table(oldestInventor);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// 	let boulewards = document.querySelectorAll('.mw-category a');
// 	// We turn a node list into an array here. The reason for that is so that we can sort it and have more methods at our disposal to manipulate it. 
// 	let links = Array.from(boulewards);
// 	console.log(links);

// 	let de = links.map(function(link) {
// 		return	link.textContent;
// 	});
// 	console.log(de);
// 	let something = de.filter(function(streetname) {
// 		return streetname.includes('de');
// 	});
// 	console.log(something);
	
	
		
		
    // 7. sort Exercise
    // Sort the people alphabetically by last name
	const alphabetically = people.sort(function(lastOne, firstOne) {
		const [aLast, aFirst] = lastOne.split(', ');
		const [bLast, bFirst] = firstOne.split(', ');
		
		if(aLast > bLast) {
			return 1;
		} else {
			return -1;
		}
	});
	console.log(alphabetically);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

	const transport = data.reduce(function(obj, item) {
		
		if(!obj[item]) {
			obj[item] = 0;	
		}
		
		obj[item]++;
		return obj;
	}, {});

	console.log(transport);