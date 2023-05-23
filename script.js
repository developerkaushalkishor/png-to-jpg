function convertToJPG() {
  const fileInput = document.getElementById("fileInput");
  const result = document.getElementById("result");
  const downloadButton = document.getElementById("downloadButton");
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onload = function (event) {
    const img = new Image();
    img.src = event.target.result;
    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL("image/jpeg");
      result.innerHTML = `<img src="${dataURL}" alt="Converted Image">`;
      downloadButton.href = dataURL;
    };
  };
}
