// import React, { useState } from 'react';
// import axios from 'axios';

// export default function PersonList() {
//  const [mydata,setdata]=useState()

  
//     axios.get(`https://jsonplaceholder.typicode.com/users`)
//       .then((res) => {
//         setdata(res.data[0])
//         console.log(res.data[0]);
      
//       })


 
//     return (
//       <ul>
    
//      <li>{mydata.name}</li>
//       </ul>
//     )
//   }


// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }

// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function createPost() {               
//     axios
//       .post(baseURL, {
//         title: "Congrats Pre Med User",
//         body: "You have got 70% Discount on all bundles."
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={createPost}>Create Post</button>
//     </div>
//   );
// }

// import { useAxios } from "use-axios-client";

// export default function App() {
//   const { data, error, loading } = useAxios({
//     url: "https://jsonplaceholder.typicode.com/posts/1"
//   });

//   if (loading || !data) return "Your Connection was lost  !!";
//   if (error) return "Your Connection was lost";

//   return (
//     <div>
//       <h1>{data.title}</h1>
//       <p>{data.body}</p>
//     </div>
//   ) 
// }
