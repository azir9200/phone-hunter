const loadPhone = async (searchText) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json();
  const phones = data.data;
  console.log(phones);
  displayPhones(phones);
}
const displayPhones = phones => {
  console.log(phones);
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.textContent = ' ';

  const showAllContainer = document.getElementById('show-all-container');
  if (phones.length > 12 && !isShowAll) {


  }

  phones = phones.slice(0, 12);

  console.log(phones.length);

  phones.forEach(phone => {
    const phoneCard = document.createElement('div');
    phoneCard.classList = 'card bg-blue-300 text-center p-4 '

    phoneCard.innerHTML = `
    <figure><img src="${phone.image}" alt="Shoes" /></figure>
    <div class="card-body  justify-center">
        <h2 class="card-title">Mobile</h2>
        <p>Very good Deals</p>
       <button class="btn btn-primary">show Details</button>
       </div>
      </div> 
    `;
    phoneContainer.appendChild(phoneCard);
    console.log(phone);
  });
};

const handleSearch = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText);
}

const handleShowDetails = async (id) => {
  console.log('show details');
}

const handleSearch2 = () => {
  const searchField = document.getElementById('search-field2');
  const searchText = searchField.value;
  loadPhone(searchText);
}

loadPhone();