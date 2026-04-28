import Image from "next/image";

const PhotoDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch("https://pixgen-delta.vercel.app/data.json");
    const photos = await res.json();

    const photo = photos.find((p) => p.id == id);

    if (!photo) {
        return (
            <div className="text-center py-20">
                <h1 className="text-3xl font-bold">Photo Not Found</h1>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Image */}
                <div>
                    <Image
                        src={photo.imageUrl}
                        alt={photo.title}
                        width={700}
                        height={500}
                        className="w-full rounded-2xl object-cover shadow-md"
                    />
                </div>

                {/* Details */}
                <div>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {photo.category}
                    </span>

                    <h1 className="text-4xl font-bold mt-4 mb-4">{photo.title}</h1>

                    <p className="text-gray-600 mb-6 leading-7">{photo.prompt}</p>

                    <div className="space-y-3 text-sm text-gray-700">
                        <p>
                            <span className="font-semibold">Model:</span> {photo.model}
                        </p>

                        <p>
                            <span className="font-semibold">Resolution:</span>{" "}
                            {photo.resolution}
                        </p>

                        <p>
                            <span className="font-semibold">Likes:</span> {photo.likes}
                        </p>

                        <p>
                            <span className="font-semibold">Downloads:</span>{" "}
                            {photo.downloads}
                        </p>

                        <p>
                            <span className="font-semibold">Created:</span>{" "}
                            {new Date(photo.createdAt).toLocaleDateString()}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap mt-6">
                        {photo.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Button */}
                    <button className="mt-8 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800">
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PhotoDetailsPage;