import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import { database } from "../firebase/index.firebase.credintials";

const PostCard = ({ title, postId }) => {
  const refreshPage = () => {
    window.location.reload(false);
  };

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(database, "posts", postId));
      alert("Data deleted successfully");
      refreshPage(); // * Need to refresh the page after delete the record.
      console.log("Document deleted successfully.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="card bg-primaryColor sm:w-[320px] h-[430px] rounded-md mb-10 shadow">
        <img
          src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Blog Pic"
          className="w-full rounded-t"
        />
        <div className="mt-5 px-3">
          <h3 className="text-white text-base text-left font-semibold">
            {title}
          </h3>
          <div className="flex items-center justify-between gap-x-3">
            {/* View Button */}
            <Link
              to={`/view_post/${postId}`}
              className="bg-lightColor w-full rounded-md mt-5 py-2 hover:bg-hoverButtonColor block text-center hover:font-semibold"
              // onClick={redirectToViewPage}
            >
              View Post
            </Link>

            {/* Delete Button */}
            <button
              onClick={handleDelete}
              className="bg-lightColor w-full rounded-md mt-5 py-2 hover:bg-hoverButtonColor block text-center hover:font-semibold"
            >
              Delete Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  title: PropTypes.string,
  postId: PropTypes.string,
};
export default PostCard;
