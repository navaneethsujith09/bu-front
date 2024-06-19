const sponsoringPartnersButton = document.getElementById("SponsoringPartners");
const eventPartnersButton = document.getElementById("EventPartners");
const rafflePartnersButton = document.getElementById("RafflePartners");
const typeOfOption = document.getElementById("PartnerWithUs");
const displayArea = document.getElementById("displayArea");
const partnerFormbtn = document.getElementById("partnerFormbtn");
const sponsoringPartnersText = document.getElementById(
  "sponsoringPartnersText"
);
const eventPartnersText = document.getElementById("eventPartnersText");
const rafflePartnersText = document.getElementById("rafflePartnersText");
const partnerFormDiv = document.getElementById("partnerFormDiv");
const placeholderText = document.getElementById("placeholderText");
const partnerFormDivRight = document.getElementById("partnerFormDivRight");
const sponsoringPartners = function () {
  typeOfOption.innerHTML = "Sponsoring Partners";
  sponsoringPartnersText.style.display = "flex";
  eventPartnersText.style.display = "none";
  rafflePartnersText.style.display = "none";
  placeholderText.style.display = "none";
  partnerFormDiv.style.display = "none";
  sponsoringPartnersButton.style.backgroundColor = "#ef7f1a";
  sponsoringPartnersButton.style.borderColor = "#ef7f1a";
  eventPartnersButton.style.background = "none";
  eventPartnersButton.style.borderColor = "white";
  rafflePartnersButton.style.background = "none";
  rafflePartnersButton.style.borderColor = "white";
};
const eventPartners = function () {
  typeOfOption.innerHTML = "Event Partners";
  eventPartnersText.style.display = "flex";
  sponsoringPartnersText.style.display = "none";
  rafflePartnersText.style.display = "none";
  placeholderText.style.display = "none";
  partnerFormDiv.style.display = "none";
  eventPartnersButton.style.backgroundColor = "#ef7f1a";
  eventPartnersButton.style.borderColor = "#ef7f1a";
  sponsoringPartnersButton.style.background = "none";
  sponsoringPartnersButton.style.borderColor = "white";
  rafflePartnersButton.style.background = "none";
  rafflePartnersButton.style.borderColor = "white";
};
const rafflePartners = function () {
  typeOfOption.innerHTML = "Raffle Partners";
  rafflePartnersText.style.display = "flex";
  sponsoringPartnersText.style.display = "none";
  eventPartnersText.style.display = "none";
  placeholderText.style.display = "none";
  partnerFormDiv.style.display = "none";
  rafflePartnersButton.style.backgroundColor = "#ef7f1a";
  rafflePartnersButton.style.borderColor = "#ef7f1a";
  sponsoringPartnersButton.style.background = "none";
  sponsoringPartnersButton.style.borderColor = "white";
  eventPartnersButton.style.background = "none";
  eventPartnersButton.style.borderColor = "white";
};
const goToPartnerForm = function () {
  typeOfOption.innerHTML = "Partner With Us";
  rafflePartnersText.style.display = "none";
  sponsoringPartnersText.style.display = "none";
  eventPartnersText.style.display = "none";
  placeholderText.style.display = "none";
  partnerFormDiv.style.display = "flex";
  rafflePartnersButton.style.background = "none";
  rafflePartnersButton.style.borderColor = "white";
  sponsoringPartnersButton.style.background = "none";
  sponsoringPartnersButton.style.borderColor = "white";
  eventPartnersButton.style.background = "none";
  eventPartnersButton.style.borderColor = "white";
};
const optionPicked = function () {
  if (document.getElementById("typeOfPlanInput").value == "12 months") {
    partnerFormDivRight.innerHTML = `<div id="partnerFormOptionULDiv">
                      <ul id="partnerFormOptionUL">
                      <li>3 social media posts</li>
                      <li>24 email campaign footers</li>
                      <li>$4YT sponsor island</li>
                      <li>Logo in website footer</li>
                      </ul>
                    </div>
                    <div id="optionPriceDiv">
                      <p id="optionPrice"><b>12 months</b>/$5000</p>
                    </div>
                    <div id="partnerFormBtnDiv">
                      <button id="partnerFormSubmitBtn">Submit</button>                   
                    </div>`;
  } else if (document.getElementById("typeOfPlanInput").value == "6 months") {
    partnerFormDivRight.innerHTML = `<div id="partnerFormOptionULDiv">
                      <ul id="partnerFormOptionUL">
                      <li>2 social media posts</li>
                      <li>6 email campaign footers</li>
                      <li>Logo in website footer</li>
                      </ul>
                    </div>
                    <div id="optionPriceDiv">
                      <p id="optionPrice"><b>6 months</b>/$2700</p>
                    </div>
                    <div id="partnerFormBtnDiv">
                      <button id="partnerFormSubmitBtn">Submit</button>                   
                    </div>`;
  } else if (document.getElementById("typeOfPlanInput").value == "Other") {
    partnerFormDivRight.innerHTML = `<div id="partnerFormOptionOther">
                      Don't like options you see?
                    </div>
                    <div id="optionPriceDiv" style="text-align:center; font-weight:bold">
                      <p id="optionPrice">Contact us to find a custom option to fit your company!</p>
                    </div>
                    <div id="partnerFormBtnDiv">
                      <button id="partnerFormSubmitBtn">Submit</button>                   
                    </div>`;
  } else {
    partnerFormDivRight.innerHTML = "";
  }
};
