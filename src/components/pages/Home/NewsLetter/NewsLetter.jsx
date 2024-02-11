const NewsLetter = () => {
    return (
        <div className="w-full bg-sky-100 mt-20 py-16">
            <div className="max-w-[1240px] mx-auto grid items-center lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want to get all the information about our medical camp continuously?</h1>
                    <p className="font-semibold">Send your email and stay up to date.</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input className="p-3 flex w-full border rounded-md text-black" type="email" placeholder="Enter Email" />
                        <button className="text-white hover:text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 bg-sky-600">Notify us!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;