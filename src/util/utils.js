import { db } from "util/firebase";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
//create
import { storage } from "util/firebase";
import { ref, uploadString, getDownloadURL, deleteObject } from "firebase/storage";
import { v4 } from "uuid";

export const handleAddItem = async ({
  name,
  password,
  object,
  place,
  locker,
  memo,
  imagePath,
  date,
  location,
}) => {
  let imagePathUrl = "",
    imageRefPath = "";
  if (imagePath !== "") {
    imageRefPath = v4();
    const imageRef = ref(storage, `images/${imageRefPath}`);
    const response = await uploadString(imageRef, imagePath, "data_url");
    imagePathUrl = await getDownloadURL(response.ref);
  }
  console.log(location);
  const collectionRef = collection(db, "userStore");
  const payload = {
    name,
    password,
    object,
    place,
    locker,
    memo,
    date,
    imagePath: imagePathUrl,
    StoragePath: imageRefPath,
    location,
    timestamp: serverTimestamp(),
  };
  await addDoc(collectionRef, payload);
};

export const handleEdit = async (
  id,
  { name, password, object, place, locker, memo, imagePath, StoragePath, date, location }
) => {
  let imagePathUrl = "",
    imageRefPath = "";
  if (StoragePath !== "") {
    console.log("storage", StoragePath);
    imagePathUrl = imagePath;
    imageRefPath = StoragePath;
  } else if (imagePath !== "") {
    console.log("img");
    imageRefPath = v4();
    const imageRef = ref(storage, `images/${imageRefPath}`);
    const response = await uploadString(imageRef, imagePath, "data_url");
    imagePathUrl = await getDownloadURL(response.ref);
  }

  const docRef = doc(db, "userStore", id);
  const payload = {
    name,
    password,
    object,
    place,
    locker,
    memo,
    date,
    imagePath: imagePathUrl,
    StoragePath: imageRefPath,
    location,
    timestamp: serverTimestamp(),
  };
  await updateDoc(docRef, payload);
};

export const handleDelete = async (id) => {
  const docRef = doc(db, "userStore", id);
  // console.log(id);
  await deleteDoc(docRef);
};

export const handleDeleteImage = async (StoragePath) => {
  if (StoragePath === "") return;
  const desertRef = ref(storage, `images/${StoragePath}`);
  await deleteObject(desertRef)
    .then(() => {
      // console.log("이미지삭제완료");
      // console.log(StoragePath);
      // File deleted successfully
    })
    .catch((error) => {
      console.log("이미지삭제중에러발생", error);
      // Uh-oh, an error occurred!
    });
};
