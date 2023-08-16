import {collection, getDocs} from 'firebase/firestore';
import {db} from './firebase';

export async function getAllDrones() {
    const snapshot = await getDocs(collection(db, "dronemaven"));
    const drone = [];

    snapshot.forEach((doc) => {
        drone.push({id: doc.id, ...doc.data()});
    });

    return drone;
}

export async function getAllDronesMeet() {
    const snapshot = await getDocs(collection(db, "droneMeet"));
    const droneMeet = [];

    snapshot.forEach((doc) => {
        droneMeet.push({id: doc.id, ...doc.data()});
    });

    return droneMeet;
}