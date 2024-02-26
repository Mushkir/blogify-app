import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../firebase/index.firebase.credintials";

const ViewPage = () => {
  const { id } = useParams();

  const [document, setDocument] = useState([]);

  useEffect(() => {
    async function getDataById() {
      const docRef = doc(database, "posts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setDocument(docSnap.data());
        console.log(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    getDataById();
  }, [id]);

  return (
    <div className="font-Sen bg-lightColor min-h-screen p-10">
      <div className="">
        {document && (
          <div>
            <h3 className="text-center text-3xl font-semibold mb-5">
              {document.author}&apos;s Post
            </h3>
            <article className="p-6 max-w-[500px] mx-auto rounded-lg border shadow-md bg-gray-800 border-gray-700 mb-5">
              <div className="flex justify-between items-center mb-5 text-gray-500"></div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {document.title}
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                {document.desc}
              </p>
              <div className="flex justify-between items-center">
                <div className="">
                  <span className="font-medium dark:text-white">
                    <Link
                      className="hover:text-gray-200 hover:underline"
                      to={`/edit/${id}`}
                    >
                      Edit
                    </Link>
                  </span>
                </div>
              </div>
            </article>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewPage;
