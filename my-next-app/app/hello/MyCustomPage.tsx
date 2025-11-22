// "use client";

// import { Button, Card } from "@mui/material";
// // import { Button } from "@mui/material";
// import { Home, Favorite } from "@mui/icons-material";
// // import Card from "react-bootstrap/Card";
// import "bootstrap/dist/css/bootstrap.min.css";


// export default function HomePage(){
//     return(
//         <main className="container py-5">
//             <h1 className="mb-4 text-center">
//                 <Home fontSize="large" className="text-primary me-2"/>
//                 Welcome to Next.js + Bootstrap + MuI !</h1>
                
//             <div className='d-flex justify-content-center'>
//                 <Card style={{width:"20rem"}} className="shadow-sm">
//                     <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThuhBhwxiNFJVFLVbCpe0u3zCUlepMTVicYA&s" alt="sample"/>
//                     <Card.Body>
                        
//                         <Card.Title>React-Bootstrap Card</Card.Title>
//                         <Card.Text>This is example of using Bootstrap and React-Bootstrap together with Material Ui Icons in Next Js app.</Card.Text>
//                         <Button variant="primary">
//                             <Favorite className="me-2"/>Like
//                         </Button>
//                     </Card.Body>
//                 </Card>
//             </div>
//         </main>
//     )
// }


"use client";

import { Button } from "@mui/material";
import { Home, Favorite } from "@mui/icons-material";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  return (
    <main className="container py-5">
      <h1 className="mb-4 text-center">
        <Home fontSize="large" className="text-primary me-2" />
        Welcome to Next.js + Bootstrap + MUI!
      </h1>

      <div className="d-flex justify-content-center">
        <Card style={{ width: "20rem" }} className="shadow-sm">
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThuhBhwxiNFJVFLVbCpe0u3zCUlepMTVicYA&s"
            alt="sample"
          />
          <Card.Body>
            <Card.Title>React-Bootstrap Card</Card.Title>
            <Card.Text>
              This is an example of using Bootstrap and React-Bootstrap together
              with Material UI Icons in a Next.js app.
            </Card.Text>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Favorite className="me-2" />}
            >
              Like
            </Button>
          </Card.Body>
        </Card>
      </div>
    </main>
  );
}
