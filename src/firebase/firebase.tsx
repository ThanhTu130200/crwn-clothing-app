import firebase from "firebase/compat/app"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore"

const config = {
	apiKey: "AIzaSyABYPtTPTtDRVFywCqehsNchDxzfQ14zzU",
	authDomain: "crwn-db-1979f.firebaseapp.com",
	projectId: "crwn-db-1979f",
	storageBucket: "crwn-db-1979f.appspot.com",
	messagingSenderId: "136834740017",
	appId: "1:136834740017:web:9424b5a558479849e80a10",
	measurementId: "G-SSRXZ4044M",
}

const app = firebase.initializeApp(config)
const firestore = getFirestore(app)

export const createUserProfileDocument = async (userAuth: any, additionalData: any) => {
	if (!userAuth) return

	const userRef = doc(firestore, `users/${userAuth.uid}`)

	const snapShot = await getDoc(userRef)

	if (!snapShot.exists()) {
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await setDoc(userRef, {
				displayName,
				email,
				createdAt,
				...additionalData,
			})
		} catch (error) {
			console.log("error creating user", error)
		}
	}

	return userRef
}

export const storage = getStorage()
export const auth = getAuth()

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
	prompt: "select_account",
})
export const signInWithGoogle = (e: any) => {
	e.preventDefault()
	return signInWithPopup(auth, provider)
}

export default firebase
