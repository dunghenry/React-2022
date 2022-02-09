import { toast } from "react-toastify"
import { browserLocalPersistence, browserSessionPersistence, createUserWithEmailAndPassword, sendPasswordResetEmail, setPersistence, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { ILogin, IRegister } from "types";
import { auth, providerFacebook, providerGoogle } from "../../firebase/index";

export const registerApi = async (user: IRegister) =>{
    try {
        const res = await createUserWithEmailAndPassword(auth, user.email, user.password);
        await updateProfile(res.user, {
            displayName: user.name
        })
        return res.user;
    } catch (error: any) {
        return toast.error(error.message)
    }
}

export const loginApi = async (user: ILogin) => {
    try {
        const {email, password, remember} = user;
        await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);
        const res = await signInWithEmailAndPassword(auth, email, password);
        return res.user;
    } catch (error: any) {
        return toast.error(error.message)
    }

}
export const googleApi = async () => {
    try {
       const res = await signInWithPopup(auth, providerGoogle)
       return res.user;
    } catch (error: any) {
        return toast.error(error.message)
    }
}
export const facebookApi = async () => {
    try {
       const res = await signInWithPopup(auth, providerFacebook)
       return res.user;
    } catch (error: any) {
        return toast.error(error.message)
    }
}

export const forgotPasswordApi = async (email: string) => {
    try {
        const res = await sendPasswordResetEmail(auth, email);
        return toast.success("Successfully! Check your email.");
    } catch (error: any) {
        return toast.error(error.message)
        
    }
}