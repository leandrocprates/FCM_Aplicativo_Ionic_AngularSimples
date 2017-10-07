# FCM_Aplicativo_Ionic_AngularSimples


**Este projeto tem por objetivo criar um aplicativo ionic que recebe mensagens vindas do FCM(Firebase Cloud Message)**

O link a seguir segue o plugin utilizado no projeto que deve ser adicionado  [FCM Plugin](https://github.com/fechanique/cordova-plugin-fcm)



Modelo json de envio de mensagem 


```json
URL : https://fcm.googleapis.com/fcm/send 

Content-Type : application/json 

Authorization : key=AAAAGYw4hd8:APA91bG_vtOqwjhgXCbtwLltqUJuWSIF_H4ScHybfNhWoJ5JNxEnLKogPwyzfpHZidfn4H95jO88ViSaI7mgJLnm7K9fqrch8Ma-R-pbRaS1slspAum7UmBsa5ljbxJc1EUtDNWRt0CN


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

