import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function About(){
    return(
        <>
            <div className="min-h-screen bg-amber-50">
                <Navbar />
                
                <div className="container mx-auto px-4 py-12">
                    <h1 className="text-4xl font-bold text-amber-900 mb-6">About Jahe</h1>
                    
                    <div className="flex flex-col md:flex-row gap-8 mb-12">
                        <div className="w-full md:w-1/2">
                            <Image 
                                src="/ginger-image.jpg" 
                                alt="Jahe Ginger Farm" 
                                width={600} 
                                height={400} 
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Story</h2>
                            <p className="text-gray-700 mb-4">
                                Founded in 2010, Jahe started as a small family farm with a passion for organic ginger cultivation. 
                                What began as a modest operation has now grown into one of the region's leading producers of premium 
                                ginger products, dedicated to promoting health and wellness through the power of this remarkable root.
                            </p>
                            <p className="text-gray-700">
                                Our commitment to sustainable farming practices and traditional processing methods ensures 
                                that every Jahe product delivers the purest, most potent benefits that ginger has to offer.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Mission</h2>
                        <p className="text-gray-700 mb-4">
                            At Jahe, we believe in the transformative power of natural ingredients. Our mission is to harness 
                            the extraordinary health benefits of ginger and make them accessible to everyone through innovative, 
                            delicious, and convenient products that enhance daily well-being.
                        </p>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-medium text-amber-700 mb-3">Our Values</h3>
                            <ul className="list-disc pl-5 text-gray-700">
                                <li className="mb-2">Commitment to organic, sustainable farming</li>
                                <li className="mb-2">Innovation in healthy food products</li>
                                <li className="mb-2">Transparency in our sourcing and production</li>
                                <li className="mb-2">Supporting local farming communities</li>
                                <li>Promoting the health benefits of ginger worldwide</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Growth Journey</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-5 rounded-lg shadow-md">
                                <h3 className="text-xl font-medium text-amber-700 mb-3">2010-2015</h3>
                                <p className="text-gray-700">Started with organic ginger farming and launched our first ginger tea product line, gaining recognition in local markets.</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg shadow-md">
                                <h3 className="text-xl font-medium text-amber-700 mb-3">2016-2020</h3>
                                <p className="text-gray-700">Expanded product range to include ginger supplements, candies, and cooking ingredients. Began exporting to neighboring countries.</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg shadow-md">
                                <h3 className="text-xl font-medium text-amber-700 mb-3">2021-Present</h3>
                                <p className="text-gray-700">Launched innovative ginger-based health foods and beverages. Recognized as an industry leader in the natural health products sector.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Commitment to Health</h2>
                        <p className="text-gray-700 mb-6">
                            Ginger has been used for centuries for its medicinal properties and health benefits. At Jahe, we're dedicated 
                            to scientific research that validates and expands our understanding of ginger's positive effects on:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {["Digestive Health", "Immune Support", "Anti-inflammatory Properties", "Antioxidant Benefits"].map((benefit, index) => (
                                <div key={index} className="bg-amber-100 p-4 rounded-lg text-center">
                                    <span className="font-medium text-amber-800">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="mt-12 text-center">
                        <Link href="/products" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                            Discover Our Products
                        </Link>
                    </div>
                </div>
                
                <footer className="bg-amber-900 text-amber-100 py-6">
                    <div className="container mx-auto px-4 text-center">
                        <p>© {new Date().getFullYear()} Jahe Ginger Company. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    )
};