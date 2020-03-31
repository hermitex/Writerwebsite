const offerActive = document.querySelector("#offer .offer-active");
const offerClosed = document.querySelector("#offer .offer-closed");
const daysRemaining = document.querySelector("#offer #countdown");

{
  // const hoursRemaining = document.querySelector("#offer .hours");
  // const minutesRemaining = document.querySelector("#offer .minutes");
  // const secondsRemaining = document.querySelector("#offer .seconds");
}

const offer = "$7.5";
const normal = "$10";

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
  <button class = "offer-active btn btn-success col" >${offer}</button> 
  <button class = "offer-active btn btn-danger col">${normal}</button> 
  </div>
  <p class="card-text text-light">
  The Offer ends in:
</p>
  <div>${addZero(hour)}<span>Hours</span></div>
  <div>${addZero(minutes)}<span>Minutes</span></div>
  <div>${addZero(seconds)}<span>Seconds</span></div>
  <div class="row">
  <div class="col">
    <a  href="contact.html" class="offer-active btn btn-success">Order Now</a>
    <a href="services.html" class="offer-closed btn btn-danger">See our Services</a>
  </div>
</div>

`;

  if (seconds === 30 && offerActive.classList !== "cross-through") {
    offerActive.classList.add("cross-through");
    offerClosed.classList.remove("cross-through");
  }
  if (seconds < 30) {
    offerClosed.classList.add("cross-through");
    offerActive.reomove("cross-through");
  }
}, 1000);
