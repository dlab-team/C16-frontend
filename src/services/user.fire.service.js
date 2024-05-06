import { 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,
    updatePassword,
    sendPasswordResetEmail,
    deleteUser,
} from "firebase/auth"

import { auth } from "./firebaseConfig"

// Registra o loguea a un usuario
const authGoogle = async () => {
    let idToken = ''
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider).then(async(result) => {
        GoogleAuthProvider.credentialFromResult(result)
        idToken = await auth.currentUser.getIdToken()
    })
    return idToken
}

// loguea un usuario con correo y contraseña y me retorna el uid y idToken
const loginEmailAndPassword = async (email, password) => {
    let uid, idToken = ''
    const response = await signInWithEmailAndPassword(auth, email, password)
    if(response.uid){
        uid = response.uid
        idToken = response.accessToken
    }else if(response.user){
        uid = response.user.uid
        idToken = response.user.accessToken
    }else{
        throw new Error(`no uid & token fron request: signInWithEmailAndPassword`);
    }
    return {uid, idToken}
}

// registra un nuevo usuario con correo y contraseña
const registerEmailAndPassword = async (email, password) => {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    const idToken = await auth.currentUser.getIdToken()
    return idToken
}

// cierra sessión 
const logOut = async () => {
    const response = await signOut(auth)
    return response
}

// Cambiar la contraseña del usuario
const setPassword = async (newPassword) => {
    const user = auth.currentUser;
    const response = await updatePassword(user, newPassword)
    return response
}
// Enviar correo de recuperación de contraseña
const resetPasword = async (email) => {
    auth.languageCode = "es";
    const response = await sendPasswordResetEmail(auth, email)
    return response
}
// Enviar correo de recuperación de contraseña
const delete_user = async (email) => {
    const response = await deleteUser(auth.currentUser)
    return response
}

export {
    authGoogle,
    loginEmailAndPassword,
    registerEmailAndPassword,
    logOut,
    setPassword,
    resetPasword,
    delete_user,
}