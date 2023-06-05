let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let boxs = document.querySelectorAll(".outputs .box");
let drag = null;
btn.addEventListener("click", function () {
  if (inp.value !== "") {
    boxs[0].innerHTML += `<p class="item" draggable="true">${inp.value}</p>`;
    inp.value = "";
  }
  dragAndDrop();
});

function dragAndDrop() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    // dragstart لما بنمسك العنصر ده
    item.addEventListener("dragstart", function () {
      //   لما نعمل dragنمسك عنصر منهم بنفسه
      drag = item;
      item.style.opacity = ".5";
    });

    // dragend لما بنسيب العنصر ده
    item.addEventListener("dragend", function () {
      drag = null;
      item.style.opacity = "1";
    });

    boxs.forEach((box) => {
      // dragover   ==>  لما الماوس يعدى على البوكس وهو عامل drag لحاجه
      box.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.style.background = "red";
        this.style.color = "#fff";
      });

      //   dragleave  ==>  لما الماوس يسيب العنصر على البوكس
      box.addEventListener("dragleave", function () {
        this.style.background = "#fff";
        this.style.color = "#000";
      });

      //   drop  ==>  لمانسيب ال drag على البوكس
      box.addEventListener("drop", function () {
        this.append(drag);
        this.style.background = "#fff";
        this.style.color = "#000";
      });
    });
  });
}
