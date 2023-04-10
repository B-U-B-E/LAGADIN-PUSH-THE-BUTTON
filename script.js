let bodyStyle = document.body.style;


bodyStyle.overflow = "hidden";
bodyStyle.transition = "all 1s linear"

        let mediaDiv = document.querySelector(".media");
        document.body.appendChild(mediaDiv);
        




        let cardsContainer = document.getElementById("cards-container");

        let button = document.getElementById("button");
        mediaDiv.append(button);
        button.addEventListener("click", function buttonGetClicked() {
            
            document.body.classList.toggle('active')
            document.body.transition = "all 1s linear"
            cardsContainer.classList.toggle('active')
            button.classList.toggle('active')
            button.style.transition = "all 1s linear"
            button.innerText = "Click or double Click to see photo...";
        /*button.innerHTML =
                `<h1 style = font-size:20px>Lagadin was clicked...click again</h1><span style="font-size:50px; ">⬇</span>`*/
            button.style.width = "100%";
            // button.style.transform = "translate(-50%) rotateY(360deg)";
            button.append(cardsContainer);

        })

        button.addEventListener("dblclick", function buttonGetPhoto() {

            cardsContainer.classList.toggle('active')
            button.classList.toggle('active');
            button.setAttribute("style", "transition: all 1s linear 0s; height: 0%; opacity:0; cursor:auto; font-weight : bold;")
            button.innerText = "Beauty...";
            cardsContainer.style.display = "none";
            bodyStyle.overflow = "auto";
        

        })

        let up = document.getElementById("up");



        let cards = document.querySelector(".cards");

        function bubeFunky(bubeCard) {
            if (bubeCard.matches) {
                cards.style.display = "block";
                
                up.append(button);
                mediaDiv.style.height = "100%";
                mediaDiv.style.position = "absolute";
                mediaDiv.style.top = "0";
                mediaDiv.style.width = "100%";
                button.style.opacity = "1";
                bodyStyle.overflow = "auto"
                
                
                
                
                
                
            } else {
                cards.style.display = "flex";
                button.style.position = "absolute";
                
                        }
        }

        let bubeCard = window.matchMedia("(max-width: 1000px)")
        bubeFunky(bubeCard);
        bubeCard.addListener(bubeFunky)

        let footer = document.querySelector("footer");
        console.log(footer)
        document.body.appendChild(footer)
        footer.innerText = "This page is coded, designed,photographed product by Ljubomir Sukarov-Bube"