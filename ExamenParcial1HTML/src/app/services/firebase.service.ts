import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
 
  constructor(
    private firestore: AngularFirestore
  ) { }
 
  create_student(collection,record) {
    return this.firestore.collection(collection).add(record);
  }
 
  read_students(collection) {
    return this.firestore.collection(collection).snapshotChanges();
  }
  read_Onestudents(collection, id) {
    return this.firestore.collection(collection).doc(id).snapshotChanges();
  }
  update_student(collection,userId, data) {
    this.firestore.doc(collection + '/' + userId).update(data);
  }
  update_studenthd(recordID, record, collection) {
    return this.firestore.collection(collection).doc(recordID).set(record);
  }
  delete_student(collection,userId) {
    this.firestore.doc(collection + '/' + userId).delete();
  }
  
}
