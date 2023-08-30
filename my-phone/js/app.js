const loadPhone = async (searchText) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json();
  const phones = data.data;
  //console.log(data);
  displayPhones(phones);
}

const displayPhones = phones => {
  //step 1 create container
  const phoneContainer = document.getElementById('phone-container');

  // clear phone container card before adding new search.
  phoneContainer.textContent = " ";

  // display only 10 item
  phones = phones.slice(0.12);
  console.log(phones.legth);

  phones.forEach(phone => {
    console.log(phones);

    //2  create a div.
    const phoneCard = document.createElement('div');
    phoneCard.classList = 'card  w-96 bg-grey-100 shadow-xl';
    // 3 set inner html
    phoneCard.innerHTML = `  
     <figure><img src="${phone.image}" alt="Shoes" /></figure>
     <div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
    <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
       `;
    //4 appendchild

    phoneContainer.appendChild(phoneCard);
  })

}
// handle search button

const handleSearch = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText);
}

const handlSea = () => {
  const searchField = document.getElementById('search-field2');
  const searchText = searchField.value;
  loadPhone(searchText);
}
// loadPhone();