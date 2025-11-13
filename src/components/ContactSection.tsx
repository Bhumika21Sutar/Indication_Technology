// import React, { useState } from "react";

// type PopupState = {
//   type: "success" | "error";
//   message: string;
// } | null;

// function ContactSection() {
//   const [popup, setPopup] = useState<PopupState>(null);

//   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);

//     formData.append("access_key", "f3ff2336-edec-4fe6-b0b2-e911f4dc4ffe");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     try {
//       // const res = await fetch("https://api.web3forms.com/submit", {
//       //   method: "POST",
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //     Accept: "application/json",
//       //   },
//       //   body: json,
//       // }).then((res) => res.json());

//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: json,
//       });
//       const data = await res.json();
//       console.log(data);

//       if (res.success) {
//         setPopup({ type: "success", message: "✅ Message sent successfully!" });
//         event.currentTarget.reset();
//       } else {
//         setPopup({ type: "error", message: "❌ Failed to send message!" });
//       }
//     } catch (error) {
//       setPopup({
//         type: "error",
//         message: "⚠️ Something went wrong. Try again!",
//       });
//     }

//     setTimeout(() => setPopup(null), 3000);
//   };

//   return (
//     <section
//       id="contact"
//       // className="
//       //   min-h-screen
//       //   flex items-center justify-center
//       //   bg-gradient-to-r from-pink-100 to-purple-100
//       //   px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32
//       //   py-10 sm:py-12 md:py-16 lg:py-20
//       // "
//       className="
//   min-h-screen
//   flex items-center justify-center
//   bg-gradient-to-r from-pink-100 to-purple-100
//   px-4 sm:px-6 md:px-8 lg:px-12
//   py-8 sm:py-10 md:py-12
// "
//     >
//       <div
//         className="
//           w-full max-w-6xl
//           grid grid-cols-1 md:grid-cols-2
//           gap-8 md:gap-10 lg:gap-16 xl:gap-20
//           items-center
//         "
//       >
//         {/* Left Content */}
//         <div className="text-center md:text-left">
//           <h2
//             className="
//               text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl
//               font-extrabold text-gray-900 leading-snug
//             "
//           >
//             Schedule Your{" "}
//             <span className="bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent">
//               Appointment
//             </span>
//           </h2>
//           <p
//             className="
//               mt-4
//               text-gray-600
//               text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl
//               max-w-xl
//             "
//           >
//             From first hello to final handshake, we're here to assist you every
//             step of the way. Reach out—your next big move starts here.
//           </p>

//           <ul
//             className="
//               mt-6
//               space-y-2 sm:space-y-3 md:space-y-4
//               text-gray-700
//               text-sm sm:text-base md:text-lg
//             "
//           >
//             <li>⚡ Connect all your tools in one place.</li>
//             <li>🚀 Stay ahead with cutting-edge features.</li>
//             <li>🧩 Tailor our platform to your needs.</li>
//             <li>💬 24/7 Support: Always here to help.</li>
//             <li>✨ ...And more</li>
//           </ul>
//         </div>

//         {/* Right Form */}
//         {/* <form
//           onSubmit={onSubmit}
//           className="
//             bg-white shadow-lg rounded-2xl
//             p-6 sm:p-8 md:p-10 lg:p-12
//             space-y-4 sm:space-y-5 md:space-y-6
//             relative
//           "
//         >

//           {popup && (
//             <div
//               className={`
//                 absolute -top-12 left-1/2 transform -translate-x-1/2
//                 px-6 py-3
//                 rounded-lg shadow-md
//                 text-white
//                 text-sm sm:text-base md:text-lg
//                 ${popup.type === "success" ? "bg-green-500" : "bg-red-500"}
//               `}
//             >
//               {popup.message}
//             </div>
//           )}

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             required
//             className="w-full px-4 py-3 sm:py-4 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base md:text-lg"
//           />
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             required
//             className="w-full px-4 py-3 sm:py-4 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base md:text-lg"
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="How can we help you?"
//             required
//             className="w-full px-4 py-3 sm:py-4 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base md:text-lg"
//           />
//           <input
//             type="text"
//             name="phone"
//             placeholder="Enter your phone number"
//             required
//             className="w-full px-4 py-3 sm:py-4 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base md:text-lg"
//           />
//           <textarea
//             name="message"
//             placeholder="Enter your message"
//             rows={4}
//             required
//             className="w-full px-4 py-3 sm:py-4 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base md:text-lg"
//           ></textarea>

//           <button
//             type="submit"
//             className="
//               w-full
//               py-3 sm:py-4 md:py-5
//               rounded-full
//               text-white font-semibold
//               bg-gradient-to-r from-pink-500 to-blue-600
//               hover:opacity-90 transition
//               text-sm sm:text-base md:text-lg
//             "
//           >
//             Send
//           </button>
//         </form> */}
//         <form
//           onSubmit={onSubmit}
//           className="
//     bg-white shadow-lg rounded-xl   /* ✅ smaller radius for clean look */
//     p-6 sm:p-8 md:p-8 lg:p-10       /* ✅ reduced padding */
//     space-y-4                       /* ✅ compact spacing */
//     relative
//     w-full max-w-md mx-auto         /* ✅ form width fixed */
//   "
//         >
//           {/* Popup */}
//           {popup && (
//             <div
//               className={`
//         absolute -top-12 left-1/2 transform -translate-x-1/2
//         px-4 py-2
//         rounded-md shadow-md
//         text-white
//         text-sm sm:text-base
//         ${popup.type === "success" ? "bg-green-500" : "bg-red-500"}
//       `}
//             >
//               {popup.message}
//             </div>
//           )}

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             required
//             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
//           />
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             required
//             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="How can we help you?"
//             required
//             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
//           />
//           <input
//             type="text"
//             name="phone"
//             placeholder="Enter your phone number"
//             required
//             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
//           />
//           <textarea
//             name="message"
//             placeholder="Enter your message"
//             rows={4}
//             required
//             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
//           ></textarea>

//           <button
//             type="submit"
//             className="
//       w-full
//       py-2.5 sm:py-3
//       rounded-full
//       text-white font-medium
//       bg-gradient-to-r from-pink-500 to-blue-600
//       hover:opacity-90 transition
//       text-sm sm:text-base
//     "
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default ContactSection;

//---------------------------------------------

// import React, { useState } from "react";

// type Status = "loading" | "success" | "error" | null;

// function ContactSection() {
//   const [status, setStatus] = useState<Status>(null);

//   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setStatus("loading");

//     const form = event.currentTarget;
//     const formData = new FormData(form);
//     formData.append("access_key", "f3ff2336-edec-4fe6-b0b2-e911f4dc4ffe");

//     const json = JSON.stringify(Object.fromEntries(formData));

//     try {
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: json,
//       }).then((r) => r.json());

//       console.log("Web3Forms response:", res); // ✅ helpful for debugging

//       if (res.success) {
//         setStatus("success");
//         form.reset();
//       } else {
//         setStatus("error");
//       }
//     } catch (err) {
//       console.error(err);
//       setStatus("error");
//     }

//     // clear message after 3 seconds
//     setTimeout(() => setStatus(null), 3000);
//   };

//   return (
//     <section
//       id="contact"
//       className="
//         min-h-screen
//         flex items-center justify-center
//         bg-gradient-to-r from-pink-100 to-purple-100
//         px-4 sm:px-6 md:px-8 lg:px-12
//         py-8 sm:py-10 md:py-12
//       "
//     >
//       <div
//         className="
//           w-full max-w-6xl
//           grid grid-cols-1 md:grid-cols-2
//           gap-8 md:gap-10 lg:gap-16 xl:gap-20
//           items-center
//         "
//       >
//         {/* Left Content */}
//         <div className="text-center md:text-left">
//           <h2
//             className="
//               text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl
//               font-extrabold text-gray-900 leading-snug
//             "
//           >
//             Schedule Your{" "}
//             <span className="bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent">
//               Appointment
//             </span>
//           </h2>
//           <p
//             className="
//               mt-4
//               text-gray-600
//               text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl
//               max-w-xl
//             "
//           >
//             From first hello to final handshake, we're here to assist you every
//             step of the way. Reach out—your next big move starts here.
//           </p>

//           <ul
//             className="
//               mt-6
//               space-y-2 sm:space-y-3 md:space-y-4
//               text-gray-700
//               text-sm sm:text-base md:text-lg
//             "
//           >
//             <li>⚡ Connect all your tools in one place.</li>
//             <li>🚀 Stay ahead with cutting-edge features.</li>
//             <li>🧩 Tailor our platform to your needs.</li>
//             <li>💬 24/7 Support: Always here to help.</li>
//             <li>✨ ...And more</li>
//           </ul>
//         </div>

//         {/* Right Form */}
//         <form
//           onSubmit={onSubmit}
//           className="
//             bg-white shadow-lg rounded-xl
//             p-6 sm:p-8 md:p-8 lg:p-10
//             space-y-4
//             relative
//             w-full max-w-md mx-auto
//           "
//         >
//           {/* Status Message */}
//           {status === "success" && (
//             <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-md text-sm sm:text-base">
//               ✅ Message sent successfully!
//             </div>
//           )}
//           {status === "error" && (
//             <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-md shadow-md text-sm sm:text-base">
//               ❌ Something went wrong. Please try again.
//             </div>
//           )}

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             required
//             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
//           />
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             required
//             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="How can we help you?"
//             required
//             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
//           />
//           <input
//             type="text"
//             name="phone"
//             placeholder="Enter your phone number"
//             required
//             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
//           />
//           <textarea
//             name="message"
//             placeholder="Enter your message"
//             rows={4}
//             required
//             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
//           ></textarea>

//           <button
//             type="submit"
//             disabled={status === "loading"}
//             className="
//               w-full
//               py-2.5 sm:py-3
//               rounded-full
//               text-white font-medium
//               bg-gradient-to-r from-pink-500 to-blue-600
//               hover:opacity-90 transition
//               text-sm sm:text-base
//               disabled:opacity-50
//             "
//           >
//             {status === "loading" ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default ContactSection;

//-----------------------------------------
import React, { useState } from "react";

type Status = "loading" | "success" | "error" | null;

function ContactSection() {
  const [status, setStatus] = useState<Status>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "f3ff2336-edec-4fe6-b0b2-e911f4dc4ffe");

    const json = JSON.stringify(Object.fromEntries(formData));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((r) => r.json());

      console.log("Web3Forms response:", res); // for debugging

      if (res.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }

    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section
      id="contact"
      className="
        min-h-screen 
        flex items-center justify-center 
        bg-gradient-to-r from-pink-100 to-purple-100 
        px-4 sm:px-6 md:px-8 lg:px-12 
        py-8 sm:py-10 md:py-12
      "
    >
      <div
        className="
          w-full max-w-6xl 
          grid grid-cols-1 md:grid-cols-2 
          gap-8 md:gap-10 lg:gap-16 xl:gap-20
          items-center
        "
      >
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl 
              font-extrabold text-gray-900 leading-snug
            "
          >
            Schedule Your{" "}
            <span className="bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent">
              Appointment
            </span>
          </h2>
          <p
            className="
              mt-4 
              text-gray-600 
              text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl
              max-w-xl
            "
          >
            From first hello to final handshake, we're here to assist you every
            step of the way. Reach out—your next big move starts here.
          </p>

          <ul
            className="
              mt-6 
              space-y-2 sm:space-y-3 md:space-y-4 
              text-gray-700 
              text-sm sm:text-base md:text-lg
            "
          >
            <li>⚡ Connect all your tools in one place.</li>
            <li>🚀 Stay ahead with cutting-edge features.</li>
            <li>🧩 Tailor our platform to your needs.</li>
            <li>💬 24/7 Support: Always here to help.</li>
            <li>✨ ...And more</li>
          </ul>
        </div>

        {/* Right Form */}
        <form
          onSubmit={onSubmit}
          className="
            bg-white shadow-lg rounded-xl
            p-6 sm:p-8 md:p-8 lg:p-10
            space-y-4
            relative
            w-full max-w-md mx-auto
          "
        >
          {/* Animated Message */}
          {status === "success" && (
            <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-md text-sm sm:text-base font-medium animate-fadeIn">
              ✅ Message sent successfully! Thank you 😊
            </div>
          )}
          {status === "error" && (
            <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-full shadow-md text-sm sm:text-base font-medium animate-fadeIn">
              ❌ Something went wrong. Please try again!
            </div>
          )}

          {/* Form Fields */}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
          />
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
          />
          <input
            type="text"
            name="subject"
            placeholder="How can we help you?"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
          />
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows={4}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="
              w-full 
              py-2.5 sm:py-3 
              rounded-full 
              text-white font-medium 
              bg-gradient-to-r from-pink-500 to-blue-600 
              hover:opacity-90 transition 
              text-sm sm:text-base
              disabled:opacity-50
            "
          >
            {status === "loading" ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
