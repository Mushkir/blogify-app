import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostCard = ({ title, postId }) => {
  return (
    <div>
      <div className="card bg-primaryColor w-[320px] h-[430px] rounded-md mb-10 shadow">
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
            <Link
              to={`/view_post/${postId}`}
              className="bg-lightColor w-full rounded-md mt-5 py-2 hover:bg-hoverButtonColor block text-center hover:font-semibold"
              // onClick={redirectToViewPage}
            >
              Delete Post
            </Link>
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
