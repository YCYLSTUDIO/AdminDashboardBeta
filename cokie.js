//cookie
document.addEventListener('DOMContentLoaded', function () {
    let AdminId = localStorage.getItem('AdminId');
    let CheckLogin = localStorage.getItem('CheckLogin');
    // console.log(AdminId);
    // console.log(CheckLogin);

    if (!AdminId) {
        AdminId = generateAdminId();
        localStorage.setItem('AdminId', AdminId);
    }
    if (!CheckLogin) {
        CheckLogin = false;
        localStorage.setItem('CheckLogin', CheckLogin);
    }

    // console.log(AdminId);
    // console.log(CheckLogin);
    // starting(CheckLogin);
});

function generateAdminId() {
    return 'user_' + Math.random().toString(36).substr(2, 9);
}

function logout() {
    let ask = confirm("Apakah anda yakin ingin logout?");
    if(ask == true) {
        clearlsk("data_admins");
        CheckLogin = false;
        localStorage.setItem('CheckLogin', CheckLogin);
        window.location.reload();
    }
}

function afterLogin() {
    let CheckLogin = localStorage.getItem('CheckLogin');
    CheckLogin = true;
    localStorage.setItem('CheckLogin', CheckLogin);
    nextLogin();
}




function make_data_profile(namai) {
    var data_admins = localStorage.getItem("data_admins");
    if(data_admins) { 
        data_profile();
    }
    else {
        var data = {
            nameprofile: namai,
            imgprofile: data_image_profile[0],
        };

        var data_admins = JSON.stringify(data);

        localStorage.setItem("data_admins", data_admins);

        if(data_profile() == "gagal") {
            make_data_profile(namai);
        }
    }
}

function data_profile() {
    var data_admins = localStorage.getItem("data_admins");
    if (data_admins) {
        set_data_admin();

        return "aman";
    }
    else {
        return "gagal";
    }
}

function clearlsk(key) {
    localStorage.removeItem(key);
}
