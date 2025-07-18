// importamos la config de la bd y la conexión
import {db} from './firebase.js';

// importamos metodos de firestore
import {
    collection, 
    getDocs, 
    doc, 
    getDoc, 
    addDoc, 
    deleteDoc, 
    setDoc
} from 'firebase/firestore';

// colección de productos
const productsCollection = collection(db, 'products');

// obtener todos los productos
export const getAllProducts = async () => {
    try {
        const snapshot = await getDocs(productsCollection);
        return snapshot.docs.map((doc) => (
            {
                id: doc.id, 
                ...doc.data()
            }
        ));
    } catch (error) {
        console.error(error);
    }
}

// obtener producto por id
export const getProductById = async (id) =>{
    try {
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);

        // si existe el producto con el id en cuestión retorna la info, sino nulo
        return snapshot.exists() ? {id:snapshot.id,...snapshot.data()} : null;

    } catch (error) {
        console.error(`Error al obtener producto con ID ${id}: `, error);
    }
    
};

// crear producto
export const createProduct = async (data)  => {
    try {
        const docRef = await addDoc(productsCollection, data);
        return { id: docRef.id, ...data };
    } catch (error) {
        console.error(error);
   }
}

// borrar producto por id
export const deleteProduct = async (id) => {
    try {
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);

        if (!snapshot.exists())
            return false;

        await deleteDoc(productRef);
        return true;

    } catch (error) {
        console.error(error);
    } 
}

// editar producto
export const updateProduct = async (id, productData) => {
    try {
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);

        if (!snapshot.exists())
            return false;

        await setDoc(productRef, productData, { merge:true });
        return { id, ...productData } ;

    } catch (error) {
        console.error(error);
    }
}