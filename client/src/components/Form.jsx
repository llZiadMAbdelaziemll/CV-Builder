import React, { useState } from 'react'
import Education from "./Education";
import Experience from "./Experience";
import PersonalDetails from "./PersonalDetails";
import Project from "./Project";
import Extras from "./Extras";
import Success from "./Success";
import {BsFillPersonFill} from 'react-icons/bs';
import {AiFillProject,AiOutlineFileText} from 'react-icons/ai'
import {FaUniversity} from 'react-icons/fa'
import {MdOutlineMore} from 'react-icons/md'
import axios from "axios";
import { saveAs } from "file-saver";

const Form = () => {

    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        skills: "",
    
        exp1_org: "",
        exp1_pos: "",
        exp1_desc: "",
        exp1_dur: "",
        exp2_org: "",
        exp2_pos: "",
        exp2_des: "",
        exp2_dur: "",
    
        proj1_title: "",
        proj1_link: "",
        proj1_desc: "",
        proj2_title: "",
        proj2_link: "",
        proj2_desc: "",
    
        edu1_school: "",
        edu1_year: "",
        edu1_qualification: "",
        edu1_desc: "",
        edu2_school: "",
        edu2_year: "",
        edu2_qualification: "",
        edu2_desc: "",
    
        extra_1: "",
        extra_2: "",
      });

      const [page, setPage] = useState(0);
  const FormTitle = [
    "Personal Details",
    "Education",
    "Experience",
    "Projects",
    "Extras",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Education formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Experience formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Project formData={formData} setFormData={setFormData} />;
    } else {
      return <Extras formData={formData} setFormData={setFormData} />;
    }
  };



  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1 className="header text-center text-white">{FormTitle[page]}</h1>
      </div>

  
      <div className="progressbar ">
        <div className="d-flex justify-content-between align-items-center">
         
            <BsFillPersonFill style={{color: 'white' , backgroundColor: '#0099ff'}} className='icon icon1 fs-1'/>
           
             <FaUniversity style={{color:page >= 1  ? 'white' : "#0099ff", backgroundColor:page >= 1  ? '#0099ff' : "#0099ff27"}} className='icon icon2 fs-1'/>
             

        <AiFillProject style={{color:page >= 2  ? 'white' : "#0099ff", backgroundColor:page >= 2  ? '#0099ff' : "#0099ff27"}} className='icon icon3 fs-1'/>
        

        <AiOutlineFileText style={{color:page >= 3  ? 'white' : "#0099ff", backgroundColor:page >= 3  ? '#0099ff' : "#0099ff27"}} className='icon icon4 fs-1'/>
        

        <MdOutlineMore style={{color:page === 4  ? 'white' : "#0099ff", backgroundColor:page === 4  ? '#0099ff' : "#0099ff27"}} className='icon icon5 fs-1'/>
        </div>
        {/* <div className="proggress"
          style={{
            width:
              page === 0
                ? "20%"
                : page === 1
                ? "40%"
                : page === 2
                ? "60%"
                : page === 3
                ? "80%"
                : "100%",
          }}
        ></div> */}
      </div>
     

      <div className='page-display'>{PageDisplay()}</div>
      <div className="d-flex justify-content-center gap-3 py-5">
        <button
          className="btn btn-dark"
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            if (page === FormTitle.length - 1) {
              axios
                .post("http://localhost:5000/create-pdf", formData)
                .then(() =>
                  axios.get("http://localhost:5000/fetch-pdf", {
                    responseType: "blob",
                  })
                )
                .then((res) => {
                  const pdfBlob = new Blob([res.data], {
                    type: "application/pdf",
                  });
                  setSuccess(true && res.status === 200);
                  saveAs(pdfBlob, "Resume.pdf");
                });
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === FormTitle.length - 1 ? "Download Pdf" : "Next"}
        </button>
      </div>
      {success && <Success />}
    </div>
  )
}

export default Form