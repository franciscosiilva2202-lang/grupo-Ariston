* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #eeeeee;
  color: #333333;
}

button,
input,
textarea,
select {
  font-family: inherit;
}

button {
  cursor: pointer;
}


/* ==========================
   APLICAÇÃO
========================== */

.app {
  width: 100%;
  min-height: 100vh;
}


/* ==========================
   TELAS
========================== */

.screen {
  display: none;
  min-height: 100vh;
  padding: 30px 20px;
}

.screen.active {
  display: flex;
}


/* ==========================
   LOGIN
========================== */

#loginScreen {
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
}

.login-container {
  width: 100%;
  max-width: 390px;
  background: white;
  padding: 35px;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.10);
  text-align: center;
}


/* Área do logo */

.logo-area {
  margin-bottom: 25px;
}

.logo-placeholder {
  width: 90px;
  height: 90px;
  margin: 0 auto 15px;
  border-radius: 12px;
  background: #dddddd;
  border: 1px solid #cccccc;
}

.logo-area h1 {
  margin: 10px 0 8px;
  font-size: 29px;
}

.logo-area p {
  color: #777777;
  line-height: 1.5;
}


/* ==========================
   FORMULÁRIOS
========================== */

.form-group {
  text-align: left;
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 7px;
  font-weight: bold;
  font-size: 14px;
}

.form-group input,
textarea,
select {
  width: 100%;
  border: 1px solid #dddddd;
  background: #f5f5f5;
  border-radius: 8px;
  padding: 13px;
  font-size: 15px;
  outline: none;
}

.form-group input:focus,
textarea:focus,
select:focus {
  border-color: #9b7777;
  background: white;
}


/* ==========================
   BOTÕES
========================== */

.btn {
  width: 100%;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
}

.primary {
  background: #9b7777;
  color: white;
}

.primary:hover {
  background: #806060;
}

.secondary {
  background: #eeeeee;
  color: #555555;
}

.secondary:hover {
  background: #dddddd;
}

.back-button {
  border: none;
  background: transparent;
  color: #806060;
  font-weight: bold;
  padding: 0;
  margin-bottom: 25px;
}


/* ==========================
   CRIAR CONTA
========================== */

#registerScreen {
  justify-content: center;
  align-items: center;
}

.form-container {
  width: 100%;
  max-width: 430px;
  background: white;
  padding: 35px;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.10);
}

.form-container h1 {
  font-size: 29px;
  margin-bottom: 8px;
}

.description {
  color: #777777;
  line-height: 1.5;
  margin-bottom: 25px;
}


/* ==========================
   TELA INICIAL
========================== */

#homeScreen {
  justify-content: center;
  align-items: flex-start;
  background: #f2f2f2;
}

.home-container {
  width: 100%;
  max-width: 500px;
  background: white;
  min-height: calc(100vh - 60px);
  padding: 25px;
  border-radius: 18px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}


/* CABEÇALHO */

.home-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-logo {
  width: 50px;
  height: 50px;
  border-radius: 9px;
  background: #dddddd;
  border: 1px solid #cccccc;
}

.brand h2 {
  margin: 0;
  font-size: 21px;
}

.brand span {
  font-size: 11px;
  color: #888888;
}

.settings-button {
  border: none;
  background: transparent;
  color: #777777;
  font-size: 12px;
}


/* BOAS-VINDAS */

.welcome {
  margin-bottom: 25px;
}

.welcome h2 {
  margin-bottom: 5px;
}

.welcome p {
  color: #777777;
}


/* ==========================
   ESTATÍSTICAS
========================== */

.statistics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.stat-card {
  background: #eeeeee;
  padding: 18px;
  border-radius: 10px;
}

.stat-card strong {
  display: block;
  font-size: 23px;
  margin-bottom: 5px;
}

.stat-card span {
  display: block;
  font-size: 11px;
  color: #777777;
}


/* ==========================
   NOVA DENÚNCIA
========================== */

.new-report-button {
  width: 100%;
  border: none;
  background: #9b7777;
  color: white;
  border-radius: 9px;
  padding: 16px;
  margin-top: 25px;
  font-size: 16px;
  font-weight: bold;
}

.new-report-button:hover {
  background: #806060;
}

.logout-link {
  display: block;
  margin: 25px auto 0;
  border: none;
  background: none;
  color: #888888;
}


/* ==========================
   TELA DE DENÚNCIA
========================== */

#reportScreen {
  justify-content: center;
  align-items: flex-start;
  background: #f2f2f2;
}

.report-container {
  width: 100%;
  max-width: 500px;
  background: white;
  padding: 30px;
  border-radius: 18px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}

.report-container h1 {
  margin-bottom: 5px;
}

.report-section {
  margin-bottom: 22px;
}

.section-label {
  display: block;
  font-weight: bold;
  margin-bottom: 9px;
}


/* ==========================
   FOTO
========================== */

.photo-button {
  min-height: 58px;
  padding: 15px;
  border-radius: 9px;
  background: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #555555;
  font-weight: bold;
  border: 1px solid #dddddd;
}

.photo-button input {
  display: none;
}

.photo-preview {
  margin-top: 10px;
}

.photo-preview img {
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 9px;
}


/* ==========================
   LOCALIZAÇÃO
========================== */

.location-box {
  padding: 15px;
  background: #eeeeee;
  border-radius: 9px;
}

.location-box strong {
  font-size: 14px;
}

.location-box p {
  margin: 7px 0 0;
  font-size: 12px;
  color: #777777;
  line-height: 1.4;
}

.location-button {
  width: 100%;
  margin-top: 8px;
  padding: 11px;
  border: none;
  border-radius: 8px;
  background: #dddddd;
  color: #555555;
}

.location-button:hover {
  background: #cccccc;
}


/* ==========================
   MODAL
========================== */

.modal {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 999;
}

.modal.show {
  display: flex;
}

.modal-content {
  background: white;
  max-width: 390px;
  width: 100%;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
}

.success-message {
  font-weight: bold;
  color: #5d8060;
  margin-bottom: 15px;
}

.modal-content p {
  color: #777777;
  line-height: 1.5;
}


/* ==========================
   RESPONSIVIDADE
========================== */

@media (max-width: 500px) {

  .screen {
    padding: 15px;
  }

  .login-container,
  .form-container,
  .report-container {
    padding: 25px 20px;
  }

  .home-container {
    min-height: calc(100vh - 30px);
    padding: 20px;
  }

}