// BASICS
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// MODALE
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

var openBtns = document.getElementsByClassName("openBtn");
for (var i = 0; i < openBtns.length; i++) {
  openBtns[i].addEventListener("click", function() {
    var iframeSrc = this.getAttribute("data-src");
    loadModalWithIframe(iframeSrc);
  });
}

function loadModalWithIframe(iframeSrc) {
  var iframe = document.querySelector("#myModal iframe");
  iframe.src = iframeSrc;
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// FILTRI
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.card');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                const filterValue = this.textContent.trim().toLowerCase();
                
                // Nascondi tutti gli elementi
                portfolioItems.forEach(item => {
                    item.style.display = 'none';
                });

                // Mostra solo gli elementi che corrispondono alla categoria selezionata
                if (filterValue === 'all') {
                    portfolioItems.forEach(item => {
                        item.style.display = 'block';
                    });
                } else {
                    const filteredItems = document.querySelectorAll(`.portfolio-item.${filterValue}`);
                    filteredItems.forEach(item => {
                        item.style.display = 'block';
                    });
                }
            });
        });
});







