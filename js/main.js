function initMap() {
  const myLatLng = { lat: 22.5726, lng: 88.3639 };
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: myLatLng,
  });
  const marker = new google.maps.Marker({
    position: myLatLng,
    map,
  });
}

// set navbar opacity
window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth scrolling
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;
    $('html,body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
