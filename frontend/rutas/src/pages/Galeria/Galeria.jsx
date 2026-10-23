import { useEffect, useState } from "react";
import { ImagePlus, Trash2, X } from "lucide-react";
import Nav from "../../components/Header/Nav/Nav";
import { isValidImageUrl } from "../../utils/imageUrlValidation.js";

const GALLERY_STORAGE_KEY = "rutas-gallery-photos";

function loadPhotos() {
    try {
        const savedPhotos = JSON.parse(
            localStorage.getItem(GALLERY_STORAGE_KEY) || "[]",
        );
        return Array.isArray(savedPhotos)
            ? savedPhotos.filter(
                (photo) => typeof photo === "string" && isValidImageUrl(photo),
            )
            : [];
    } catch {
        return [];
    }
}

function Galeria() {
    const [photos, setPhotos] = useState(loadPhotos);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [validationError, setValidationError] = useState("");

    useEffect(() => {
        localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(photos));
    }, [photos]);

    useEffect(() => {
        if (!isFormOpen) return;

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setIsFormOpen(false);
                setImageUrl("");
                setValidationError("");
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isFormOpen]);

    function closeForm() {
        setIsFormOpen(false);
        setImageUrl("");
        setValidationError("");
    }

    function handleSubmit(event) {
        event.preventDefault();
        const trimmedUrl = imageUrl.trim();

        if (!isValidImageUrl(trimmedUrl)) {
            setValidationError(
                "Usa una URL http(s) terminada en .jpg, .jpeg, .png, .webp, .gif, .avif, .bmp o .svg.",
            );
            return;
        }

        if (photos.includes(trimmedUrl)) {
            setValidationError("Esta imagen ya está en la galería.");
            return;
        }

        setPhotos((previousPhotos) => [trimmedUrl, ...previousPhotos]);
        closeForm();
    }

    function removePhoto(urlToRemove) {
        setPhotos((previousPhotos) =>
            previousPhotos.filter((photoUrl) => photoUrl !== urlToRemove),
        );
    }

    return (
        <div className="page">
            <Nav />

            <main className="gallery">
                <header className="gallery__heading">
                    <div>
                        <h1 className="gallery__title">Galería</h1>
                        <p className="gallery__subtitle">Tu colección de imágenes</p>
                    </div>

                    <div className="gallery__tools">
                        <p className="gallery__count" aria-live="polite">
                            {photos.length} {photos.length === 1 ? "foto" : "fotos"}
                        </p>
                        <button
                            className="gallery__add-button"
                            type="button"
                            onClick={() => setIsFormOpen(true)}
                        >
                            <ImagePlus size={18} aria-hidden="true" />
                            Agregar foto
                        </button>
                    </div>
                </header>

                {photos.length === 0 ? (
                    <section className="gallery__empty">
                        <ImagePlus size={36} aria-hidden="true" />
                        <h2>La galería está vacía</h2>
                        <button
                            className="gallery__add-button"
                            type="button"
                            onClick={() => setIsFormOpen(true)}
                        >
                            Agregar primera foto
                        </button>
                    </section>
                ) : (
                    <div className="gallery__grid">
                        {photos.map((url, index) => (
                            <article className="gallery__item" key={url}>
                                <img
                                    className="gallery__image"
                                    src={url}
                                    alt={`Foto ${index + 1} de la galería`}
                                    loading="lazy"
                                />
                                <button
                                    className="gallery__remove-button"
                                    type="button"
                                    aria-label={`Eliminar foto ${index + 1}`}
                                    title="Eliminar foto"
                                    onClick={() => removePhoto(url)}
                                >
                                    <Trash2 size={17} aria-hidden="true" />
                                </button>
                            </article>
                        ))}
                    </div>
                )}
            </main>

            {isFormOpen && (
                <div className="popup">
                    <div className="popup__overlay" onClick={closeForm} />
                    <section
                        className="popup__container gallery__dialog"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="gallery-form-title"
                    >
                        <div className="popup__header">
                            <h2 className="popup__title" id="gallery-form-title">
                                Agregar foto
                            </h2>
                            <button
                                className="popup__close"
                                type="button"
                                aria-label="Cerrar formulario"
                                onClick={closeForm}
                            >
                                <X size={20} aria-hidden="true" />
                            </button>
                        </div>

                        <form className="popup__form" noValidate onSubmit={handleSubmit}>
                            <label className="gallery__label" htmlFor="gallery-image-url">
                                URL de la imagen
                                <input
                                    className="gallery__input"
                                    id="gallery-image-url"
                                    type="url"
                                    inputMode="url"
                                    placeholder="https://ejemplo.com/foto.jpg"
                                    value={imageUrl}
                                    autoFocus
                                    onChange={(event) => {
                                        setImageUrl(event.target.value);
                                        setValidationError("");
                                    }}
                                />
                            </label>

                            {isValidImageUrl(imageUrl) && (
                                <img
                                    className="gallery__preview"
                                    src={imageUrl.trim()}
                                    alt="Vista previa de la imagen"
                                />
                            )}

                            {validationError && (
                                <p className="popup__validation-error" role="alert">
                                    {validationError}
                                </p>
                            )}

                            <div className="popup__bottom">
                                <button className="popup__publish" type="submit">
                                    <ImagePlus size={18} aria-hidden="true" />
                                    Agregar a la galería
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            )}
        </div>
    );
}

export default Galeria;