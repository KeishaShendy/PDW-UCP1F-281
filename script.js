const members = [
  {
    nama: "Keisha Shendy",
    email: "keishashendy@gmail.com",
    minat: "Web Development"
  },
  {
    nama: "Bunga Lestari",
    email: "bunga@gmail.com",
    minat: "UI/UX Design"
  },
  {
    nama: "Cahyo Pratama",
    email: "cahyo@gmail.com",
    minat: "Cyber Security"
  }
];

function renderHomeTable() {
  const tableBody = document.getElementById("memberTableBody");
  if (!tableBody) return;

  tableBody.innerHTML = "";
  members.forEach((member) => {
    tableBody.innerHTML += `
      <tr>
        <td>${member.nama}</td>
        <td>${member.email}</td>
        <td>${member.minat}</td>
      </tr>
    `;
  });
}

function renderSavedTable() {
  const savedTable = document.getElementById("savedMemberTable");
  if (!savedTable) return;

  savedTable.innerHTML = "";
  members.forEach((member) => {
    savedTable.innerHTML += `
      <tr>
        <td>${member.nama}</td>
        <td>${member.email}</td>
        <td>${member.minat}</td>
      </tr>
    `;
  });
}

function setupForm() {
  const form = document.getElementById("memberForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const minat = document.getElementById("minat").value;

    const newMember = { nama, email, minat };
    members.push(newMember);

    alert(
      "Data berhasil disimpan!\n" +
      "Nama: " + nama + "\n" +
      "Email: " + email + "\n" +
      "Bidang Minat: " + minat
    );

    const resultBox = document.getElementById("resultBox");
    resultBox.innerHTML = `
      <p><strong>Nama:</strong> ${nama}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Bidang Minat:</strong> ${minat}</p>
    `;

    renderSavedTable();
    form.reset();
  });
}

const imageList = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900"
];

let currentImageIndex = 0;

function changeImage() {
  const img = document.getElementById("galleryImage");
  if (!img) return;

  currentImageIndex++;
  if (currentImageIndex >= imageList.length) {
    currentImageIndex = 0;
  }

  img.src = imageList[currentImageIndex];
}

function showImageInfo() {
  alert("Gambar ini menampilkan aktivitas komunitas teknologi dan kolaborasi belajar.");
}

function playAudio() {
  const audio = document.getElementById("myAudio");
  if (audio) {
    audio.play();
  }
}

function pauseAudio() {
  const audio = document.getElementById("myAudio");
  if (audio) {
    audio.pause();
  }
}

renderHomeTable();
renderSavedTable();
setupForm();