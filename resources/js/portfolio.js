$(document).ready(() => {
    let config = document.querySelector(".mymixcont");
    let mixer = mixitup(config, {
        selectors: {
            target: ".mix",
        },
        animation: {
            easing: "ease-in-out",
            applyPerspective: true,
            duration: 750,
            reverseOut: true,
            effects: "fade rotateY(90deg) stagger(100ms)",
            staggerSequence: function (i) {
                return 2 * i - 5 * (i / 3 - (1 / 3) * (i % 3));
            },
            nudge: false,
        },
        controls: {
            live: false,
        },
    });

    $(".closeButton").click(() => {
        document.querySelector(".closeButton .icon").classList.toggle("active");
        $(".description").slideToggle(500);
    });

    $(".exitButton").click(() => {
        tip.classList.remove("view");
    });

    function portfolioView(object) {
        let namePlate = document.querySelector(
            ".tip .allContent .description .pro_intro .nameplate h1"
        );
        namePlate.textContent = object.namePlate;

        let category = document.querySelector(
            ".tip .allContent .description .pro_intro .nameplate span span"
        );
        category.textContent = object.category;

        let pro_brief = document.querySelector(
            ".tip .allContent .description .pro_intro .other_text p"
        );
        pro_brief.textContent = object.project_brief;

        let project_date = document.querySelector(
            ".tip .allContent .description .pro_info .Date span"
        );
        project_date.textContent = object.project_date;

        let project_client = document.querySelector(
            ".tip .allContent .description .pro_info .client span"
        );
        project_client.textContent = object.project_client;

        let project_link = document.querySelector(
            ".tip .allContent .description .pro_info .link a"
        );
        project_link.textContent = object.project_link;

        let swiper_wrapper = document.querySelector(
            ".tip .swiper-container-2 .swiper-wrapper"
        );

        let image = swiper_wrapper.querySelectorAll(".swiper-slide img");

        for (let i = 0; i < object.image.length; i++) {
            image[i].src = object.image[i];
        }
    }

    // Swiper js
    var swiper = new Swiper(".swiper-container-2", {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
         effect: "flip",
         cubeEffect: {
             shadow: true,
             slideShadows: true,
             shadowOffset: 20,
             shadowScale: 0.94,
          },
         effect: "coverflow",
         coverflowEffect: {
             rotate: 30,
             stretch: 0,
             depth: 100,
             modifier: 1,
             slideShadows: true,
         },

        effect: "cube",
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });

    let about_nav_btn_2 = document.querySelectorAll(".about_nav a");

    function collapse2() {
        about_nav_btn_2.forEach((link) => {
            link.classList.remove("active");
        });
    }

    function slider1(selector) {
        selector.addEventListener("click", () => {
            collapse2();
            selector.classList.add("active");
        });
    }

    slider1(about_nav_btn_2[0]);
    slider1(about_nav_btn_2[1]);
    slider1(about_nav_btn_2[2]);
    slider1(about_nav_btn_2[3]);
    slider1(about_nav_btn_2[4]);
    slider1(about_nav_btn_2[5]);
    let web_detail,iot_detail,deep_deatil;
    let store ="I have developed an extensive web store that offers users convenient access to a range of online activities..  The username and  password  of the  registered users will be recorded on the database. The password will be encrypted and recorded..Registered users can login to this website using their username and password and then login to the website.";
    let ecom ="An e-commerce website is a sophisticated online platform designed to facilitate the buying and selling of goods or services over the internet. At its core, the website features a user-friendly interface that allows customers to browse through a catalog of products or services categorized by type, brand, price range, or other relevant attributes. Each product listing typically includes detailed descriptions, images or videos, pricing information, and customer reviews to aid in purchasing decisions.";
    let notes="A college notes gallery website serves as a centralized platform where students can upload, share, and access academic materials such as lecture notes, study guides, and past exams. The website typically begins with a user-friendly homepage featuring sections for logging in, browsing notes by course or subject, and uploading new materials. Upon logging in, users can create profiles that showcase their academic interests and contributions to the community.";
    let irrigation ="I spearheaded the creation of a phone-operated irrigation system leveraging IoT technology to enhance agricultural productivity and water conservation.The system employed sensors, microcontrollers, and  remote irrigation management through a mobile app. This innovation led to a substantial increase in water efficiency.";
    let hand ="A hand detection automatic hand wash system is an innovative solution designed to promote hygiene and minimize the spread of germs in public or private settings. This system typically utilizes advanced technologies such as computer vision or infrared sensors to detect the presence of hands within a designated area, such as near a sink or a hand wash station.";
    let leef ="The cotton leaf disease detection project aims to leverage machine learning and image processing techniques to accurately identify and classify diseases affecting cotton plants. eveloping and training machine learning models, commonly using algorithms like Convolutional Neural Networks (CNNs) or Support Vector Machines (SVMs). These models learn from the preprocessed images to classify new images into categories of healthy or diseased leaves with high accuracy.";


    let cards = document.querySelectorAll(".mix");
    let tip = document.querySelector(".tip");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            if (card.classList.contains("web")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                  
                    
                    if (website == "webstore") {
                       web_detail = store;
                       web_date ="February 2023 - April 2023";

                    }else if (website == "notesgallery") {
                        web_detail= notes;
                        web_date = "January 2023 - March 2024"

                    }
                    else { 
                        web_detail=ecom;
                        web_date ="January 2023 - Febrauary 2023"       }
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "Web Development",
                     
                    project_brief: `${web_detail}`,

                    project_date: `${web_date }`,
                    project_client: `Frond End : HTML,CSS,Javascript`,
                    
                    project_link: `Middle End :PHP ,Data base : Mysql`,

                    image: [
                        "resources/img/WEB/1/2.png",
                        "resources/img/WEB/1/3.png",
                        "resources/img/WEB/2/2.png",
                        "resources/img/WEB/2/3.png",
                        "resources/img/WEB/2/4.png",
                        "resources/img/WEB/3/2.png",
                       
                    ],
                });
            } else if (card.classList.contains("logo")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                    
                    if (website == "iotbased.irrigation system ") {
                        iot_detail=irrigation;
                        web_date="January 2024 - April 2024"

                     } else{iot_detail=hand; web_date="Decembers 2023 - January 2024"}
                     
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "Iot Project",
                    project_brief: `${iot_detail}`,

                    project_date: `${web_date}`,
                    project_client: `C Program .IOT Hardware, Ardino IDE`,
                    //project_link: `www.${website}.com`,

                    image: [
                        "resources/img/IOT/1/2.jpg",
                        "resources/img/IOT/1/3.png",
                        "resources/img/IOT/1/4.png",
                        "resources/img/IOT/2/2.jpg",
                        "resources/img/IOT/2/3.jpg",
                    ],
                });
            } else if (card.classList.contains("card")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
              
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "Deep learning",
                    project_brief: `${leef}`,

                    project_date: "Feb-2023 -april 2023 ",
                    //project_client: `${
                    //    card.querySelector(".title").textContent
                    //} Corporation`,
                    project_link: `Python program`,

                    image: [
                        "resources/img/DEEP/1/1.jpg",
                        "resources/img/DEEP/1/2.jpg",
                        "resources/img/DEEP/1/3.png",
                    ],
                });
            } else if (card.classList.contains("icon")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "Iot projectss",
                    project_brief: `Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. At corrupti modi perferendis
                                    iure corporis dolores minus asperiores nemo
                                    debitis veritatis id placeat, similique eum
                                    recusandae ipsa quia cum earum nam?`,

                    project_date: "2019",
                    project_client: `${
                        card.querySelector(".title").textContent
                    } Corporation`,
                    project_link: `www.${website}.com`,

                    image: [
                        "resources/img/portfolios/icon/1.jpg",
                        "resources/img/portfolios/icon/2.jpg",
                        "resources/img/portfolios/icon/3.jpg",
                        "resources/img/portfolios/icon/4.jpg",
                        "resources/img/portfolios/icon/5.jpg",
                        "resources/img/icon_design.png",
                        "resources/img/icon_design.png",
                        "resources/img/icon_design.png",
                        "resources/img/icon_design.png",
                    ],
                });
            } else if (card.classList.contains("app")) {
                tip.classList.add("view");
                let website = card
                    .querySelector(".title")
                    .textContent.replace(" ", "")
                    .replace(" ", ".")
                    .toLowerCase();
                portfolioView({
                    namePlate: card.querySelector(".title").textContent,
                    category: "UI/UX Designing",
                    project_brief: `Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. At corrupti modi perferendis
                                    iure corporis dolores minus asperiores nemo
                                    debitis veritatis id placeat, similique eum
                                    recusandae ipsa quia cum earum nam?`,

                    project_date: "2019",
                    project_client: `${
                        card.querySelector(".title").textContent
                    } Corporation`,
                    project_link: `www.${website}.com`,

                    image: [
                        "resources/img/portfolios/app/1.jpg",
                        "resources/img/portfolios/app/2.jpg",
                        "resources/img/portfolios/app/3.jpg",
                        "resources/img/ui_design.jpg",
                        "resources/img/ui_design.jpg",
                        "resources/img/ui_design.jpg",
                        "resources/img/ui_design.jpg",
                        "resources/img/ui_design.jpg",
                        "resources/img/ui_design.jpg",
                    ],
                });
            }
        });
    });
});
