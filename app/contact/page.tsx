const ContactPage = () => {
    return (
         <div className="max-w-2xl mx-auto h-125 px-4 py-12">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact us</h1>

            <p className="text-gray-700 mb-4">
                If you have any questions, suggestions, or problems, please contact us via the following:
            </p>

            <ul className="text-gray-600 space-y-2">
                <li>📧 Email: support@example.com</li>
                <li>📞 Phone: +374 99 123456</li>
                <li>📍 Address: Yerevan, Armenia</li>
            </ul>
        </div>
    )
}

export default ContactPage;