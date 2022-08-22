import './App.css';
import Button from './components/Button';
import Form from "./components/Form";
import Preview from "./components/Preview";
import {Container} from "@mui/material";
import {useCallback, useState} from "react";
import Header from "./components/Header";
import html2canvas from "html2canvas";
import downloadjs from "downloadjs";

function App() {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [profession, setProfession] = useState('')
    const [description, setDescription] = useState('')
    const [linkedin, setLinkedin] = useState('')

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleLastnameChange = (event) => {
        setLastname(event.target.value);
    }

    const handleProfessionChange = (event) => {
        setProfession(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleLinkedinChange = (event) => {
        setLinkedin(event.target.value);
    }

    const [file, setFile] = useState();
    function handleFileChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleCaptureClick = useCallback(async () => {
        const elementToPrint = document.querySelector('.card')
        if (!elementToPrint) console.log("no encontré nada")
        const canvas = await html2canvas(elementToPrint);
        const dataURL = canvas.toDataURL('image/png');
        downloadjs(dataURL, 'download.png', 'image/png');
    }, [])

    return (<div className="layout">
        <Container>
            < Header />
            < Form
                name={name} handleNameChange={handleNameChange}
                lastname={lastname} handleLastnameChange={handleLastnameChange}
                profession={profession} handleProfessionChange={handleProfessionChange}
                description={description} handleDescriptionChange={handleDescriptionChange}
                linkedin={linkedin} handleLinkedinChange={handleLinkedinChange}
                handleFileChange={handleFileChange}
            />
            < Preview name={name} lastname={lastname} profession={profession} description={description} file={file} linkedin={linkedin}/>
            < Button handleCaptureClick={handleCaptureClick}/>
        </Container>
    </div>);
}

export default App;
