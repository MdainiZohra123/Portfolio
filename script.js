const projects = {
    staywise: [
        "projet image/stay-home.PNG",
        "projet image/stay-iravel.PNG",
        "projet image/stay-login.PNG",
        "projet image/stay-sign.PNG"
    ],

    zrateck: [
        "projet image/tek-home.PNG",
        "projet image/tek-contact.PNG",
        "projet image/tek-sign.PNG",
        "projet image/tek-commande.PNG"
    ],

    todo: [
        "projet image/todolisete.PNG"
    ],

    "zh-market": [
        "projet image/market-home.PNG",
        "projet image/market-login.PNG",
        "projet image/market-sign.PNG",
        "projet image/market-commmande.PNG"
    ]
};

const currentImage = {
    staywise: 0,
    zrateck: 0,
    todo: 0,
    "zh-market": 0
};

function nextImage(project) {
    if (!projects[project]) return;

    currentImage[project] += 1;
    if (currentImage[project] >= projects[project].length) {
        currentImage[project] = 0;
    }

    const image = document.getElementById(project + "-image");
    if (image) {
        image.src = projects[project][currentImage[project]];
    }
}

function prevImage(project) {
    if (!projects[project]) return;

    currentImage[project] -= 1;
    if (currentImage[project] < 0) {
        currentImage[project] = projects[project].length - 1;
    }

    const image = document.getElementById(project + "-image");
    if (image) {
        image.src = projects[project][currentImage[project]];
    }
}