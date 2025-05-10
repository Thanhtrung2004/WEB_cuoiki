// khoi tao cac thong so
let btn1 = document.querySelector('#btn1');
let img1 = document.querySelector('#call');
let btn2 = document.querySelector('#btn2');
// functions nut bam
// const database=firebase.database();
// const deviceRef=database.ref('quan1');

btn1.addEventListener('click', ()=>{
    img1.src = 'image/densang.png'; 
    firebase.database().ref("thietbi1").set({dienthoai: 1})
})
btn2.addEventListener('click', ()=>{
    img1.src = 'image/dennn.png';
    firebase.database().ref("thietbi1").set({dienthoai: 0})
})


// khoi tao cac thong so
let btn3 = document.querySelector('#btn3');
let img2 = document.querySelector('#led');
let btn4 = document.querySelector('#btn4');
// functions nut bam
btn3.addEventListener('click', ()=>{
    img2.src = 'image/airon.png'; 
    firebase.database().ref("thietbi2").set({den1:1})
})

btn4.addEventListener('click', ()=>{
    img2.src = 'image/airoff.png';
    firebase.database().ref("thietbi2").set({den1:0})
})



// khoi tao cac thong s
let btn5 = document.querySelector('#btn5');
let img3 = document.querySelector('#loa');
let btn6 = document.querySelector('#btn6');

// functions nut bam
btn5.addEventListener('click', ()=>{
     img3.src = 'image/locon.png' ;
     firebase.database().ref("thietbi3").set({loa:1})

})
btn6.addEventListener('click', ()=>{
    img3.src = 'image/locoff.png';
    firebase.database().ref("thietbi3").set({loa: 0})

})
// Lấy nút bấm
let btnAllOn = document.querySelector('#btn_all_on');
let btnAllOff = document.querySelector('#btn_all_off');

// Xử lý bật tất cả thiết bị
btnAllOn.addEventListener('click', () => {
    // Thay đổi hình ảnh
    document.querySelector('#call').src = 'image/densang.png';
    document.querySelector('#led').src = 'image/airon.png';
    document.querySelector('#loa').src = 'image/locon.png';

    // Cập nhật Firebase
    firebase.database().ref("thietbi1").set({dienthoai: 1});
    firebase.database().ref("thietbi2").set({den1: 1});
    firebase.database().ref("thietbi3").set({loa: 1});
});

// Xử lý tắt tất cả thiết bị
btnAllOff.addEventListener('click', () => {
    // Thay đổi hình ảnh
    document.querySelector('#call').src = 'image/dennn.png';
    document.querySelector('#led').src = 'image/airoff.png';
    document.querySelector('#loa').src = 'image/locoff.png';

    // Cập nhật Firebase
    firebase.database().ref("thietbi1").set({dienthoai: 0});
    firebase.database().ref("thietbi2").set({den1: 0});
    firebase.database().ref("thietbi3").set({loa: 0});
});

