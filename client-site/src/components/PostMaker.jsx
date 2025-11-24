import React, { useState } from "react";
import { Image, Video, Calendar, FileText, Send, Edit2 } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

const PostMaker = () => {
    const [postText, setPostText] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState("");
    const [isUploading, setIsUploading] = useState(false); // for image upload status
    const { authUser } = useAuthStore();

    const imgbbKey = "d124993969e06253e686485e0548aaa8";

    // Handle image selection and upload
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setSelectedImage(file);
        setIsUploading(true);

        const formData = new FormData();
        formData.append("image", file);

        try {
            const res = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (data.success) {
                setUploadedImageUrl(data.data.url);
                toast.success("Image uploaded");
            } else {
                console.error("ImgBB upload failed:", data);
                toast.error("Image upload failed");
            }
        } catch (error) {
            console.error("Upload Failed:", error);
            toast.error("Image upload failed");
        } finally {
            setIsUploading(false);
        }
    };

    // Handle post submission
    const handlePost = async () => {
        if (!postText && !uploadedImageUrl) {
            return alert("Write something or upload an image.");
        }

        try {
            const payload = {
                user: authUser?._id,
                userFullName: authUser?.fullName,   
                text: postText,
            };

            if (uploadedImageUrl) {
                payload.images = [uploadedImageUrl];
            }

            const { data } = await axiosInstance.post("posts/createPost", payload, {
                headers: { "Content-Type": "application/json" },
            });

            toast.success("Uploaded");

            // Reset fields
            setPostText("");
            setUploadedImageUrl("");
            setSelectedImage(null);

        } catch (error) {
            console.error("Post upload failed:", error);
            toast.error("Upload failed");
        }
    };


    return (
        <div className="w-full py-4">
            <div className="max-w-3xl mx-auto px-4">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                    {/* Input Section */}
                    <div className="flex items-start gap-3 mb-4">
                        <div className="flex-shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                                alt="User Avatar"
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-gray-200"
                            />
                        </div>

                        <div className="flex-1 relative">
                            <textarea
                                placeholder="Write something ..."
                                value={postText}
                                onChange={(e) => setPostText(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                className="w-full hover:bg-gray-100 focus:bg-white border border-transparent focus:border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 resize-none transition-all duration-200 outline-none"
                                rows={isFocused || postText ? 4 : 1}
                            />
                            <Edit2 className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 bg-gray-50 pt-3 px-4 pb-2 rounded-b-lg">
                        <div className="flex items-center gap-2 md:gap-4">
                            {/* Hidden file input */}
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                id="uploadImage"
                                onChange={handleImageChange}
                            />

                            {/* Image Upload Button */}
                            <label
                                htmlFor="uploadImage"
                                className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer"
                            >
                                <Image className="w-4 h-4 md:w-5 md:h-5 text-gray-500 group-hover:text-blue-500 transition-colors" />
                                <span className="text-xs md:text-sm font-medium">Photo</span>
                            </label>

                            <button className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors group">
                                <Video className="w-4 h-4 md:w-5 md:h-5 text-gray-500 group-hover:text-red-500 transition-colors" />
                                <span className="text-xs md:text-sm font-medium">Video</span>
                            </button>

                            <button className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors group">
                                <Calendar className="w-4 h-4 md:w-5 md:h-5 text-gray-500 group-hover:text-green-500 transition-colors" />
                                <span className="text-xs md:text-sm font-medium">Event</span>
                            </button>

                            <button className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors group">
                                <FileText className="w-4 h-4 md:w-5 md:h-5 text-gray-500 group-hover:text-purple-500 transition-colors" />
                                <span className="text-xs md:text-sm font-medium">Article</span>
                            </button>
                        </div>

                        {/* Post Button */}
                        <button
                            onClick={handlePost}
                            disabled={isUploading} // disable while image uploading
                            className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Send className="w-4 h-4" />
                            <span className="text-sm md:text-base font-semibold">
                                Post
                            </span>
                        </button>
                    </div>

                    {/* Preview Image */}
                    {uploadedImageUrl && (
                        <div className="mt-4 relative inline-block">
                            <button
                                onClick={() => {
                                    setUploadedImageUrl("");
                                    setSelectedImage(null);
                                }}
                                className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-md hover:bg-red-600 transition"
                            >
                                ✕
                            </button>

                            <img
                                src={uploadedImageUrl}
                                alt="Uploaded preview"
                                className="rounded-lg max-h-28 object-cover border"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PostMaker;
