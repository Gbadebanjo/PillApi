import Navbar from "../components/Navbar";
//import { FaBars, FaSearch, FaArrowRight,FaArrowLeft} from "react-icons/fa";
import styled from "styled-components";
//import { Button } from "react-bootstrap";
//import { useMediaQuery } from "react-responsive";
import Footer from "../components/Footer";
import DownloadOurApp from "../components/DownloadOurApp";

const Container = styled.div`
//background-color: white;
height: 100vh;
width: 100%;
`;
// const SectionOne =styled.div`
//   height:75%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `
// ;
// const StyledButton = styled.button`
//   background-color: #008080;
//   border-radius: 10px;
//   padding: 3px 25px;
//   margin-right: 40px;
//   color: white;
//   border: none;

//   &:hover {
//     background-color: white;
//     color: #008080;
//   }

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;



const PortalUpload = () => (
<Container>
 
 <Navbar /> 
{/* <SectionOne>
  <FaArrowLeft size={16} />
  <Heading>Post Products</Heading>
</SectionOne>
<SectionInputs>
<Input 
type= "text"
name = "title"
id ="title"
placeholder = "Title" Required
/>
<Input 
type= "text"
name = "type"
id ="type"
placeholder = "Type" Required
/>
<Input 
type= "text"
name = "brand"
id ="brand"
placeholder = "Brand" Required
/>
<Input 
type= "text"
name = "location"
id ="location"
placeholder = "Location" Required
/>
<textarea
type= "text"
name = "Description"
placeholder = "Description" Required
/>

</SectionInputs>
<SectionPrice>
<h1>Price</h1>

</SectionPrice>  */}

<Footer /> 
<DownloadOurApp />
</Container>
);


export default PortalUpload
