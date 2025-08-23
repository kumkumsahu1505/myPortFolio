import React,{useState} from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";


const Contact = () => {
    const [formData, setformData] = useState({
        username:"",
        email: "",
        subject: "",
        msg: ""
    })
    const handleChange = (e) =>{
     const {name,value} = e.target;
        setformData({...formData,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setformData({
        username:"",
        email: "",
        subject: "",
        msg: ""})
        
    }

    return (
        <section className="py-20 bg-gray-900 text-white" id="contact">
            <div className="mx-auto px-6">
                {/* Section Title */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold uppercase tracking-wider relative inline-block">
                        Contact Me
                        <span className="block h-1 w-20 bg-yellow-500 mx-auto mt-3 rounded-full"></span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">
                            Let's Talk About Your Project
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Feel free to reach out if you're looking for a developer, have a
                            question, or just want to connect.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-yellow-500 text-xl" />
                                <a href="mailto:kumkumsahu1505@gmail.com" target="_blank">kumkumsahu1505@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-yellow-500 text-xl" />
                                <span>Noida, India</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">
                            <a
                                href="https://github.com/kumkumsahu1505"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="p-3 bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-black transition cursor-pointer"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/kumkum-sahu-53546b250/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="p-3 bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-black transition"
                            >
                                <FaLinkedinIn />
                            </a>


                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500"
                                    required
                                    value={formData.username}
                                    onChange={handleChange}
                                    name="username"

                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500"
                                    required
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                   
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Subject</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    name="subject"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Message</label>
                                <textarea
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500 h-32"
                                    required
                                    value={formData.msg}
                                    onChange={handleChange}
                                    name="msg"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <p className="pt-4 pl-50 text-red-600">currently the contact form is not working you can contact me on my email address : <a href="mailto:kumkumsahu1505@gmail.com" target="_blank" className="underline">kumkumsahu1505@gmail.com</a> </p>
        </section>
    );
};

export default Contact;
