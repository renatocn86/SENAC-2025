var codigo = prompt()

let url = 'https://barcodeapi.org/api/qrcode/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdebs_-f9bCp5gPR-Q6ulgwRrPbsH0JicxQ&s'

fetch(url, { cache: "no-store" })
  .then(response => {

    var tokens = response.headers.get('X-RateLimit-Tokens');
    console.log("Tokens remaining: " + tokens);

    response.blob().then(blob => {
      var img = document.createElement("img");
      img.src = URL.createObjectURL(blob);
      document.body.appendChild(img);
    });
});