import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { database } from "../firebase/index.firebase.credintials";
import { collection, addDoc } from "firebase/firestore";

const AddBlog = () => {
  // * Form validation (Schema: Zod)
  const schema = z.object({
    title: z
      .string()
      .min(3, {
        message: "Title must be at least 3 characters",
      })
      .max(100, { message: "Title can't be exceed 100 characters" }),

    desc: z
      .string()
      .min(50, {
        message: "Description must be at least 50 characters",
      })
      .max(500, { message: "Title can't be exceed 500 characters" }),

    author: z
      .string()
      .min(3, {
        message: "Name must be at least 3 characters",
      })
      .max(20, { message: "Name can't be exceed 20 characters" }),
  });

  // * useForm() for form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  // * Defining COLLECTION_NAME
  const COLLECTTION_NAME = "posts";
  // * Function for send the form data to database
  const sendDataToServer = async (data) => {
    console.log(data);

    try {
      const docRef = await addDoc(collection(database, COLLECTTION_NAME), data);
      console.log(docRef);
      console.log("Document written with ID: ", docRef.id);
      alert(`Dear ${data.author}! Your post has been successfully added.`);
      reset();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="font-Sen bg-lightColor min-h-screen p-10">
      <h3 className="text-center text-3xl font-semibold text-primaryColor">
        Add your posts here!
      </h3>
      <form
        action=""
        className=" bg-formColor p-5 rounded-md mt-5"
        onSubmit={handleSubmit(sendDataToServer)}
      >
        <FormInput
          label="Title"
          type="text"
          id="title"
          name="title"
          placeholder="Enter your post title"
          register={register("title")}
          errors={errors.title}
        />

        <FormTextArea
          label="Description"
          name="desc"
          id="desc"
          placeholder="Write about your post briefly..."
          register={register("desc")}
          errors={errors.desc}
        />

        <FormInput
          label="Author Name"
          id="author"
          name="author"
          placeholder="Enter your name"
          register={register("author")}
          errors={errors.author}
        />
        <button className=" bg-lightColor px-5 py-2 rounded-md hover:bg-hoverButtonColor mt-5">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
