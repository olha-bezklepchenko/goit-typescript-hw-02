import { useEffect, useState } from "react";
import { fetchImages } from "./services/api";
import { Toaster, toast } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isError, setIsError] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getData = async () => {
      try {
        setIsError(false);
        setNoResults(false);
        setIsLoading(true);
        const { results, total, total_pages } = await fetchImages(page, query);

        if (total === 0 || results.length === 0) {
          setNoResults(true);
        } else {
          setImages((prev) => [...prev, ...results]);
          setTotalPages(total_pages);
        }
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const handleChangePage = () => {
    if (page === totalPages && page !== 0) {
      toast.success("You've reached the end of the gallery");
      return;
    }
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (searchValue) => {
    setQuery(searchValue.trim().toLowerCase());
    setImages([]);
    setPage(1);
    setNoResults(false);
  };

  const handleIsModalOpen = (image) => {
    setSelectedImage(image);
  };

  const handleOnModalClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#bfdff5",
            color: "#19005f",
          },
        }}
      />
      <SearchBar setQuery={handleSetQuery} />

      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleIsModalOpen} />
      )}
      {isLoading && <Loader />}
      {isError && (
        <ErrorMessage
          title="Something went wrong..."
          message=" We couldn't load the images. Please check your internet connection
        or try again later."
        />
      )}
      {noResults && !isLoading && !isError && (
        <ErrorMessage
          title="No results found"
          message="Please try a different search term."
        />
      )}

      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={handleChangePage} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={handleOnModalClose}
          image={selectedImage}
        />
      )}
    </>
  );
}

export default App;
