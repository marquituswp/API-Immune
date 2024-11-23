// Componente para subir una imagen y textos a la web
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Message from "../Login/Message";
export default function UploadImageText({ token, handleBack }) {
    const [data, setData] = useState(""); // Mensaje de error o éxito
    const [interests, setInterests] = useState([]); // Almacena los intereses (mostrar los que ya existen)
    const [inputInterest, setInputInterest] = useState(""); // Almacena el interés temporal
    const [imageFile, setImageFile] = useState(null); // Almacena el archivo seleccionado

    // Carga los intereses de la web
    useEffect(() => {
        const cif = jwtDecode(token).cif

        fetch(`http://localhost:3000/web/`, {
        })
            .then(response => response.ok ? response.json() : response.text())
            .then((data) => {
                data.map((web) => {
                    if (web.cifCommerce === cif) {
                        setInterests(web.texts)
                    }
                })
            })
            .catch(() => {
                setData("ERROR_FETCHING_DATA"); // Si hubo un error al hacer la petición
            });
    }, [token]);

    // Actualiza el interés temporal
    const handleInterestChange = (event) => {
        setInputInterest(event.target.value); // Actualiza el interés temporal
    };

    // Añade un interés a la lista
    const addInterest = () => {
        if (inputInterest.trim()) {
            setInterests([...interests, inputInterest.trim()]);
            setInputInterest("");
        }
    };

    // Elimina un interés de la lista
    const removeInterest = (indexToRemove) => {
        setInterests(interests.filter((_, index) => index !== indexToRemove)); // Filtra el texto a eliminar
    };

    // Actualiza el archivo seleccionado
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file); // Almacena el archivo en el estado
        }
    };

    // Sube la imagen y los textos a la web
    const handleClick = async (event) => {
        try {
            event.preventDefault();
            if (!imageFile) {
                setData("Image is required!");
                return;
            }

            // Crea un objeto FormData con la imagen y los textos
            const formData = new FormData();
            formData.append("image", imageFile);
            interests.forEach((interest, index) => {
                formData.append(`text[${index}]`, interest);
            });

            const response = await fetch(`http://localhost:3000/web/`, {
                method: "PATCH",
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            if (response.ok) {
                setData("Web updated successfully!");
            } else {
                setData("Failed to update web");
            }
        } catch (error) {
            console.error(error);
            setData("An error occurred while uploading");
        }
    };

    return (
        <>
            <h2>Update a Web</h2>
            <p className="resetButton" onClick={handleBack}>
                {"<- HandleCommerce"}
            </p>
            <form onSubmit={handleClick} className="formContainer">
                <div>
                    <input type="file" onChange={handleFileChange} placeholder="Upload Image" />
                </div>
                <div className="arrayInputContainer">
                    <input
                        type="text"
                        value={inputInterest}
                        onChange={handleInterestChange}
                        placeholder="Add Interest"
                    />
                    <button type="button" onClick={addInterest}>Add Text</button>
                </div>
                <ul>
                    {interests.map((interest, index) => (
                        <li key={index} style={{ display: "flex", alignItems: "center" }}>
                            {interest}
                            <button
                                type="button"
                                onClick={() => removeInterest(index)} // Llama a removeInterest
                                style={{ marginLeft: "10px", color: "red", cursor: "pointer" }}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
                <button type="submit">Submit</button>
            </form>
            <Message loginMessage={data} />
        </>
    );
}
