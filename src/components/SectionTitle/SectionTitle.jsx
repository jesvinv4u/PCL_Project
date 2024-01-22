const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-xl text-blue-600 font-semibold mb-2">-----{subHeading}-----</p>
            <h3 className="text-5xl font-bold border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;