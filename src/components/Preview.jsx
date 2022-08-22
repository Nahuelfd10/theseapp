import React from 'react'
import {Container, Typography} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {styles} from "./styles";

const Preview = ({name, lastname, profession, description, file, linkedin}) => {

    return (
        <>
            <div className="title">
                <h2>TARJETA DE BIENVENIDA</h2>
            </div>
            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div style={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    display: "flex",
                    width: "700px",
                    boxShadow: "7px 7px 25px",
                    minWidth: "700px",
                }}>
                    <div className="card">
                        <div className="left">
                            <Typography sx={styles.previewText.name}>{name}</Typography>
                            <Typography sx={styles.previewText.name}>{lastname}</Typography>
                            <Typography sx={styles.previewText.profession}>{profession}</Typography>
                            <Typography sx={styles.previewText.description}>{description}</Typography>
                        </div>
                        <div className="right">
                            <img src={file}/>
                            <Typography sx={styles.previewText.linkedin}>
                                {linkedin ? (
                                    <>
                                        <LinkedInIcon style={{fill: 'white'}}/> {linkedin}
                                    </>
                                ) : null}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Preview