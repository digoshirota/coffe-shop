import { Mail, User, ChevronDown } from "lucide-react";

export default function LeaveMessage() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto bg-white px-8 py-12 rounded-md shadow-sm">
        <h2 className="text-center text-2xl font-bold mb-2">LEAVE A MESSAGE</h2>
        <p className="text-center text-sm text-gray-600 mb-8 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipiscing, elit curae quis libero erat, justo in habitasse aliquet mi. 
          Condimentum inceptos euismod eu nunc ad nisl fermentum erat gravida
        </p>

        <form className="space-y-4">
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <User className="absolute right-3 top-3.5 h-4 w-4 text-gray-400" />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Mail className="absolute right-3 top-3.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Subject Select */}
          <div className="relative">
            <select
              className="w-full border border-gray-300 rounded px-4 py-3 pr-10 text-sm text-gray-700 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-red-500"
              defaultValue=""
            >
              <option value="" disabled>Select Subject</option>
              <option>General Inquiry</option>
              <option>Feedback</option>
              <option>Support</option>
            </select>
            <ChevronDown className="absolute right-3 top-3.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>

          {/* Message */}
          <textarea
            placeholder="Type Your Message"
            className="w-full border border-gray-300 rounded px-4 py-3 text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#e94f1d] hover:bg-red-700 text-white font-semibold py-3 rounded text-sm tracking-wide"
          >
            SUBMIT MESSAGE →
          </button>
        </form>
      </div>
    </section>
  );
}
