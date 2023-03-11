const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
// firebase deploy --only functions ile deploy ediyoruz ama bu paralı bu yüzden index.js update etmeden index2.js olarak kaydedildi

exports.alisverisSepeti = functions.firestore.document('Alisveris/sepet').onCreate((snap,context) => {

  const= yeniVeri = snap.data();
  const fiyat = yeniVeri.fiyat;
  const miktar = yeniVeri.miktar;
  //let değişken için JavaScript te, var da kullanabiliriz

  let ciro = fiyat*miktar

  return snap.ref.update({ciro : ciro}); 
});