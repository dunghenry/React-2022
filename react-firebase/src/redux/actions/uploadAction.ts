import { storage } from "../../firebase";
import { ref, uploadBytesResumable } from "firebase/storage"

export const upLoadFiles = async (folder: string, files: File[]) => {
    const promises: any[] = [];
    files.map(file => {
        const storageRef = ref(storage, `${folder}/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file);
        promises.push(uploadTask);
    })
    console.log(promises)
    const result = await Promise.all(promises);
    console.log(result);
}