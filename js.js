document.addEventListener('DOMContentLoaded', function() {
    loadingstart();
});
    
function loadingstart() {
    document.getElementById("snp").classList.remove("n");
    document.getElementById("snp").classList.add("mo");
    document.getElementById("snp").classList.remove("ho");

    document.getElementById("asn-l1").classList.add("asn-l1");
    document.getElementById("asn-l2").classList.add("asn-l2");
    document.getElementById("asna2").classList.add("asna2");
    document.getElementById("asn-l1").classList.remove("asn-l1o");
    document.getElementById("asn-l2").classList.remove("asn-l2o");
    document.getElementById("asna2").classList.remove("asna2o");
}
function loadingstop() {
    let CheckLogin = localStorage.getItem('CheckLogin');
    starting(CheckLogin);
    document.getElementById("asn-l1").classList.add("asn-l1o");
    document.getElementById("asn-l2").classList.add("asn-l2o");
    document.getElementById("asna2").classList.add("asna2o");
    setTimeout(function() {
        document.getElementById("snp").classList.add("ho");
        document.getElementById("snp").classList.remove("mo");
        numeratoreror = 0;
        setTimeout(function() {
            document.getElementById("snp").classList.add("n");
            document.getElementById("snp").classList.remove("ho");
        }, 500);
    }, 500);
}

function loadinginstant() {
    loadingstart();
    setTimeout(function() {
        loadingstop();
    }, 2000);
}

function starting(la) {
    if(la == "true") {
        document.getElementById("lgnp").classList.add("n");
        document.getElementById("fullp").classList.remove("n");
    }
    else if(la == "false") {
        document.getElementById("lgnp").classList.remove("n");
    }
    else {
        document.getElementById("lgnp").classList.remove("n");
    }
}

function chlo(inpn, inpp, notif, cbis) {
    let stop = false;
    myRefdu_a.once('value')
    .then((snapshot) => {
        const data = snapshot.val();
        for(let i = 0; i < data.length; i++) {
            if(inpn.value == data[i].nama && stop == false) {
                if(inpp.value == data[i].pass) {
                    notif.innerHTML = "";
                    console.log("berhasil login");
                    if(cbis.checked == true) {
                        afterLogin();
                        make_data_profile(inpn.value);
                    }
                    else {
                        nextLogin();
                        make_data_profile(inpn.value);
                    }
                    stop = true;
                }
            }
            else {
                if(stop == false) {
                    notif.innerHTML = "Isi Nama/Password Dengan Benar";
                    console.log("gagal login");
                }
            }
        }
    })
    .catch((error) => {
        console.error("Error getting data:", error);
    });
}

function nextLogin() {
    loadingstart();
    
    setTimeout(function() {
        document.getElementById("lgnp").classList.add("n");
        document.getElementById("fullp").classList.remove("n");
        loadingstop();
    }, 4000);
}

function numeratorerors() {
    numeratoreror++;
    if(numeratoreror > 100) {
        let ask = confirm("Admin Dashboard Kesulitan Dalam Memproses Data. Apakah anda Masih Ingin Menunggu/Lanjut?");
        if(ask == true) {
            numeratoreror = 0;
        }
        else {
            window.location.reload();
        }
    }
}

let navv = false;
function nav() {
    const nav = document.getElementById("navid");
    const body = document.getElementById("bodyid");
    const top_area = document.getElementById("top-areaid");
    const middleid = document.getElementById("middleid");
    const middleid2 = document.getElementById("middleid2");
    const ocid = document.getElementById("ocid");
    if(navv == false) {
        nav.classList.add("nav2");
        nav.classList.remove("nav");
        body.classList.add("body2");
        body.classList.remove("body");
        top_area.classList.add("top-area2");
        top_area.classList.remove("top-area");
        middleid.classList.add("middle2");
        middleid.classList.remove("middle");
        middleid2.classList.add("middle2");
        middleid2.classList.remove("middle");
        ocid.classList.add("oc2");
        ocid.classList.remove("oc");
        navv = true;
    }
    else {
        nav.classList.add("nav");
        nav.classList.remove("nav2");
        body.classList.add("body");
        body.classList.remove("body2");
        top_area.classList.add("top-area");
        top_area.classList.remove("top-area2");
        middleid.classList.add("middle");
        middleid.classList.remove("middle2");
        middleid2.classList.add("middle");
        middleid2.classList.remove("middle2");
        ocid.classList.add("oc");
        ocid.classList.remove("oc2");
        navv = false;
    }
}
function gld(num) {
    const acltb1 = document.getElementById("acltb1");
    const acltb2 = document.getElementById("acltb2");
    const acltb3 = document.getElementById("acltb3");
    const acltb4 = document.getElementById("acltb4");
    const acltb5 = document.getElementById("acltb5");
    const body_data_link1 = document.getElementById("body_data_link1");
    const body_data_link2 = document.getElementById("body_data_link2");
    const body_data_link3 = document.getElementById("body_data_link3");
    const body_data_link4 = document.getElementById("body_data_link4");
    const body_data_link5 = document.getElementById("body_data_link5");
    if(num == 1) {
        acltb1.classList.add("area-child-link-top2-body");
        acltb1.classList.remove("area-child-link-top2-body2");
        acltb2.classList.add("area-child-link-top2-body2");
        acltb2.classList.remove("area-child-link-top2-body");
        acltb3.classList.add("area-child-link-top2-body2");
        acltb3.classList.remove("area-child-link-top2-body");
        acltb4.classList.add("area-child-link-top2-body2");
        acltb4.classList.remove("area-child-link-top2-body");
        acltb5.classList.add("area-child-link-top2-body2");
        acltb5.classList.remove("area-child-link-top2-body");
        body_data_link1.classList.remove("n");
        body_data_link2.classList.add("n");
        body_data_link3.classList.add("n");
        body_data_link4.classList.add("n");
        body_data_link5.classList.add("n");
    }
    else if(num == 2) {
        acltb1.classList.add("area-child-link-top2-body2");
        acltb1.classList.remove("area-child-link-top2-body");
        acltb2.classList.add("area-child-link-top2-body");
        acltb2.classList.remove("area-child-link-top2-body2");
        acltb3.classList.add("area-child-link-top2-body2");
        acltb3.classList.remove("area-child-link-top2-body");
        acltb4.classList.add("area-child-link-top2-body2");
        acltb4.classList.remove("area-child-link-top2-body");
        acltb5.classList.add("area-child-link-top2-body2");
        acltb5.classList.remove("area-child-link-top2-body");
        body_data_link1.classList.add("n");
        body_data_link2.classList.remove("n");
        body_data_link3.classList.add("n");
        body_data_link4.classList.add("n");
        body_data_link5.classList.add("n");
    }
    else if(num == 3) {
        acltb1.classList.add("area-child-link-top2-body2");
        acltb1.classList.remove("area-child-link-top2-body");
        acltb2.classList.add("area-child-link-top2-body2");
        acltb2.classList.remove("area-child-link-top2-body");
        acltb3.classList.add("area-child-link-top2-body");
        acltb3.classList.remove("area-child-link-top2-body2");
        acltb4.classList.add("area-child-link-top2-body2");
        acltb4.classList.remove("area-child-link-top2-body");
        acltb5.classList.add("area-child-link-top2-body2");
        acltb5.classList.remove("area-child-link-top2-body");
        
        body_data_link1.classList.add("n");
        body_data_link2.classList.add("n");
        body_data_link3.classList.remove("n");
        body_data_link4.classList.add("n");
        body_data_link5.classList.add("n");
    }
    else if(num == 4) {
        acltb1.classList.add("area-child-link-top2-body2");
        acltb1.classList.remove("area-child-link-top2-body");
        acltb2.classList.add("area-child-link-top2-body2");
        acltb2.classList.remove("area-child-link-top2-body");
        acltb3.classList.add("area-child-link-top2-body2");
        acltb3.classList.remove("area-child-link-top2-body");
        acltb4.classList.add("area-child-link-top2-body");
        acltb4.classList.remove("area-child-link-top2-body2");
        acltb5.classList.add("area-child-link-top2-body2");
        acltb5.classList.remove("area-child-link-top2-body");
        
        body_data_link1.classList.add("n");
        body_data_link2.classList.add("n");
        body_data_link3.classList.add("n");
        body_data_link4.classList.remove("n");
        body_data_link5.classList.add("n");
    }
    else if(num == 5) {
        acltb1.classList.add("area-child-link-top2-body2");
        acltb1.classList.remove("area-child-link-top2-body");
        acltb2.classList.add("area-child-link-top2-body2");
        acltb2.classList.remove("area-child-link-top2-body");
        acltb3.classList.add("area-child-link-top2-body2");
        acltb3.classList.remove("area-child-link-top2-body");
        acltb4.classList.add("area-child-link-top2-body2");
        acltb4.classList.remove("area-child-link-top2-body");
        acltb5.classList.add("area-child-link-top2-body");
        acltb5.classList.remove("area-child-link-top2-body2");
        
        body_data_link1.classList.add("n");
        body_data_link2.classList.add("n");
        body_data_link3.classList.add("n");
        body_data_link4.classList.add("n");
        body_data_link5.classList.remove("n");
    }
    stopv();
}
function stopv() {
    const source = document.getElementById("source");
    const source2 = document.getElementById("source2");
    source.pause();
    source2.pause();
}
let de1bt = false;
let de2bt = false;
let de3bt = false;
let de4bt = false;
let de5bt = false;
let de6bt = false;
function btdp(num) {
    const de1 = document.getElementById("de1");
    const de2 = document.getElementById("de2");
    const de3 = document.getElementById("de3");
    const de4 = document.getElementById("de4");
    const de5 = document.getElementById("de5");
    const de6 = document.getElementById("de6");
    if(num == 1) {
        if(de1bt == true) {
            de1.classList.add("n");
            de1bt = false;
        }
        else {
            de1.classList.remove("n");
            de1bt = true;
        }
    }
    else if(num == 2) {
        if(de2bt == true) {
            de2.classList.add("n");
            de2bt = false;
        }
        else {
            de2.classList.remove("n");
            de2bt = true;
        }
    }
    else if(num == 3) {
        if(de3bt == true) {
            de3.classList.add("n");
            de3bt = false;
        }
        else {
            de3.classList.remove("n");
            de3bt = true;
        }
    }
    else if(num == 4) {
        if(de4bt == true) {
            de4.classList.add("n");
            de4bt = false;
        }
        else {
            de4.classList.remove("n");
            de4bt = true;
        }
    }
    else if(num == 5) {
        if(de5bt == true) {
            de5.classList.add("n");
            de5bt = false;
        }
        else {
            de5.classList.remove("n");
            de5bt = true;
        }
    }
    else if(num == 6) {
        if(de6bt == true) {
            de6.classList.add("n");
            de6bt = false;
        }
        else {
            de6.classList.remove("n");
            de6bt = true;
        }
    }
}
let de1bt2 = false;
let de2bt2 = false;
function btdp2(num) {
    const de1_2 = document.getElementById("de1_2");
    if(num == 1) {
        if(de1bt2 == true) {
            de1_2.classList.add("n");
            de1bt2 = false;
        }
        else {
            de1_2.classList.remove("n");
            de1bt2 = true;
        }
    }
}
let de1bt3 = false;
function btdp3(num) {
    const de1_3 = document.getElementById("de1_3");
    if(num == 1) {
        if(de1bt3 == true) {
            de1_3.classList.add("n");
            de1bt3 = false;
        }
        else {
            de1_3.classList.remove("n");
            de1bt3 = true;
        }
    }
}
function prev() {
    // console.log("halo");
    const filev = document.getElementById("filev2");
    var filev_data = filev.files[0];
    if (filev_data) {
        // console.log("halo");
        const storage = firebase.storage();
        const storageRef = storage.ref('movie/' + filev_data.name);
        const uploadTask = storageRef.put(filev_data);
        console.log("Video Proses Upload");
        loadingstart();
        // alert("Video Proses Upload");
    
        uploadTask.on('state_changed',
            (snapshot) => {
                // Menangani perubahan status pengunggahan (optional)
            },
            (error) => {
                console.error('Gagal mengunggah Video:', error);
                alert('Gagal mengunggah Video:', error);
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log('Berhasil mengunggah Video. URL:', downloadURL);
                    // console.log('Nilai pada child berhasil diperbarui!');
                    // console.log(file.name);
                    loadingstop();
                    // alert("Video Berhasil Di Tambahkan");
                    //load data
                    gets();
                });
            }
        );
    }
    else {
        // console.log("halo");
    }
}
function ganv() {
    const video = document.getElementById("video");
    const source = document.getElementById("source");
    source.src = video.value;
}
function ganv2() {
    const video2 = document.getElementById("video2");
    const source2 = document.getElementById("source2");
    source2.src = video2.value;
}
function loadv() {
    const parent2 = document.getElementById("videop");
    const middle = document.createElement("select");
    middle.classList.add("vids");
    middle.id = "video";
    parent2.appendChild(middle);
    for(let i = 0; i < urlvideo.length; i++) {
        const child = document.createElement("option");
        child.innerHTML = data[i];
        child.value = urlvideo[i];
        addc(child, 1);
    }
    lv = true;
    ganv();
}
function loadv2() {
    const parent2 = document.getElementById("videop2");
    const middle2 = document.createElement("select");
    middle2.classList.add("vids");
    middle2.id = "video2";
    parent2.appendChild(middle2);
    var datap2;
    var datap3;
    myRefmp_p1.once('value')
    .then((snapshot) => {
        const datap = snapshot.val();
        datap2 = datap;
        for(let i = 0; i < urlvideo.length; i++) {
            const child = document.createElement("option");
            child.innerHTML = data[i];
            child.value = urlvideo[i];
            addc(child, 2);
            // console.log(selectf(data[i], datap2));
            if(selectf(data[i], datap2) !== "") {
                datap3 = selectf(data[i], datap2);
            }
        }
        selectf2(datap3, 0);
        lv2 = true;
        ganv2();
    })
    .catch((error) => {
        console.error("Error getting data:", error);
    });
}
function loadv3() {
    // console.log(data[0]);
    const parent2 = document.getElementById("videop3");
    const middle = document.createElement("select");
    middle.classList.add("vids");
    middle.id = "video3";
    parent2.appendChild(middle);
    for(let i = 0; i < urlvideo.length; i++) {
        const child = document.createElement("option");
        child.innerHTML = data[i];
        child.value = i;
        addc(child, 3);
    }
    lv3 = true;
}
function selectf(dtsf, datap2p) {
    for(let i = 0; i < urlvideo.length; i++) {
        if(dtsf == datap2p) {
            return dtsf;
        }
        else {
            return "";
        }
    }
}
function selectf2(isi, num) {
    if(num == 0) {
        const select = document.getElementById("video2");
        for(let i = 0; i < select.children.length; i++) {
            if(isi == select.children[i].innerHTML) {
                select.value = select.children[i].value;
            }
        }
    }
}
function addc(child, numb) {
    const middle3 = document.getElementById("video3");
    const middle2 = document.getElementById("video2");
    const middle = document.getElementById("video");
    if(numb == 3) {
        middle3.appendChild(child);
        middle3.appendChild(child);
        // console.log("add3");
    }
    else if(numb == 2) {
        middle2.appendChild(child);
        middle2.appendChild(child);
        // console.log("add2");
    }
    else {
        middle.appendChild(child);
        middle.appendChild(child);
        // console.log("add");
    }
    // console.log("add" + num);
}
function prev2() {
    const select = document.getElementById("video2");
    const typep = document.getElementById("typep");
    if(typep.value == 0) {
        var dts = "";
        for(let i = 0; i < urlvideo.length; i++) {
            if(urlvideo[i] == select.value) {
                dts = data[i];
            }
        }
        myRefmp_p1.once('value')
        .then((snapshot) => {
            const datap = snapshot.val();
            loadingstart();
            if(datap !== dts) {
                myRefmp_p1.set(dts);
                loadingstop();
                // alert("Preview Berhasil Diperbarui");
            }
        })
        .catch((error) => {
            console.error("Error getting data:", error);
        });
    }
    else if(typep.value == 1) {
        var dts2 = [];
        for(let i = 0; i < urlvideo.length; i++) {
            if(urlvideo[i] == select.value) {
                dts2.push(data[i]);
            }
        }
        myRefmp_p2.once('value')
        .then((snapshot) => {
            const datap = snapshot.val();
            loadingstart();
            if(datap !== dts2[0]) {
                myRefmp_p2.set(dts2);
                loadingstop();
                // alert("Preview Berhasil Diperbarui");
            }
        })
        .catch((error) => {
            console.error("Error getting data:", error);
        });
    }
}
function info() {
    if(infinp.value) {
        loadingstart();
        myRefin.set(infinp.value);
        loadingstop();
        // alert("Informasi Berhasil Diperbarui");
    }
}
function infos() {
    const infinp = document.getElementById("infinp");
    myRefin.once('value')
    .then((snapshot) => {
        const datain = snapshot.val();
        infinp.value = datain;
    })
    .catch((error) => {
        console.error("Error getting data:", error);
    });
}

var databasev;
function ldataw(val, nama_data_i) {
    databasev = val.json;
    // console.log(databasev);
    let imgdt;
    imgdt = nama_data_i;
    let imgdt2 = [];
    for(let i = 0; i < imgdt.length; i++) {
        if(imgdt[i] == null || imgdt[i] == undefined || imgdt[i] == "") {
            // console.log("hi");
        }
        else {
            imgdt2.push(imgdt[i]);
            // console.log("hi2");
        }
    }
    gamfirec(imgdt2);
}
function ldw(imgdt3) {
    let namalabelw = [];
    let urllabelw = [];
    for(let i = 0; i < imgdt3[0].length; i++){
        if(imgdt3[0][i] == null || imgdt3[0][i] == "" || imgdt3[0][i] == undefined || imgdt3[0][i] == NaN) {
            // kosong
        }
        else {
            namalabelw.push(imgdt3[0][i]);
        }
    }
    for(let i = 0; i < namalabelw.length; i++) {
        for(let j = 0; j < nama_datal.length; j++) {
            if(nama_datal[j] == namalabelw[i]) {
                urllabelw.push(urlimage[j]);
            }
        }
    }
    check_set(urllabelw, namalabelw, imgdt3);
}
function check_set(urllabelw, namalabelw, imgdt3) {
    if(urllabelw.length == namalabelw.length) {
        for(let i = 0; i < urllabelw.length; i++){
            imgdt3[1][i].src = urllabelw[i];
        }
        
        loadvaluew();
    }
    else {
        console.log("Image Label Proces Eror:", urllabelw.length);
        numeratorerors();
        setTimeout(function() {
            ldw(imgdt3);
        }, 500);
    }
}
function gamfirec(imgdt) {
    for(let i = 0; i < imgdt.length; i++) {
        gamfire(imgdt[i], imgdt[imgdt.length - 1], imgdt.length, imgdt);
    }
}
let jsonimage = [];
function jsonimagef() {
    jsonimage = [];
    for(let i = 0; i < urlimage.length; i++) {
        let datajson = 
        {
            nama: nama_datal[i],
            url: urlimage[i]
        }
        jsonimage.push(datajson);
    }
    // console.log(jsonimage);
    makeselect();
}
function makeselect() {
    let parenting = 
    [
        document.getElementById("select_gambarp"),
        document.getElementById("select_gambarp2"),
        document.getElementById("select_thumnail1"),
        document.getElementById("select_thumnail2"),
        document.getElementById("select_thumnail3"),
        document.getElementById("select_thumnail4"),
        document.getElementById("select_thumnail5"),
        document.getElementById("select_thumnail6"),
    ];
    for(let i = 0; i < parenting.length; i++) {
        if(document.getElementById(parenting[i]) == null || 
        document.getElementById(parenting[i]) == undefined || 
        document.getElementById(parenting[i]) == "" || 
        document.getElementById(parenting[i]) == NaN)
        {
            // kosong
        }
        else
        { 
            document.getElementById(parenting[i]).remove();
        }
    }
    //parent
    const parent = 
    [
        document.getElementById("gambarp"),
        document.getElementById("gambarp2"),
        document.getElementById("div_thumnail1"),
        document.getElementById("div_thumnail2"),
        document.getElementById("div_thumnail3"),
        document.getElementById("div_thumnail4"),
        document.getElementById("div_thumnail5"),
        document.getElementById("div_thumnail6"),
    ]
    const ids = 
    [
        "select_gambarp",
        "select_gambarp2",
        "select_thumnail1",
        "select_thumnail2",
        "select_thumnail3",
        "select_thumnail4",
        "select_thumnail5",
        "select_thumnail6",
    ]
    for(let i = 0; i < parent.length; i++) {
        const child = document.createElement("select");
        child.classList.add("vids");
        child.id = ids[i];
        parent[i].appendChild(child);
    }
    makeoption();
}
function makeoption() {
    //parent
    let parent = 
    [
        document.getElementById("select_gambarp"),
        document.getElementById("select_gambarp2"),
        document.getElementById("select_thumnail1"),
        document.getElementById("select_thumnail2"),
        document.getElementById("select_thumnail3"),
        document.getElementById("select_thumnail4"),
        document.getElementById("select_thumnail5"),
        document.getElementById("select_thumnail6"),
    ];
    for(let i = 0; i < parent.length; i++) {
        //create elemen none
        const child = document.createElement("option");
        //id none
        child.innerHTML = "NONE";
        child.value = "";
        parent[i].appendChild(child);
        for(let j = 0; j < jsonimage.length; j++) {
            //create elemen
            const child = document.createElement("option");
            //id
            child.innerHTML = jsonimage[j].nama;
            child.value = jsonimage[j].url;
            parent[i].appendChild(child);
        }
    }
    gantim();
    let imgdt3 = 
    [
        [
            databasev.minggu04.gambar,
            databasev.minggu1.gambar,
            databasev.minggu2.gambar,
            databasev.minggu3.gambar,
            databasev.minggu4.gambar,
            databasev.minggu5.gambar
        ],
        [
            document.getElementById("labelimgw1"),
            document.getElementById("labelimgw2"),
            document.getElementById("labelimgw3"),
            document.getElementById("labelimgw4"),
            document.getElementById("labelimgw5"),
            document.getElementById("labelimgw6")
        ]
    ];
    ldw(imgdt3);
}
function gantim() {
    const parent = document.getElementById("select_gambarp");
    const displayg = document.getElementById("displayg");
    displayg.src = "";
    displayg.src = parent.value;
}
function imageupload() {
    // console.log("halo");
    const filev = document.getElementById("filei");
    var filev_data = filev.files[0];
    if (filev_data) {
        // console.log("halo");
        const storage = firebase.storage();
        const storageRef = storage.ref('images/' + filev_data.name);
        const uploadTask = storageRef.put(filev_data);
        // console.log("Gambar Proses Upload");
        loadingstart();
        // alert("Gambar Proses Upload");
    
        uploadTask.on('state_changed',
            (snapshot) => {
                // Menangani perubahan status pengunggahan (optional)
            },
            (error) => {
                console.error('Gagal mengunggah gambar:', error);
                alert('Gagal mengunggah gambar:', error);
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log('Berhasil mengunggah gambar. URL:', downloadURL);
                    loadingstop();
                    // alert("Gambar Berhasil Di Tambahkan");
                    gets();
                });
            }
        );
    }
    else {
        // console.log("halo");
    }
}
function sin() {
    const selecti = document.getElementById("select_gambarp2");
    
    for(let i = 0; i < jsonimage.length; i++) {
        if(jsonimage[i].url == selecti.value) {
            return jsonimage[i].nama;
        }
    }
}
function delti(namai) {
    let ask = confirm("Apakah anda yakin ingin menghapus file ini?");
    if(ask == true) {
        if(namai == NaN || namai == undefined || namai == null || namai == "" || namai == " " || namai == "?") {
            // kosong
        }
        else {
            const fileRef = storageRefs2.child(namai);
            loadingstart();
            removei(fileRef);
        }
    }
}
function pickuv() {
    const pickuvd = 
    [
        document.getElementById("pickuvd1"),
        document.getElementById("pickuvd2"),
        document.getElementById("pickuvd3"),
        document.getElementById("pickuvd4"),
        document.getElementById("pickuvd5"),
        document.getElementById("pickuvd6"),
    ];
    const videod = 
    [
        document.getElementById("videod1"),
        document.getElementById("videod2"),
        document.getElementById("videod3"),
        document.getElementById("videod4"),
        document.getElementById("videod5"),
        document.getElementById("videod6"),
    ];
    const urld = 
    [
        document.getElementById("urld1"),
        document.getElementById("urld2"),
        document.getElementById("urld3"),
        document.getElementById("urld4"),
        document.getElementById("urld5"),
        document.getElementById("urld6"),
    ];
    for(let i = 0; i < pickuvd.length; i++) {
        if(pickuvd[i].value == 1) {
            urld[i].classList.remove("n");
            videod[i].classList.add("n");
        }
        else if(pickuvd[i].value == 2) {
            urld[i].classList.add("n");
            videod[i].classList.remove("n");
        }
    }
    
}
pickuv();
function svs() {
    const select = document.getElementById("video3");
    // console.log(select.children[select.value].innerHTML);
    return select.children[select.value].innerHTML;
}
function delt(namac) {
    var full = namac;
    let ask = confirm("Apakah anda yakin ingin menghapus file ini?");
    if(ask == true) {
        storageRefs.listAll().then((result) => {
            for(let i = 0; i < result.items.length; i++) {
                if(result.items[i].name == full) {
                    loadingstart();
                    remove(result.items[i]);
                    console.log(result.items[i]);
                }
            }
        }).catch((error) => {
            console.error('Error getting list of items:', error);
        });
    }
}
let lvw1_1 = false;
let lvw1_2 = false;
let lvw2_1 = false;
let lvw2_2 = false;
let lvw3_1 = false;
let lvw3_2 = false;
let lvw4_1 = false;
let lvw4_2 = false;
let lvw5_1 = false;
let lvw5_2 = false;
let lvw6_1 = false;
let lvw6_2 = false;
// let lvw2 = false;
// let lvw3 = false;
// let lvw4 = false;
// let lvw5 = false;
// let lvw6 = false;
let lv = false;
let lv2 = false;
let lv3 = false;
function loadw(parentp, idp, lvw) {
    //penting
    const parent = document.getElementById(parentp);
    const middle = document.createElement("select");
    middle.classList.add("vids");
    middle.id = idp;
    parent.appendChild(middle);
    //none
    const child = document.createElement("option");
    child.innerHTML = "NONE";
    child.value = "";
    middle.appendChild(child);
    //child
    for(let i = 0; i < urlvideo.length; i++) {
        const child = document.createElement("option");
        child.innerHTML = data[i];
        child.value = urlvideo[i];
        middle.appendChild(child);
    }
    if(lvw == "lvw1_1") {lvw1_1 = true;}
    else if(lvw == "lvw1_2") {lvw1_2 = true;}
    else if(lvw == "lvw2_1") {lvw2_1 = true;}
    else if(lvw == "lvw2_2") {lvw2_2 = true;}
    
    else if(lvw == "lvw3_1") {lvw3_1 = true;}
    else if(lvw == "lvw3_2") {lvw3_2 = true;}
    
    else if(lvw == "lvw4_1") {lvw4_1 = true;}
    else if(lvw == "lvw4_2") {lvw4_2 = true;}
    
    else if(lvw == "lvw5_1") {lvw5_1 = true;}
    else if(lvw == "lvw5_2") {lvw5_2 = true;}
    
    else if(lvw == "lvw6_1") {lvw6_1 = true;}
    else if(lvw == "lvw6_2") {lvw6_2 = true;}
    // else if(lvw == "lvw2") {lvw2 = true;}
    // else if(lvw == "lvw3") {lvw3 = true;}
    // else if(lvw == "lvw4") {lvw4 = true;}
    // else if(lvw == "lvw5") {lvw5 = true;}
    // else if(lvw == "lvw6") {lvw6 = true;}
}
function callloadw() {
    //warta
    if(lvw1_1 == false) {loadw("videod1_1", "videod1s_1", "lvw1_1");}
    if(lvw1_2 == false) {loadw("videod1_2", "videod1s_2", "lvw1_2");}
    if(lvw2_1 == false) {loadw("videod2_1", "videod2s_1", "lvw2_1");}
    if(lvw2_2 == false) {loadw("videod2_2", "videod2s_2", "lvw2_2");}
    if(lvw3_1 == false) {loadw("videod3_1", "videod3s_1", "lvw3_1");}
    if(lvw3_2 == false) {loadw("videod3_2", "videod3s_2", "lvw3_2");}
    if(lvw4_1 == false) {loadw("videod4_1", "videod4s_1", "lvw4_1");}
    if(lvw4_2 == false) {loadw("videod4_2", "videod4s_2", "lvw4_2");}
    if(lvw5_1 == false) {loadw("videod5_1", "videod5s_1", "lvw5_1");}
    if(lvw5_2 == false) {loadw("videod5_2", "videod5s_2", "lvw5_2");}
    if(lvw6_1 == false) {loadw("videod6_1", "videod6s_1", "lvw6_1");}
    if(lvw6_2 == false) {loadw("videod6_2", "videod6s_2", "lvw6_2");}
    // if(lvw2 == false) {loadw("videod2", "videod2s", "lvw2");}
    // if(lvw3 == false) {loadw("videod3", "videod3s", "lvw3");}
    // if(lvw4 == false) {loadw("videod4", "videod4s", "lvw4");}
    // if(lvw5 == false) {loadw("videod5", "videod5s", "lvw5");}
    // if(lvw6 == false) {loadw("videod6", "videod6s", "lvw6");}
    //lainya
    if(lv == false) {loadv();}
    if(lv2 == false) {loadv2();}
    if(lv3 == false) {loadv3();}
}
var judul_warta;
var select_thumnail;
var pickuvd;
var videod1s_1;
var videod1s_2;
var link1;
var link2;
var judul_thumbnail;
var datafor;
function loadvaluew() {
    data_profile();
    const judul_warta2 = [
        document.getElementById("judul_warta1"),
        document.getElementById("judul_warta2"),
        document.getElementById("judul_warta3"),
        document.getElementById("judul_warta4"),
        document.getElementById("judul_warta5"),
        document.getElementById("judul_warta6"),
    ];
    const select_thumnail2 = [
        document.getElementById("select_thumnail1"),
        document.getElementById("select_thumnail2"),
        document.getElementById("select_thumnail3"),
        document.getElementById("select_thumnail4"),
        document.getElementById("select_thumnail5"),
        document.getElementById("select_thumnail6"),
    ];
    const pickuvd2 = [
        document.getElementById("pickuvd1"),
        document.getElementById("pickuvd2"),
        document.getElementById("pickuvd3"),
        document.getElementById("pickuvd4"),
        document.getElementById("pickuvd5"),
        document.getElementById("pickuvd6"),
    ];
    const videod1s_1_2 = [
        document.getElementById("videod1s_1"),
        document.getElementById("videod2s_1"),
        document.getElementById("videod3s_1"),
        document.getElementById("videod4s_1"),
        document.getElementById("videod5s_1"),
        document.getElementById("videod6s_1"),
    ];
    const videod1s_2_2 = [
        document.getElementById("videod1s_2"),
        document.getElementById("videod2s_2"),
        document.getElementById("videod3s_2"),
        document.getElementById("videod4s_2"),
        document.getElementById("videod5s_2"),
        document.getElementById("videod6s_2"),
    ];
    const link1_2 = [
        document.getElementById("link1_1"),
        document.getElementById("link1_2"),
        document.getElementById("link1_3"),
        document.getElementById("link1_4"),
        document.getElementById("link1_5"),
        document.getElementById("link1_6"),
    ];
    const link2_2 = [
        document.getElementById("link2_1"),
        document.getElementById("link2_2"),
        document.getElementById("link2_3"),
        document.getElementById("link2_4"),
        document.getElementById("link2_5"),
        document.getElementById("link2_6"),
    ];
    const judul_thumbnail2 = [
        document.getElementById("judul_thumbnail1"),
        document.getElementById("judul_thumbnail2"),
        document.getElementById("judul_thumbnail3"),
        document.getElementById("judul_thumbnail4"),
        document.getElementById("judul_thumbnail5"),
        document.getElementById("judul_thumbnail6"),
    ];
    var datafor2 = [
        databasev.minggu04,
        databasev.minggu1,
        databasev.minggu2,
        databasev.minggu3,
        databasev.minggu4,
        databasev.minggu5
    ];
    judul_warta = judul_warta2;
    select_thumnail = select_thumnail2;
    pickuvd = pickuvd2;
    videod1s_1 = videod1s_1_2;
    videod1s_2 = videod1s_2_2;
    link1 = link1_2;
    link2 = link2_2;
    judul_thumbnail = judul_thumbnail2;
    datafor = datafor2;
    for(let j = 0; j < judul_warta.length; j++) {
        if(datafor[j].nama == "" || datafor[j].nama == null || datafor[j].nama == undefined || datafor[j].nama == " ") {
            // kosong
        }
        else {
            judul_warta[j].value = datafor[j].nama;
        }
        if(datafor[j].gambar == "" || datafor[j].gambar == null || datafor[j].gambar == undefined || datafor[j].gambar == " ") {}
        else {
            var childrenst = select_thumnail[j].children;
            for(let i = 0; i < childrenst.length; i++) {
                if(childrenst[i].innerHTML == datafor[j].gambar) {
                    select_thumnail[j].value = childrenst[i].value;
                }
            }
        }
        if(datafor[j].isdrive == "" || datafor[j].isdrive == null || datafor[j].isdrive == undefined || datafor[j].isdrive == " ") {}
        else {
            if(datafor[j].isdrive == true) {
                pickuvd[j].value = 1;
            }
            else {
                pickuvd[j].value = 2;
            }
            pickuv();
        }
        if(datafor[j].url == "" || datafor[j].url == null || datafor[j].url == undefined || datafor[j].url == " ") {}
        else {
            var childrenst2 = videod1s_1[j].children;
            var bnrs = 0;
            for(let i = 0; i < childrenst2.length; i++) {
                if(childrenst2[i].value == datafor[j].url) {
                    videod1s_1[j].value = childrenst2[i].value;
                    // console.log(childrenst2[i].innerHTML);
                    bnrs++;
                }
                if(datafor[j].url2 == "" || datafor[j].url2 == null || datafor[j].url2 == undefined || datafor[j].url2 == " ") {}
                else {
                    if(childrenst2[i].value == datafor[j].url2) {
                        videod1s_2[j].value = childrenst2[i].value;
                        bnrs++;
                    }
                }
            }
            if(bnrs == 0) {
                link1[j].value = datafor[j].url;
                if(datafor[j].url2 == "" || datafor[j].url2 == null || datafor[j].url2 == undefined || datafor[j].url2 == " ") {}
                else {
                    link2[j].value = datafor[j].url2;
                }
            }
        }
        if(datafor[j].title == "" || datafor[j].title == null || datafor[j].title == undefined || datafor[j].title == " ") {}
        else {
            judul_thumbnail[j].value = datafor[j].title;
        }
    }

    loadingstop();
}
function subm(num) {
    let ask = confirm("Apakah anda yakin ingin mengganti data ini?");
    if(ask == true) {
        datafor[num - 1].nama = judul_warta[num - 1].value;
        // datafor[num - 1].gambar = select_thumnail[num - 1].value;
        for(let i = 0; i < select_thumnail[num - 1].children.length; i++) {
            if(select_thumnail[num - 1].value == select_thumnail[num - 1].children[i].value) {
                datafor[num - 1].gambar = select_thumnail[num - 1].children[i].innerHTML;
            }
        }
        datafor[num - 1].isdrive = pickuvd[num - 1].value;
        if(pickuvd[num - 1].value == 1) {
            let iv = true;
            datafor[num - 1].isdrive = iv;
            datafor[num - 1].url = link1[num - 1].value;
            datafor[num - 1].url2 = link2[num - 1].value;
        }
        else {
            let iv = false;
            datafor[num - 1].isdrive = iv;
            datafor[num - 1].url = videod1s_1[num - 1].value;
            datafor[num - 1].url2 = videod1s_2[num - 1].value;
        }
        datafor[num - 1].title = judul_thumbnail[num - 1].value;
        loadingstart();
        rd(num - 1);
    }
}
function rd(num) {
    const myRef04 = database.ref('warta/json/minggu04');
    const myRef1 = database.ref('warta/json/minggu1');
    const myRef2 = database.ref('warta/json/minggu2');
    const myRef3 = database.ref('warta/json/minggu3');
    const myRef4 = database.ref('warta/json/minggu4');
    const myRef5 = database.ref('warta/json/minggu5');
    // console.log(myRef04);
    myRef04.once('value')
    .then((snapshot) => {
        if(num == 0) {
            myRef04.set(datafor[num]);
            loadingstop();
            // alert("Warta Berhasil Diperbarui");
        }
        else if(num == 1) {
            myRef1.set(datafor[num]);
            loadingstop();
            // alert("Warta Berhasil Diperbarui");
        }
        else if(num == 2) {
            myRef2.set(datafor[num]);
            loadingstop();
            // alert("Warta Berhasil Diperbarui");
        }
        else if(num == 3) {
            myRef3.set(datafor[num]);
            loadingstop();
            // alert("Warta Berhasil Diperbarui");
        }
        else if(num == 4) {
            myRef4.set(datafor[num]);
            loadingstop();
            // alert("Warta Berhasil Diperbarui");
        }
        else if(num == 5) {
            myRef5.set(datafor[num]);
            loadingstop();
            alert("Warta Berhasil Diperbarui");
        }
    })
    .catch((error) => {
        console.error("Error getting data:", error);
    });
}
setInterval(() => {
    if(document.getElementById("video") !== null) {
        if(document.getElementById("video2") !== null) {
            if(document.getElementById("select_gambarp") !== null) {
                document.getElementById("video").onchange = function() { ganv() };
                document.getElementById("video2").onchange = function() { ganv2() };
                document.getElementById("select_gambarp").onchange = function() { gantim() };
            }
        }
    }
}, 50);

function tab(num) {
    let mtp = "Masih Tahap Pembuatan";
    if(num == 0) {
        closeallmenu();
        loadingstart();
        setTimeout(function() {
            //remove
            rts(num);

            //add
            ats(num);

            setTimeout(function() {
                loadingstop();
            }, 1000);
        }, 2000);
    }
    else if(num == 1) {
        closeallmenu();
        loadingstart();
        setTimeout(function() {
            //remove
            rts(num);

            //add
            ats(num);

            setTimeout(function() {
                loadingstop();
            }, 1000);
        }, 2000);
    }
    else if(num == 2) {
        alert(mtp);
        console.log(mtp);
    }
    else if(num == 3) {
        alert(mtp);
        console.log(mtp);
    }
    else if(num == 4) {
        alert(mtp);
        console.log(mtp);
    }
}

function closeallmenu() {
    adan = true;
    notifmenumh();
    adap = true;
    profmenuh();
    adagp = true;
    gprofmenuh();
    adamenu = true;
    menuf();
}



const topt2 = 
[
    document.getElementById("head_data_link_home"),
    document.getElementById("head_data_link_data"),
]
const bodyt2 = 
[
    document.getElementById("body_data_link1_home"),
    document.getElementById("body_data_link1_data"),
]
const btntt2 = 
[
    document.getElementById("btnt_h"),
    document.getElementById("btnt_d"),
]
const btnbt2 = 
[
    document.getElementById("btnb_h"),
    document.getElementById("btnb_d"),
]
const slm2 = document.getElementsByClassName("sortlinkmobile");
//remove
function rts(kecuali) {
    for(let i = 0; i < topt2.length; i++) {
        if(kecuali == i) {}
        else {
            topt2[i].classList.add("n");
            bodyt2[i].classList.add("n");


            btntt2[i].classList.add("biasaimg");
            btntt2[i].classList.remove("pilihimg");

            btnbt2[i].classList.remove("area-child-middle2");
            btnbt2[i].classList.add("area-child-middle");

            slm2[i].classList.add("link");
            slm2[i].classList.remove("linkp");
        }
    }
}
//add
function ats(pilih) {
    for(let i = 0; i < topt2.length; i++) {
        if(pilih == i) {
            topt2[i].classList.remove("n");
            bodyt2[i].classList.remove("n");


            btntt2[i].classList.remove("biasaimg");
            btntt2[i].classList.add("pilihimg");

            btnbt2[i].classList.add("area-child-middle2");
            btnbt2[i].classList.remove("area-child-middle");
            
            slm2[i].classList.add("linkp");
            slm2[i].classList.remove("link");
        }
    }
}
function gprofilew(num) {
    let ask = confirm("Apakah anda yakin ingin mengganti profile anda?");
    if(ask == true) {
        var data_admins = localStorage.getItem("data_admins");
        var data = JSON.parse(data_admins);
        
        var data = {
            nameprofile: data.nameprofile,
            imgprofile: data_image_profile[num],
        };

        var data_admins = JSON.stringify(data);

        localStorage.setItem("data_admins", data_admins);
        set_data_admin();
    }
}
function set_data_admin() {
    var data_admins = localStorage.getItem("data_admins");
    var data = JSON.parse(data_admins);

    const namap = document.getElementById("namap");
    const nama_profilemenus = document.getElementById("nama-profilemenus");
    const imgp = document.getElementById("imgp");
    const imgp2 = document.getElementById("imgp2");
    const profilemenus_img = document.getElementById("profilemenus_img");
    const namegpf = document.getElementById("namegpf");

    namap.innerHTML = data.nameprofile;
    nama_profilemenus.innerHTML = data.nameprofile;
    namegpf.value = data.nameprofile;
    imgp.src = data.imgprofile;
    imgp2.src = data.imgprofile;
    profilemenus_img.src = data.imgprofile;
}

function subnamegpf() {
    let ask = confirm("Apakah anda yakin ingin mengganti nickname anda?");
    if(ask == true) {
        const namavalue = document.getElementById("namegpf").value;
        var data_admins = localStorage.getItem("data_admins");
        var data = JSON.parse(data_admins);

        var data = {
            nameprofile: namavalue,
            imgprofile: data.imgprofile,
        };

        var data_admins = JSON.stringify(data);

        localStorage.setItem("data_admins", data_admins);
        set_data_admin();
    }
}

function cmpm() {
    adagp = true;
    gprofmenuh();
}

// document.addEventListener("visibilitychange", function() {
//     if (document.visibilityState === 'visible') {
//         console.log('Halaman web kembali aktif.');
//     } else {
//         console.log('Halaman web tidak aktif.');
//     }
// });