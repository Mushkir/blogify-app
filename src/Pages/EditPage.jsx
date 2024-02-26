import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { database } from "../firebase/index.firebase.credintials";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const EditPage = () => {
  const { id } = useParams();

  console.log(id);

  const [document, setDocument] = useState({ title: "", desc: "" });

  const { handleSubmit } = useForm();

  const sendDataToServer = async (data) => {
    try {
      await updateDoc(doc(database, "posts", id), data);
      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  useEffect(() => {
    async function getDataById() {
      const docRef = doc(database, "posts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setDocument(docSnap.data());
        // console.log(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    getDataById();
  }, [id]);

  return (
    <div className="font-Sen bg-lightColor min-h-screen ">
      <div className="pt-20">
        <form
          className="max-w-[600px] h-[400px] rounded-md p-5 mx-auto bg-gray-800 border-gray-700"
          onSubmit={handleSubmit(sendDataToServer)}
        >
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="desc"
              value={document.title}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
              placeholder="Enter your title"
              required
              onChange={(e) =>
                setDocument({ ...document, title: e.target.value })
              }
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="desc"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              type="text"
              id="desc"
              name="desc"
              rows="8"
              value={document.desc}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
              placeholder="Enter your description"
              onChange={(e) => {
                setDocument({ ...document, desc: e.target.value });
              }}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  bg-lightColor text-primaryColor hover:bg-hoverButtonColor"
          >
            Update Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
