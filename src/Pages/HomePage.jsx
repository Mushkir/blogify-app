import PostCard from "../components/PostCard";
import { database } from "../firebase/index.firebase.credintials";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [post, setPost] = useState([]);

  const COLLECTION_NAME = "posts";

  useEffect(() => {
    async function getDataFromFirebase() {
      const querySnapshot = await getDocs(
        collection(database, COLLECTION_NAME)
      );

      setPost(
        querySnapshot.docs.map((postsDetails) => {
          console.log(postsDetails.data(), postsDetails.id);
          return postsDetails;
          // postsDetails.data()
        })
      );
      // console.log(`${doc.id} => ${doc.data()}`);
    }

    getDataFromFirebase();
  }, []);

  return (
    <div className="font-Sen bg-lightColor min-h-screen ">
      <h2 className=" text-center pt-10 text-4xl font-semibold">
        Our New Posts
      </h2>
      <div className="flex flex-wrap justify-between p-10">
        {post.map((element) => {
          return (
            <PostCard
              key={element.id}
              postId={element.id}
              title={element.data().title}
            />
          );
          // console.log(element.id, element.data());
        })}
      </div>
    </div>
  );
};

export default HomePage;
