const daysRemaining = document.querySelector("#offer #countdown");

{
  // const hoursRemaining = document.querySelector("#offer .hours");
  // const minutesRemaining = document.querySelector("#offer .minutes");
  // const secondsRemaining = document.querySelector("#offer .seconds");
}

const offer = "$7.50";
const normal = "$10.00";

const today = new Date();

const addZero = num => {
  if (parseInt(num) < 10) {
    num = num + "";
    num = "0" + num;
  }
  return num;
};

const getTime = setInterval(() => {
  let isOfferClosed = false;
  const today = new Date();
  const hour = 24 - today.getHours();
  const minutes = 60 - today.getMinutes();
  const seconds = 60 - today.getSeconds();
  console.log(daysRemaining);
  daysRemaining.innerHTML = `	

  <div class = "row">
  <button class = "offer-active btn btn-success col" >${offer} per pager</button> 
  <button class = "offer-closed btn btn-danger col">${normal} per pager</button> 
  </div>
  <p class="card-text text-light">
  The Offer ends in:
</p>
  <div>${addZero(hour)}<span>Hours</span></div>
  <div>${addZero(minutes)}<span>Minutes</span></div>
  <div>${addZero(seconds)}<span>Seconds</span></div>
  <div class="row">
  <div class="col">
    <a  href="contact.html" class=" btn btn-success">Order Now</a>
    <a href="services.html" class=" btn btn-danger">See our Services</a>
  </div>
</div>

`;

  const offerActive = document.querySelector("#offer .offer-active");
  const offerClosed = document.querySelector("#offer .offer-closed");

  if (getTime !== 0) {
    offerClosed.classList.add("cross-through");
    offerActive.classList.remove("cross-through");
  } else {
    offerClosed.classList.remove("cross-through");
    offerActive.add("cross-through");
  }
}, 1000);
