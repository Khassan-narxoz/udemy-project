const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('city');
const regionSelect = document.getElementById('region');

const data = {
    Kazakhstan: {
        Astana: ['Yesil District', 'Almaty District', 'Saryarka District', 'Yessil District'],
        Almaty: ['Medeu District', 'Bostandyk District', 'Alatau District', 'Auezov District'],
        Karaganda: ['Lenin District', 'Kazybek Bi District', 'Shakhtinsk', 'Sary-Arka District']
    },
    Uzbekistan: {
        Tashkent: ['Yashnabad', 'Mirabad', 'Yakkasaray', 'Shaykhontohur'],
        Samarkand: ['Samarkand Region 1', 'Samarkand Region 2', 'Samarkand Region 3'],
        Bukhara: ['Bukhara Region 1', 'Bukhara Region 2', 'Bukhara Region 3']
    },
    Japan: {
        Tokyo: ['Chiyoda', 'Shibuya', 'Shinjuku', 'Minato', 'Bunkyo', 'Taito'],
        Osaka: ['Kita', 'Chuo', 'Tennoji', 'Fukushima', 'Naniwa', 'Yodogawa'],
        Kyoto: ['Higashiyama', 'Shimogyo', 'Fushimi', 'Sakyo', 'Ukyo', 'Yamashina']
    },
    India: {
        Delhi: ['North Delhi', 'South Delhi', 'East Delhi', 'West Delhi'],
        Mumbai: ['South Mumbai', 'North Mumbai', 'Central Mumbai', 'Western Suburbs', 'Harbour Suburbs'],
        Bangalore: ['East Bangalore', 'West Bangalore', 'North Bangalore', 'South Bangalore']
    },
    Nepal: {
        Kathmandu: ['Kathmandu', 'Lalitpur', 'Bhaktapur', 'Kirtipur'],
        Pokhara: ['Pokhara', 'Lekhnath', 'Kaski', 'Syangja'],
        Biratnagar: ['Biratnagar', 'Dharan', 'Itahari', 'Inaruwa']
    },

};

function populateOptions(selectElement, options) {

    selectElement.innerHTML = '';

    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.textContent = option;
        optionElement.value = option;
        selectElement.appendChild(optionElement);
    });
}

countrySelect.addEventListener('change', function () {
    const selectedCountry = this.value;
    const cities = Object.keys(data[selectedCountry]);
    populateOptions(citySelect, cities);
});

citySelect.addEventListener('change', function () {
    const selectedCountry = countrySelect.value;
    const selectedCity = this.value;
    const regions = data[selectedCountry][selectedCity];
    populateOptions(regionSelect, regions);
});