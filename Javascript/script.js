  // Mobile Sidebar
  const menuIcon = document.getElementById('menu-icon');
  const sidebar = document.getElementById('sidebar');
  const body = document.body;
  menuIcon.addEventListener('click', function() {
      body.classList.toggle('menu-open');
  });

  // User account drop
  document.addEventListener('DOMContentLoaded', function () {
      var accountElement = document.querySelector('.Meaccount');
      var dropdownContent = document.querySelector('.dropdown-content');

      let timeoutId;

      accountElement.addEventListener('mouseenter', function () {
          clearTimeout(timeoutId);
          dropdownContent.style.display = 'block';
      });

      accountElement.addEventListener('mouseleave', function () {
          timeoutId = setTimeout(function () {
              dropdownContent.style.display = 'none';
          }, 10); 
      });

      dropdownContent.addEventListener('mouseenter', function () {
          clearTimeout(timeoutId);
      });

      dropdownContent.addEventListener('mouseleave', function () {
          timeoutId = setTimeout(function () {
              dropdownContent.style.display = 'none';
          }, 2000); 
      });
  });
  
  // Suplement İnfo Height
  document.addEventListener('DOMContentLoaded', function () {
      const downIcon = document.querySelector('.down-icon');
      const expandableContent = document.querySelector('.expandable-content');
      const closeBtn = document.querySelector('.close-btn');
    
      downIcon.addEventListener('click', function () {
        if (expandableContent.style.maxHeight) {
          expandableContent.style.maxHeight = null;
        } else {
          expandableContent.style.maxHeight = expandableContent.scrollHeight + 'px';
        }
      });
    
      closeBtn.addEventListener('click', function () {
        expandableContent.style.maxHeight = null;
      });
    });
    

  // MyCart Sidebar
  const cartLink=document.getElementById("mycartLink");
  const cartSidebar=document.getElementById("mycartSidebar");
  const closeIcon=document.getElementById("close-iconOne");
  const domBody=document.body;
  cartLink.addEventListener("click",function(){
    body.classList.toggle("mycartLink");
    cartSidebar.style.zIndex=1000;
  })
  closeIcon.addEventListener("click",() =>{
    body.classList.remove("mycartLink");
  })

  // My Cart Top
    document.getElementById('cartImgTwo').addEventListener('click', function(event) {
    event.preventDefault();
    var sidebar = document.getElementById('mycartSidebarTwo');
    sidebar.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
        const closeIconTwo=document.getElementById('close-iconTwo');
        closeIconTwo.addEventListener('click',() =>{
        body.classList.remove("mycartSidebarTwo");
  })
  document.getElementById('close-iconTwo').addEventListener('click', function() {
    var sidebar = document.getElementById('mycartSidebarTwo');
    sidebar.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
  
  // Hover Template
      const hoverLink = document.getElementById('proteinTozuDrop');
      const templateSection = document.getElementById('templateSection');
      let isHovering = false;

      hoverLink.addEventListener('mouseover', () => {
        templateSection.style.display = 'flex';
        isHovering = true;
      });

      hoverLink.addEventListener('mouseout', () => {
        isHovering = false;
        setTimeout(() => {
          if (!isHovering) {
            templateSection.style.display = 'flex';
          }
        }, 10);
      });

      templateSection.addEventListener('mouseover', () => {
        templateSection.style.display = 'flex';
        isHovering = true;
      });

      templateSection.addEventListener('mouseout', () => {
        isHovering = false;
        setTimeout(() => {
          if (!isHovering) {
            templateSection.style.display = 'none';
          }
        }, 10);
      });
      

      document.getElementById("cartImgTwo").addEventListener("click", function() {
        var sidebar = document.getElementById('mycartSidebar');
        sidebar.classList.toggle('active');
        sidebar.style.top=0;
      });
      
      // Kapama işlevi için close-icon'a tıklama olayını dinle
      document.getElementById('close-icon').addEventListener('click', function() {
        var sidebar = document.getElementById('mycartSidebar');
        sidebar.classList.remove('active');
      });
      
      // giriş yapma Form yönlendirme
      function girişFormYönlendirme(){
        window.location.href="/LoginPage/login.html";
      }

      function homepageyonlendirme(){
        window.location.href="/HomePage/index.html";
      }

      function instagramYonlendirme(){
        window.location.href="https://www.instagram.com/emreseferoglu1/";
      }

      function proteinTozuPage(){
        window.location.href="/ProteinTozuPage/index.html";
      }

      function contactYonlendirme(){
        window.location.href="/ContactPage/index.html";
      }

      function kiloPageyonlendirme(){
        window.location.href="/KiloHacimPage/index.html";
      }


      // Sepete Ekleme işlemi
      document.addEventListener('DOMContentLoaded', function() {
        const sepeteEkleButonlari = document.querySelectorAll('.sepete-ekle');
        const sidebar = document.getElementById('sidebar');
        const mycartSidebarTwo = document.getElementById('mycartSidebarTwo');
        const sidebarKapat = document.getElementById('sidebar-kapat');
        const sepetIcon = document.getElementById('sepet-icon');
        const sepetGit = document.getElementById('sepet-git');
        const hataMesaji = document.getElementById('hata-mesaji');
    
        // Sayfa yüklendiğinde sepeti kontrol et ve ilk yüklemede boşalt
        let sepet = JSON.parse(sessionStorage.getItem('sepet')) || [];
    
        function saveSepet() {
            sessionStorage.setItem('sepet', JSON.stringify(sepet));
        }
    
        function renderSepet() {
            mycartSidebarTwo.innerHTML = '';
            sepet.forEach(item => {
                const sepetKart = document.createElement('div');
                sepetKart.classList.add('sepet-kart');
                sepetKart.innerHTML = `
                    <div class="card">
                        <img src="${item.image}" class="card-img-top" alt="${item.title}">
                        <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">${item.content}</p>
                        </div>
                    </div>`;
                mycartSidebarTwo.appendChild(sepetKart);
            });
            
            if (sepet.length === 0) {
                mycartSidebarTwo.innerHTML = '<p>Sepetinizde ürün bulunmamaktadır.</p>';
            }
        }
    
        function showError(message) {
            hataMesaji.innerText = message;
            hataMesaji.style.display = 'block';
            setTimeout(() => {
                hataMesaji.style.display = 'none';
            }, 3000);
        }
    
        sepeteEkleButonlari.forEach(button => {
            button.addEventListener('click', function() {
                const kart = this.closest('.card');
                const kartIcerigi = {
                    title: kart.getAttribute('data-title') || '',
                    image: kart.getAttribute('data-image') || '',
                    content: kart.getAttribute('data-content') || ''
                };
    
                // Kartın zaten sepette olup olmadığını kontrol et
                const mevcutKart = sepet.find(item => item.title === kartIcerigi.title);
                if (mevcutKart) {
                    showError('Bu ürün zaten sepette.');
                    return;
                }
    
                sepet.push(kartIcerigi);
                saveSepet();
                renderSepet();
    
                sidebar.style.display = 'block'; // Sidebar'ı göster
            });
        });
    
        // Sepet ikonuna tıklayınca sidebar'ı aç
        sepetIcon.addEventListener('click', function() {
            sidebar.style.display = 'block';
        });
    
        // Sidebar'ı kapatmak için butona tıklama olayı
        sidebarKapat.addEventListener('click', function() {
            sidebar.style.display = 'none';
        });
    
        // Sepete Git linkine tıklanıldığında sepet sayfasına yönlendirme
        sepetGit.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'sepet.html';
        });
    
        renderSepet(); // Sayfa yüklendiğinde sepete eklenen ürünleri render et
    });
    