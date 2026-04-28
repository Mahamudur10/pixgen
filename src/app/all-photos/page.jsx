import PhotoCard from "@/components/PhotoCard";

const AllPhotosPage = async() => {
    const res = await fetch('https://pixgen-delta.vercel.app/data.json')
    const photos = await res.json()
    console.log(photos)
    return (
        <div>
            <h1 className="text-2xl font-bold m-4">All Photos</h1>
            <div className="grid grid-cols-4 gap-5">
                {
                    photos.map(photo => <PhotoCard key={photo.id} photo={photo}/>)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;