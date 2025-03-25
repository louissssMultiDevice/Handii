<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fika Store - Hosting & Jasa Digital</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/png" href="logo.png">
    <style>
        body { 
            font-family: Arial, sans-serif; 
            text-align: center; 
            background-color: #121212; 
            color: white;
        }
        .container { 
            max-width: 700px; 
            margin: auto; 
            padding: 20px; 
            border-radius: 10px; 
            background-color: #1e1e1e;
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }
        .logo {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-bottom: 20px;
        }
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-top: 10px; 
            color: white;
        }
        th, td { 
            border: 1px solid #ddd; 
            padding: 10px; 
            text-align: center; 
        }
        th { background-color: #00aaff; }
        .order { 
            margin-top: 20px; 
            font-weight: bold; 
        }
        input, button {
            padding: 10px;
            margin: 5px;
            border-radius: 5px;
            border: none;
        }
        input { width: 80%; }
        button {
            background-color: #00aaff;
            color: white;
            cursor: pointer;
        }
        button:hover { background-color: #0088cc; }
    </style>
</head>
<body>

    <div class="container">
        <img src="logo.png" alt="Fika Store Logo" class="logo">
        <h1>Fika Store</h1>
        <p>Hosting & Jasa Digital Murah dan Terpercaya</p>
        
        <h3>Daftar Layanan</h3>
        <table>
            <tr>
                <th>Produk</th>
                <th>Harga</th>
            </tr>
            <tr><td>Hosting Minecraft Bedrock</td><td>Rp 5.000/GB</td></tr>
            <tr><td>Hosting Minecraft Java</td><td>Rp 10.000/GB</td></tr>
            <tr><td>Hosting Bot WhatsApp</td><td>Rp 1.000/GB</td></tr>
            <tr><td>Minecraft Bedrock (10-20K)</td><td>Rp 10.000 - 20.000</td></tr>
            <tr><td>Minecraft Java</td><td>Cek Harga</td></tr>
            <tr><td>Jasa Create Website (Gampang)</td><td>Rp 10.000</td></tr>
            <tr><td>Jasa Create Website (Sulit)</td><td>Rp 20.000</td></tr>
            <tr><td>Jasa Fix Fitur Bot WA</td><td>Cek Harga</td></tr>
            <tr><td>Jasa Tambah Fitur Bot WA</td><td>Cek Harga</td></tr>
            <tr><td>Jasa Rename Script Bot</td><td>Cek Harga</td></tr>
            <tr><td>VPS</td><td>Cek Harga</td></tr>
            <tr><td>Domain</td><td>Cek Harga</td></tr>
            <tr><td>Script Bot WA (Jaga GC, BugWA)</td><td>Cek Harga</td></tr>
            <tr><td>Setup Server Minecraft (0 - Jadi)</td><td>Rp 10.000 - 50.000</td></tr>
            <tr><td>Setup Plugin Server (Tergantung Kesulitan)</td><td>Cek Harga</td></tr>
        </table>
        
        <div class="order">
            <p><strong>Pesan Sekarang:</strong></p>
            <input type="text" id="layanan" placeholder="Masukkan Layanan yang Dibeli" required>
            <input type="text" id="jumlah" placeholder="Jumlah (jika perlu)" required>
            <button onclick="orderWhatsApp()">Order via WhatsApp</button>
        </div>

        <script>
            function orderWhatsApp() {
                let layanan = document.getElementById("layanan").value;
                let jumlah = document.getElementById("jumlah").value;
                let nomorWA = "6287717274346";

                if (layanan) {
                    let url = `https://wa.me/${nomorWA}?text=Halo%20Admin%20Handi,%20saya%20mau%20order%20${layanan}%20%0A%0AJumlah:%20${jumlah}`;
                    window.open(url, "_blank");
                } else {
                    alert("Harap isi semua data!");
                }
            }
        </script>

        <p>Fika Store - Layanan Digital Terpercaya</p>
        <p> © Website By Handi</p>
        <p> © FikaAi - Handi - 2022-2025</p>
    </div>

</body>
</html>
