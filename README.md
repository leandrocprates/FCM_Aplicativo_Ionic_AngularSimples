# FCM_Aplicativo_Ionic_AngularSimples


**Este projeto tem por objetivo criar um aplicativo ionic que recebe mensagens vindas do FCM(Firebase Cloud Message)**

O link a seguir segue o plugin utilizado no projeto que deve ser adicionado  [FCM Plugin](https://github.com/fechanique/cordova-plugin-fcm)


A - Obter Token Gerado Pelo FCM no Android (Ver projeto  [Aplicativo Android](https://github.com/leandrocprates/AndroidApp "App Android")   ): 

dO4gJ49RmZc:APA91bHeEetvskxSUbC0QpVBm--EzDnfTB_OWAg2c5RxkPKiYdkFnqTx12bjqLxs6dIsZV-7vWET_QBajZRMx-IdGRlWMUy25SHchwF8Sx7Ss4oTqemOuMTt8ZtV6xQeEKxl9L5RGlan

**Enviar Notificacao pela classe Java ou PostMan direto para o FCM Google:**

1. Modelo json de envio de mensagem 

URL : https://fcm.googleapis.com/fcm/send 

Content-Type : application/json 

Authorization : key=AAAAGYw4hd8:APA91bG_vtOqwjhgXCbtwLltqUJuWSIF_H4ScHybfNhWoJ5JNxEnLKogPwyzfpHZidfn4H95jO88ViSaI7mgJLnm7K9fqrch8Ma-R-pbRaS1slspAum7UmBsa5ljbxJc1EUtDNWRt0CN


```json

{
  "notification":{
    "title":"Notification title",
    "body":"Notification body",
    "sound":"default",
    "click_action":"FCM_PLUGIN_ACTIVITY",
    "icon":"fcm_push_icon"
  },
  "data":{
    "mensagem":"Mensagem de teste ",
    "param2":"value2"
  },
    "to":"dO4gJ49RmZc:APA91bHeEetvskxSUbC0QpVBm--EzDnfTB_OWAg2c5RxkPKiYdkFnqTx12bjqLxs6dIsZV-7vWET_QBajZRMx-IdGRlWMUy25SHchwF8Sx7Ss4oTqemOuMTt8ZtV6xQeEKxl9L5RGlan",
    "priority":"high",
    "restricted_package_name":""
}

```

2. Recebendo mensagens no javascript 


- Caso a mensagem venha quando o aplicativo esta em background uma notificação é criada e adicionada no painel de notificações . 
- Caso a mensagem venha quando o aplicativo esta em foreground os valores vindos dentro da tag **data** será passado para o javascript. 


```javascript 

  FCMPlugin.getToken(
    function (token) {
    tokenRetorno = token ; 

    alert('Token: ' + token);
    console.log('Token: ' + token);
    },
    function (err) {
    alert('error retrieving token: ' + token);
    console.log('error retrieving token: ' + err);
    }
  );

  FCMPlugin.onNotification(
    function(data){
    if(data.wasTapped){
      //Notification was received on device tray and tapped by the user.
      alert("Tapped: " +  JSON.stringify(data) );
    }else{
      //Notification was received in foreground. Maybe the user needs to be notified.
      alert("Not tapped: " + JSON.stringify(data) );
    }
    },
    function(msg){
    alert('onNotification callback successfully registered: ' + msg);
    console.log('onNotification callback successfully registered: ' + msg);
    },
    function(err){
    alert('Error registering onNotification callback: ' + err);
    console.log('Error registering onNotification callback: ' + err);
    }
  );
			
```




