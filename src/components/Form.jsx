import React from 'react'
import {Box, TextField} from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {styles} from "./styles";

const Form = ({
                  name,
                  handleNameChange,
                  lastname,
                  handleLastnameChange,
                  profession,
                  handleProfessionChange,
                  description,
                  handleDescriptionChange,
                  linkedin,
                  handleLinkedinChange,
                  handleFileChange,
              }) => {

    return (
        <>
            <div>
                <h2>DATOS DE LA PERSONA</h2>
            </div>
            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                <div style={styles.form}>
                    <TextField sx={styles.formText.name}
                               label="Nombre"
                               color="success"
                               inputProps={{maxLength: 15}}
                               variant="filled"
                               value={name}
                               onChange={(e) => handleNameChange(e)}/>
                    <TextField sx={styles.formText.lastname}
                               label="Apellido"
                               color="success"
                               inputProps={{maxLength: 15}}
                               variant="filled"
                               value={lastname}
                               onChange={(e) => handleLastnameChange(e)}/>
                    <TextField sx={styles.formText.profession}
                               label="Profesion"
                               color="success"
                               inputProps={{maxLength: 28}}
                               variant="filled"
                               value={profession}
                               onChange={(e) => handleProfessionChange(e)}/>
                    <TextField sx={styles.formText.linkedin}
                               label="Linkedin"
                               color="success"
                               inputProps={{maxLength: 60}}
                               variant="filled"
                               value={linkedin}
                               onChange={(e) => handleLinkedinChange(e)}/>
                    <TextField sx={styles.formText.description}
                               label="Descripcion"
                               color="success"
                               inputProps={{maxLength: 130}}
                               variant="filled"
                               value={description}
                               onChange={(e) => handleDescriptionChange(e)}/>
                </div>
            </Box>
            <div className="btn-photo">
                <label htmlFor="file-upload" className="custom-file-upload">
                    <AddAPhotoIcon/> Subir foto
                </label>
                <input id="file-upload" type="file" onChange={handleFileChange}/>
            </div>
        </>
    )
}

export default Form