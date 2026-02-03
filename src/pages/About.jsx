function About() {
    return (
        <div className="flex items-center justify-center min-h-screen flex-col gap-10 ">
            <div className="w-[70%] border border-r-6 border-b-6 rounded-md p-2 hover:border">
                <h2 className="text-center font-bold text-3xl mb-4">About Us</h2>
                <p className="text-center">Welcome to <span className="font-bold">NestQuest</span> — your trusted place to discover luxury villas, stylish apartments, and unique stays made for unforgettable trips.

                We built NestQuest with one goal: make finding the perfect stay simple, safe, and inspiring. Whether you’re planning a weekend escape, a family holiday, or a long-term stay, our platform helps you explore beautiful properties with clear details, high-quality photos, and a smooth booking experience.</p>
            </div>
            <div className="w-[70%] flex flex-col items-center border border-r-6 border-b-6 rounded-md p-2 hover:border">
                <h2 className="text-center font-bold text-3xl mb-4 ">What we offer</h2>
                <ul >
                    <li><span className="font-bold">Curated listings:</span> We focus on quality — comfort, design, and real value.</li>
                    <li><span className="font-bold">Smart search:</span> Filter by location, price, amenities, and availability in seconds.</li>
                    <li><span className="font-bold">Secure experience:</span> Safe communication, transparent policies, and reliable support.</li>
                </ul>
            </div>
            <div className="w-[70%] border border-r-6 border-b-6 rounded-md p-2 hover:border">
                <h2 className="text-center font-bold text-3xl mb-4">Why choose us</h2>
                <p className="text-center">Welcome to <span className="font-bold">NestQuest</span> We believe a great stay is more than just a place to sleep. It’s the start of memories. That’s why we care about the details: the view, the vibe, the comfort — and a platform that feels premium from start to finish.</p>
            </div>
        </div>
    )
}

export default About
