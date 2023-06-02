// Import the functions you need from the SDKs you need
import { initializeApp } 
from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {getAuth, GoogleAuthProvider, signInWithPopup}
from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js'
import{getDatabase, ref, onValue, update, push, child}
from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js'


// TODO: Add SDKs for Firebase products that you want to use
//https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwyemREQ7PJoeUS15Bu8xG-2FFKkL04hA",
  authDomain: "demochat-2023-1.firebaseapp.com",
  databaseURL: "https://demochat-2023-1-default-rtdb.firebaseio.com",
  projectId: "demochat-2023-1",
  storageBucket: "demochat-2023-1.appspot.com",
  messagingSenderId: "53623234046",
  appId: "1:53623234046:web:6c2b1c5127f7f35137b4af",
  measurementId: "G-RTE7PYTP94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Aca Inicia mi Programa
var usuarioconectado = document.getElementById('divUsuario');
var boton_Iniciar = document.getElementById('boton_Iniciar');
var boton_Cerrar = document.getElementById('boton_Cerrar');
var texto_mensaje = document.getElementById('texto-mensaje'); 
var nombreusuarioconectado = "";
var Mensajes_Chat =  document.getElementById('Mensajes_Chat');
var divChat = document.getElementById('divChat');

//Funciones de Botones
document.getElementById('boton_Iniciar').onclick = async function(){
  //Obtenemos la lógica de la uatentifuicación de Google
    var auth = getAuth();
    //Proveerdor de Autentificación
    var provider = new GoogleAuthProvider();
    auth.lenguage = "es";
    var response = await signInWithPopup(auth, provider); 
    usuarioconectado.innerText = response.user.email;
    boton_Cerrar.style.display ="block";
    boton_Iniciar.style.display = "none";
    nombreusuarioconectado = response.user.email;
    escucharydibujarmensajes ();
  }

  boton_Cerrar.onclick = async function(){
    //Funciones de Cerrar la Sesión por Google
    var auth = getAuth();
    await auth.signOut();
    boton_Cerrar.style.display ="none";
    boton_Iniciar.style.display = "block";
    usuarioconectado.innerText = "No Identificado"
    nombreusuarioconectado = "";
  }
  
  //Logica de mensajes

  /**
 * Función para manejar el evento 'keydown' en el campo de texto del mensaje.
 * Si se presiona la tecla Enter, se realiza el envío del mensaje.
 */

  texto_mensaje.onkeydown = async function(){
    if (event.code == "Enter"){
      if(usuarioconectado == ""){
        alert("El usuario debe Iniciar Sesión")
        return;
      }
      var db = getDatabase();
      var referenciamensajes = ref(db, "Mensajes");
      var nuevallave = push(child(ref(db), "Mensajes")).key;
      var nuevosDatos = { [nuevallave]:{ 
            Usuario: nombreusuarioconectado,
            Mensaje: texto_mensaje.value,
            fecha: new Date().toLocaleDateString()}
      }
      texto_mensaje.value = "";
      update(referenciamensajes, nuevosDatos);
    }
  }
  
  
  //Descargar msj en tiempo real
  function escucharydibujarmensajes(){
    //Referencias a base de datos FireBase
    var db = getDatabase();
    var referenciamensajes = ref(db, "Mensajes");
    //Ewscuchamos cuando hya nuevos mensajes
    onValue(referenciamensajes,
       function(datos){
      var valoresobtenidos = datos.val();
      Mensajes_Chat.innerHTML="";
      Object.keys(valoresobtenidos).forEach(llave=>{        
          var mensaje = valoresobtenidos[llave];
          console.log(mensaje);
          //Mensajes_Chat.innerHTML += mensaje.Usuario + " " + mensaje.Mensaje + " "; 
          //Mostrar Usuario En mensajes
          Mensajes_Chat.innerHTML += "<div class='Usuario_1'>"+ valoresobtenidos[llave].Usuario + "</div>";
          //Texto_Mensaje en sección Mensajes
          Mensajes_Chat.innerHTML += "<div class='mensaje'>"+ valoresobtenidos[llave].Mensaje + "</div>";
          Mensajes_Chat.innerHTML += "<div class='Fecha_1'>"+ valoresobtenidos[llave].fecha + "</div>";
          //SEPARADOR ENTRE MENSAJES
          Mensajes_Chat.innerHTML += "<hr>"
          //Mensajes_Chat.innerHTML += mensaje.Usuario + " " + mensaje.Mensaje + " "; 

        Mensajes_Chat.scrollTo(0, Mensajes_Chat.scrollHeight)
        },
        (error)=>{
         console.log(error)
        }
        )
        })
    }
  


