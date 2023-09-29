
const countries = [
    {
      name: 'Afghanistan',
      region: 'Asia',
      currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
      capital: 'Kabul',
      population: 40218234,
      area: 652230
    },
    {
      name: 'Aland Islands',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Mariehamn',
      population: 28875,
      area: 1580
    },
    {
      name: 'Albania',
      region: 'Europe',
      currencies: [{ code: 'ALL', name: 'Albanian lek' }],
      capital: 'Tirana',
      population: 2837743,
      area: 28748
    },
    {
      name: 'Algeria',
      region: 'Africa',
      currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
      capital: 'Algiers',
      population: 44700000,
      area: 2381741
    },
    {
      name: 'American Samoa',
      region: 'Oceania',
      currencies: [{ code: 'USD', name: 'United States Dollar' }],
      capital: 'Pago Pago',
      population: 55197,
      area: 199
    },
    {
      name: 'Andorra',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Andorra la Vella',
      population: 77265,
      area: 468
    },
    {
      name: 'Angola',
      region: 'Africa',
      currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
      capital: 'Luanda',
      population: 32866268,
      area: 1246700
    },
    {
      name: 'Anguilla',
      region: 'Americas',
      currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
      capital: 'The Valley',
      population: 13452,
      area: 91
    },

    {
      name: 'Brazil',
      region: 'Americas',
      currencies: [{ code: 'R$', name: 'Real' }],
      capital: 'Brasília',
      population: 2000000,
      area: 1000000000,
    },

    {
      name: 'Russia',
      region: 'Europe',
      currencies: [{ code: 'R$', name: 'Russo' }],
      capital: 'Moscow',
      population: 2000000,
      area: 1000000000,
    }
  ];


  const getLargestCountriesByRegion = () => {
    const arrayRegions = [];
    countries.forEach((country) => {
        if (!arrayRegions.includes(country.region)) {
 
            arrayRegions.push(country.region);
        }
    });
    
    objRegions = {}

    arrayRegions.forEach((regionOfArray) => {
        const objRegionLargest = countries.reduce((acc, country) => {
            if (country.region === regionOfArray && acc.area < country.area) {
                acc = country;
            }
            return acc
        }, countries.find((country) => country.region === regionOfArray));

        objRegions[regionOfArray] = {
            name: objRegionLargest.name,
            area: objRegionLargest.area,

        };
    });

    return objRegions;

  };


  console.log(getLargestCountriesByRegion());

