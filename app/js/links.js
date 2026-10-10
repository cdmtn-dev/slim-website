const googleApisPre = document.createElement("link")
googleApisPre.rel = "stylesheet"
googleApisPre.href = "https://fonts.googleapis.com"

const googleStaticPre = document.createElement("link")
googleStaticPre.rel = "stylesheet"
googleStaticPre.href = "https://fonts.gstatic.com"

const googleFont = document.createElement("link")
googleFont.rel = "stylesheet"
googleFont.href = "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
            
document.head.appendChild(googleApisPre)
document.head.appendChild(googleStaticPre)
document.head.appendChild(googleFont)