import { toast } from "react-toastify"
import { doc, getDoc, setDoc } from "firebase/firestore/lite"
import { db } from "../../firebase"
import { IAuth, IProfile } from "types"
export const changeProfile = async (user: IAuth, data: IProfile) =>{
    try {
        await setDoc(doc(db, "users", user.uid), data);
        toast.success("Succesfully!");
        return data;
    } catch (error: any) {
        return toast.error(error.message)
    }
}
export const getProfile = async (uid: string) =>{
    try {
        const docRef = doc(db,`users/${uid}`)
        const docSnap = await getDoc(docRef)
        if(docSnap.exists())
            return docSnap.data();
    } catch (error: any) {
        return toast.error(error.message)
    }
}