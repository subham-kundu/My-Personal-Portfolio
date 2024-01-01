// -------------------------- Tab Links -----------------------------

var tablinks = document.getElementsByClassName("tabLinks");
        var tabcontents = document.getElementsByClassName("tabContents");
        
        function opentab (tabname){
            for(tablink of tablinks){
                tablink.classList.remove("activeLink");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("activeTab");
            }
            event.currentTarget.classList.add("activeLink");
            document.getElementById(tabname).classList.add("activeTab");
        }

// --------------------------- Side Menu ------------------------------

var sidemenu = document.getElementById("sideMenu")
        function openMenu() {
            sidemenu.style.right = "0"
        }
        function closeMenu() {
            sidemenu.style.right = "-200px"
        }

// ------------------------------ Submit Form -----------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbzPmAsGxIl4zUYBkrKPUtnRIw3spOi2wT2slNTnbX9BAISTGVUK5MIcWGp4aqDs4nfqsA/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Thank You! Your Message has been successfully sent."
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })