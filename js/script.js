function hitungPersegi() {
    let sisi = document.getElementById("sisi").value;
    let luas = sisi * sisi;
    let keliling = 4 * sisi;
    document.getElementById("hasil-persegi").innerHTML = `
    <div style="text-align: left;">
    <p><strong>Luas = Sisi * Sisi</strong></p>
    <p>Luas = ${sisi} * ${sisi}</p>
    <p>Luas = ${luas}</p>
    <p><strong>Keliling = 4 * Sisi</strong></p>
    <p>Keliling = 4 * ${sisi}</p>
    <p>Keliling = ${keliling}</p>
    `;
}

function hitungPersegiPanjang() {
    let panjang = document.getElementById("panjang").value;
    let lebar = document.getElementById("lebar").value;
    let luas = panjang * lebar;
    let keliling = 2 * (parseFloat(panjang) + parseFloat(lebar));
    document.getElementById("hasil-persegi-panjang").innerHTML = `
    <div style="text-align: left;">
    <p><strong>Luas = Panjang * Lebar</strong></p>
    <p>Luas = ${panjang} * ${lebar}</p>
    <p>Luas = ${luas}</p>
    <p><strong>Keliling = 2(Panjang + Lebar)</strong></p>
    <p>Keliling = 2(${panjang} + ${lebar})</p>
    <p>Keliling = ${keliling}</p>
    </div>
    `;
}