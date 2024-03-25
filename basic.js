
const fl = document.getElementById("fl");

fl.addEventListener("submit", (e) => {
    e.preventDefault();

    const cr = grecaptcha.getResponse();

    const inpn = document.getElementById("inpn");
    const inpp = document.getElementById("inpp");
    const notif = document.getElementById("notif");
    const cbis = document.getElementById("cbis");
    if(!cr.length > 0) {
        notif.innerHTML = "Captcha Belum Selesai/Belum Terselesaikan";
        throw new Error("Capcha Not Complate");
    }
    else {
        //start
        console.log("Captcha Complate");
        //end
        chlo(inpn, inpp, notif, cbis);
    }
});


let boolsh = false;
function sh() {
    let m1 = "webp/eye.webp"; //false
    let m2 = "webp/eye (1).webp"; //true
    const mata = document.getElementById("mataimg");
    const inpp = document.getElementById("inpp");

    // console.log("halo");

    if(boolsh == true) {
        mata.src = m1;
        boolsh = false;
        mata.classList.add("matas");
        mata.classList.remove("matas2");
        inpp.type = "password";
    }
    else if(boolsh == false) {
        mata.src = m2;
        boolsh = true;
        mata.classList.add("matas2");
        mata.classList.remove("matas");
        inpp.type = "text";
    }
}
sh();sh();

let adan = false;
let adap = false;
let adagp = false;
function notifmenumh() {
    const gprofm = document.getElementById("gprofm");
    const profmi = document.getElementById("profmi");
    const notifmenui = document.getElementById("notifmenui");
    if(adan == false) {
        adan = bukaelemen(notifmenui);
        cmfb();
    }
    else {
        adan = tutupelemen(notifmenui);
        cmft();
    }
    adap = tutupelemen(profmi);
    adagp = tutupelemen(gprofm);
}
function profmenuh() {
    const gprofm = document.getElementById("gprofm");
    const profmi = document.getElementById("profmi");
    const notifmenui = document.getElementById("notifmenui");
    if(adap == false) {
        adap = bukaelemen(profmi);
        cmfb();
    }
    else {
        adap = tutupelemen(profmi);
        cmft();
    }
    adan = tutupelemen(notifmenui);
    adagp = tutupelemen(gprofm);
}
function gprofmenuh() {
    const gprofm = document.getElementById("gprofm");
    const profmi = document.getElementById("profmi");
    const notifmenui = document.getElementById("notifmenui");
    if(adagp == false) {
        adagp = bukaelemen(gprofm);
        cmfb();
    }
    else {
        adagp = tutupelemen(gprofm);
        cmft();
    }
    adap = tutupelemen(profmi);
    adan = tutupelemen(notifmenui);
}
function closeallmenuf() {
    adan = true;
    notifmenumh();
    adap = true;
    profmenuh();
    adagp = true;
    gprofmenuh();
}

function tutupelemen(elemen) {
    elemen.classList.add("n");
    return false;
}
function bukaelemen(elemen) {
    elemen.classList.remove("n");
    return true;
}

function cmfb() {
    const closeallmenu = document.getElementById("closeallmenu");
    closeallmenu.classList.remove("n");
}
function cmft() {
    const closeallmenu = document.getElementById("closeallmenu");
    closeallmenu.classList.add("n");
}














//judul,jam,menit,detik,hari,bulan,tahun
let notification = 
[
    // [
    //     "ini adalah notifikasi ke 1",
    //     17,30,23,
    //     13,2,2024,
    // ],
    // [
    //     "ini adalah notifikasi ke 2",
    //     9,4,23,
    //     23,4,2023,
    // ],
    // [
    //     "ini adalah notifikasi ke 3",
    //     20,50,9,
    //     17,6,2024,
    // ],
];
const cnotifih = 
[
    "<div class='cnotifa'><h2>",
    "</h2><p>",
    "</p></div>",
];
const bulan = 
[
    31,28,31,30,31,30,31,31,30,31,30,31
]
const tahun = 365;



function removeelemen(kata) {
    const elemen = document.getElementsByClassName("cnotif");

    for(let i = 0; i < notification.length; i++) {
        if(kata == elemen[i].children[0].children[0].innerHTML) {
            console.log(kata, elemen[i]);
            elemen[i].remove();
            break;
        }
    }
}

function stf() {
    for(let i = 0; i < notification.length; i++) {
        var waktuSekarang = new Date();

        var jamSekarang = waktuSekarang.getHours();
        var menitSekarang = waktuSekarang.getMinutes();
        var detikSekarang = waktuSekarang.getSeconds();

        var jamTarget = notification[i][1];
        var menitTarget = notification[i][2];
        var detikTarget = notification[i][3];

        var selisihHari = hbt(notification[i][4],notification[i][5],notification[i][6]);
        var selisihJam = jamTarget - jamSekarang;
        var selisihMenit = menitTarget - menitSekarang;
        var selisihDetik = detikTarget - detikSekarang;
        


        let waktu = "";
        if(selisihHari !== 0) {
            if(selisihHari > 0) {
                waktu = selisihHari + " hari setelah ini";
            }
            else if(selisihHari < 0) {
                waktu = -selisihHari + " hari yang lalu";
            }
        }
        else if(selisihJam !== 0) {
            if(selisihJam > 0) {
                waktu = selisihJam + " jam setelah ini";
            }
            else if(selisihJam < 0) {
                waktu = -selisihJam + " jam yang lalu";
            }
        }
        else if(selisihMenit !== 0) {
            if(selisihMenit > 0) {
                waktu = selisihMenit + " menit setelah ini";
            }
            else if(selisihMenit < 0) {
                waktu = -selisihMenit + " menit yang lalu";
            }
        }
        else if(selisihDetik !== 0) {
            if(selisihDetik > 0) {
                waktu = selisihDetik + " detik setelah ini";
            }
            else if(selisihDetik < 0) {
                waktu = -selisihDetik + " detik yang lalu";
            }
        }

        const parent = document.getElementById("bnotif");
        const child = document.createElement("div");
        child.innerHTML =  cnotifih[0] + notification[i][0] + cnotifih[1] + waktu + cnotifih[2];
        child.addEventListener("click", function() {
            removeelemen(notification[i][0]);
        });
        child.classList.add("cnotif");
        parent.appendChild(child);
        
    }
}
stf();

function hbt(tanggalTarget, bulanTarget, tahunTarget) {
    var waktuSekarang = new Date();

    var tanggalSekarang = waktuSekarang.getDate();
    var bulanSekarang = waktuSekarang.getMonth() + 1;
    var tahunSekarang = waktuSekarang.getFullYear();

    let haris = 0;
    let tahuns = 0;
    if(bulanTarget > bulanSekarang) {
        haris = tanggalTarget - tanggalSekarang;
        haris = haris + getbulan2(bulanSekarang - 1, bulanTarget - 1);
        tahuns = tahunTarget - tahunSekarang;
        if(tahuns > 0) {
            for(let i = 0; i < tahuns; i++) {
                haris = haris + tahun;
            }
        }
        else if(tahuns < 0) {
            for(let i = 0; i < -tahuns; i++) {
                haris = haris - tahun;
            }
        }
        return haris;
    }
    else {
        haris = tanggalSekarang + getbulan(bulanSekarang - 1, bulanTarget - 1);
        haris = haris - tanggalTarget;
        return -haris;
    }
}

function getbulan2(bulanSekarang, bulanTarget) {
    let list = [];
    let number = 0;
    for(let i = 0; i < bulan.length; i++) {
        if(i > bulanSekarang - 1 && i < bulanTarget) {
            list.push(bulan[i]);
        }
    }
    for(let i = 0; i < list.length; i++) {
        number = number + list[i];
    }
    return number;
}

function getbulan(bulanSekarang, bulanTarget) {
    let list = [];
    let number = 0;
    for(let i = 0; i < bulan.length; i++) {
        if(i > bulanTarget - 1 && i < bulanSekarang) {
            list.push(bulan[i]);
        }
    }
    for(let i = 0; i < list.length; i++) {
        number = number + list[i];
    }
    return number;
}




const data_image_profile = 
[
    "Profilew/0.webp",
    "Profilew/1.webp",
    "Profilew/2.webp",
    "Profilew/3.webp",
    "Profilew/4.webp",
    "Profilew/5.webp",
    "Profilew/6.webp",
    "Profilew/7.webp",
    "Profilew/8.webp",
    "Profilew/9.webp",
    "Profilew/10.webp",
    "Profilew/11.webp",
    "Profilew/12.webp",
    "Profilew/13.webp",
    "Profilew/14.webp",
    "Profilew/15.webp",
    "Profilew/16.webp",
]

function gmpm(num) {
    const menu = document.getElementById("gpf");
    const menu2 = document.getElementById("gpf2");
    const pick = document.getElementById("pickpm");
    const pick2 = document.getElementById("pickpm2");
    if(num == 1) {
        menu.classList.remove("n");
        menu2.classList.add("n");

        pick.classList.remove("pickc-profilemenus");
        pick.classList.add("pickc-profilemenus2");

        pick2.classList.add("pickc-profilemenus");
        pick2.classList.remove("pickc-profilemenus2");
    }
    else if(num == 2) {
        menu2.classList.remove("n");
        menu.classList.add("n");

        pick2.classList.remove("pickc-profilemenus");
        pick2.classList.add("pickc-profilemenus2");

        pick.classList.add("pickc-profilemenus");
        pick.classList.remove("pickc-profilemenus2");
    }
}


let adamenu = false;
let runfmenu = false;
function menuf() {
    if(runfmenu == false) {
        const menubgrid = document.getElementById("menubgrid");
        const menuid = document.getElementById("menuid");
        if(adamenu == false) {
            runfmenu = true;

            menuid.classList.add("menui2");
            menuid.classList.remove("menui1");
        
            menubgrid.classList.add("menubgr1");
            menubgrid.classList.remove("menubgr2");
        
            setTimeout(function() {
                menuid.src = "webp/close.webp";
            }, 700);
            setTimeout(function() {
                menuid.classList.add("menui1");
                menuid.classList.remove("menui2");
            
                menuid.classList.add("menuix");
                menuid.classList.remove("menuib");
                runfmenu = false;
            }, 700);
            adamenu = true;
        }
        else {
            runfmenu = true;

            menuid.classList.add("menui2");
            menuid.classList.remove("menui1");
        
            menubgrid.classList.add("menubgr2");
            menubgrid.classList.remove("menubgr1");
        
            setTimeout(function() {
                menuid.src = "webp/menu-burger.webp";
            }, 700);
            setTimeout(function() {
                menuid.classList.add("menui1");
                menuid.classList.remove("menui2");
            
                menuid.classList.add("menuib");
                menuid.classList.remove("menuix");
                runfmenu = false;
            }, 700);
            adamenu = false;
        }
    }
}

function gotop() {
    const elemenb = document.getElementById("bodyid");
    elemenb.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    console.log("berjalan");
}