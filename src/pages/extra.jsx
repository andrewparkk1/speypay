// import React from "react";
// import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

// function Question() {
// const [age, setAge] = React.useState('');
// const handleChange = (event) => {
//   setAge(event.target.value);
// };

//   return (
//     <div className="flex flex-row justify-center items-center mt-52">
//       <form class="w-full max-w-lg border-2 border-black p-5">
//         {/* name */}
//         {/* <div class="flex flex-wrap -mx-3 mb-6">
//           <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-first-name"
//             >
//               First Name
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//               id="grid-first-name"
//               type="text"
//               placeholder="Jane"
//             />
//           </div>
//           <div class="w-full md:w-1/2 px-3">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-last-name"
//             >
//               Last Name
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-last-name"
//               type="text"
//               placeholder="Doe"
//               autoComplete="off"
//             />
//           </div>
//         </div> */}
//         {/* passowrd */}
//         {/* <div class="flex flex-wrap -mx-3 mb-6">
//           <div class="w-full px-3">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-password"
//             >
//               Password
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-password"
//               type="password"
//               placeholder="******************"
//             />
//             <p class="text-gray-600 text-xs italic">
//               Make it as long and as crazy as you'd like
//             </p>
//           </div>
//         </div> */}
//         {/* street address */}
//         <div class="flex flex-wrap -mx-3 mb-6">
//           <div class="w-full px-3">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-street"
//             >
//               Street Address
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-street"
//               type="text"
//               placeholder="450 Serra Mall"
//             />
//           </div>
//         </div>
//         {/* three */}
//         <div class="flex flex-wrap -mx-3 mb-6">
//           <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-city"
//             >
//               City
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-city"
//               type="text"
//               placeholder="Albuquerque"
//             />
//           </div>
//           <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-state"
//             >
//               State
//             </label>
//             <div class="relative">
//               <select
//                 class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="grid-state"
//               >
//                 <option>New Mexico</option>
//                 <option>Missouri</option>
//                 <option>Texas</option>
//               </select>
//               <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                 <svg
//                   class="fill-current h-4 w-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//           <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-zip"
//             >
//               Zip
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-zip"
//               type="text"
//               placeholder="90210"
//             />
//           </div>
//         </div>
//         {/* website url */}
//         <div class="flex flex-wrap -mx-3 mb-6">
//           <div class="w-full px-3">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-website"
//             >
//               Website URL
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-website"
//               type="text"
//               placeholder="www.speypay.com"
//             />
//           </div>
//         </div>

//         {/* business */}
//         {/* industry */}
//         <div class="flex flex-wrap -mx-3 mb-6">
//           <FormControl fullWidth>
//             <InputLabel id="demo-simple-select-label">Age</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               value={5}
//               label="Age"
//               onChange={}
//             >
//               <MenuItem value={10}>Ten</MenuItem>
//               <MenuItem value={20}>Twenty</MenuItem>
//               <MenuItem value={30}>Thirty</MenuItem>
//             </Select>
//           </FormControl>
//           {/* <div class="w-full px-3">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-industry"
//             >
//               Industry
//             </label>
//             <div class="relative">
//               <select
//                 class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="grid-state"
//               >
//                 <option>New Mexico</option>
//                 <option>Missouri</option>
//                 <option>Texas</option>
//               </select>
//               <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                 <svg
//                   class="fill-current h-4 w-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                 </svg>
//               </div>
//             </div>
//           </div> */}
//         </div>
//         {/* 2 */}
//         <div class="flex flex-wrap -mx-3 mb-6">
//           <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-first-name"
//             >
//               First Name
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//               id="grid-first-name"
//               type="text"
//               placeholder="Jane"
//             />
//           </div>
//           <div class="w-full md:w-1/2 px-3">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-last-name"
//             >
//               Last Name
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-last-name"
//               type="text"
//               placeholder="Doe"
//               autoComplete="off"
//             />
//           </div>
//         </div>
//         {/* 2 */}
//         <div class="flex flex-wrap -mx-3 mb-6">
//           <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-first-name"
//             >
//               First Name
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//               id="grid-first-name"
//               type="text"
//               placeholder="Jane"
//             />
//           </div>
//           <div class="w-full md:w-1/2 px-3">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-last-name"
//             >
//               Last Name
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-last-name"
//               type="text"
//               placeholder="Doe"
//               autoComplete="off"
//             />
//           </div>
//         </div>

//         {/* payment */}
//         {/* options checkbox */}
//         <div class="flex flex-wrap -mx-3 mb-6">
//           <div class="w-full px-3">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-street"
//             >
//               Street Address
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-street"
//               type="text"
//               placeholder="450 Serra Mall"
//             />
//           </div>
//         </div>
//         {/* 2 terms */}
//         <div class="flex flex-wrap -mx-3 mb-6">
//           <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-first-name"
//             >
//               First Name
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//               id="grid-first-name"
//               type="text"
//               placeholder="Jane"
//             />
//           </div>
//           <div class="w-full md:w-1/2 px-3">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-last-name"
//             >
//               Last Name
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-last-name"
//               type="text"
//               placeholder="Doe"
//               autoComplete="off"
//             />
//           </div>
//         </div>
//         {/* 2 terms */}
//         <div class="flex flex-wrap -mx-3 mb-6">
//           <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-first-name"
//             >
//               First Name
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//               id="grid-first-name"
//               type="text"
//               placeholder="Jane"
//             />
//           </div>
//           <div class="w-full md:w-1/2 px-3">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-last-name"
//             >
//               Last Name
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-last-name"
//               type="text"
//               placeholder="Doe"
//               autoComplete="off"
//             />
//           </div>
//         </div>

//         {/* credit */}
//         {/* one */}
//         <div class="flex flex-wrap -mx-3 mb-6">
//           <div class="w-full px-3">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-street"
//             >
//               Street Address
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-street"
//               type="text"
//               placeholder="450 Serra Mall"
//             />
//           </div>
//         </div>
//         {/* two two */}
//         <div class="flex flex-wrap -mx-3 mb-6">
//           <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-first-name"
//             >
//               First Name
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//               id="grid-first-name"
//               type="text"
//               placeholder="Jane"
//             />
//           </div>
//           <div class="w-full md:w-1/2 px-3">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-last-name"
//             >
//               Last Name
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-last-name"
//               type="text"
//               placeholder="Doe"
//               autoComplete="off"
//             />
//           </div>
//         </div>
//         <div class="flex flex-wrap -mx-3 mb-6">
//           <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-first-name"
//             >
//               First Name
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//               id="grid-first-name"
//               type="text"
//               placeholder="Jane"
//             />
//           </div>
//           <div class="w-full md:w-1/2 px-3">
//             <label
//               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//               for="grid-last-name"
//             >
//               Last Name
//             </label>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-last-name"
//               type="text"
//               placeholder="Doe"
//               autoComplete="off"
//             />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Question;
