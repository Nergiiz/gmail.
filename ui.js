function trimString(str,max){
    //metin 50 karakterden kısaysa olduğu gibi gönderiyoruz
    if(str.length < max) return str;

    //metnin harf uzunluğu 50 karakterden uzunsa
    //50 ye kadar olan kısmı kes sonrasına ... koy
    // yeni metni fonksiyonun çalıştığı yere gönder

    return str.slice(0,max) + "..."
}

/*
    * Ekrana maiilleri listeleyecek fonksiyon
    * outlet: Ekranın hangi kısmına müdahele edilecek.
    * data: Hangi verileri ekrana basacağımız parametredir.
*/
export function renderMails(outlet,data){
    if(!data) return;
    // her bir mail objesi için bir maili temsil eden html oluştur
    //oluşan mail html'ini mailler alanına gönderme (ekrana yazdır)
    outlet.innerHTML =  data.map((mail)=> `
                <div class="mail" data-id=${mail.id}>
                    <div class="left">
                        <input type="checkbox">
                        <i class="bi bi-star ${
                            mail.stared ? 'star-active' : ""
                        }"></i>
                        <span>${mail.sender}</span>
                    </div>
                    <div class="right">
                        <p class="message-title">${trimString(mail.title,30)}</p>
                        <p class="messega-description">
                        ${trimString(mail.message,40)}
                        </p>
                        <p class="message-date" >${mail.date}</p>
                        <div class="delete">
                            <i class="bi bi-trash "></i>
                        </div>
                    </div>
                </div>
    `).join(" ")
}

// ekrana mail oluşturma penceresini oluşturmak için kullanılacak fonksiyon
export function showModal(modal,willOpen){
    modal.style.display = willOpen ? "grid" : "none";
}

//kategorileri ekrana basma
export function renderCategories(outlet,data,selectCategory){
    // eski cateorileri sil
    outlet.innerHTML = ''


    // bize gelen diziyi forEach'le dönme
    data.forEach((category)=>{
        const categoryItem = document.createElement("a")

        // kategori elemanına veri ekleme
        categoryItem.dataset.name = category.title

        // aktif olan kategoriye active classı ekleme
        categoryItem.className = selectCategory === category.title && "active"

        categoryItem.innerHTML = `
            <i class="${category.class}"></i>
            <span>${category.title}</span>
        `
        outlet.appendChild(categoryItem);
    });
}